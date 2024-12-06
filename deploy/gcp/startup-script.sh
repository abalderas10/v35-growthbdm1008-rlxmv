#!/bin/bash

# Update system packages
apt-get update
apt-get upgrade -y

# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Install n8n globally
npm install n8n -g

# Create n8n service user
useradd -r -s /bin/false n8n

# Create necessary directories
mkdir -p /opt/n8n/data
chown -R n8n:n8n /opt/n8n

# Create systemd service for n8n
cat > /etc/systemd/system/n8n.service << EOL
[Unit]
Description=n8n Workflow Automation
After=network.target

[Service]
Type=simple
User=n8n
WorkingDirectory=/opt/n8n
Environment=N8N_PROTOCOL=https
Environment=N8N_HOST=n8n.growthbdm.com
Environment=N8N_PORT=5678
Environment=NODE_ENV=production
ExecStart=/usr/bin/n8n start
Restart=always

[Install]
WantedBy=multi-user.target
EOL

# Start and enable n8n service
systemctl daemon-reload
systemctl enable n8n
systemctl start n8n

# Install and configure Nginx
apt-get install -y nginx certbot python3-certbot-nginx

# Configure Nginx for n8n
cat > /etc/nginx/sites-available/n8n << EOL
server {
    server_name n8n.growthbdm.com;
    
    location / {
        proxy_pass http://localhost:5678;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOL

# Enable the site
ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/

# Test and reload Nginx
nginx -t
systemctl reload nginx

# Import n8n workflows
n8n import:workflow /app/deploy/n8n/workflows/*.json