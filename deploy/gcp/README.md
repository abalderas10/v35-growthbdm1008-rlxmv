# Despliegue en Google Cloud Platform

## Requisitos Previos

1. Cuenta de GCP con facturación habilitada
2. gcloud CLI instalado y configurado
3. Proyecto creado en GCP
4. Docker y Docker Compose instalados localmente

## Pasos para el Despliegue

1. Crear una VM en GCP:
```bash
gcloud compute instances create growthbdm \
  --zone=us-central1-a \
  --machine-type=e2-medium \
  --image-family=ubuntu-2004-lts \
  --image-project=ubuntu-os-cloud \
  --metadata-from-file startup-script=deploy/gcp/startup-script.sh
```

2. Configurar Firewall:
```bash
gcloud compute firewall-rules create allow-http \
  --allow tcp:80 \
  --target-tags=http-server
```

3. Configurar DNS:
- Agregar registro A en tu proveedor DNS apuntando a la IP de la VM

4. Configurar SSL (opcional):
```bash
sudo certbot --nginx -d growthbdm.com -d www.growthbdm.com
```

## Monitoreo

1. Ver logs de la aplicación:
```bash
docker-compose logs -f
```

2. Monitorear recursos:
```bash
docker stats
```

## Mantenimiento

1. Actualizar la aplicación:
```bash
git pull
docker-compose down
docker-compose up -d --build
```

2. Backup de datos:
```bash
# Configurar según necesidades específicas
```

## Troubleshooting

1. Verificar estado de la aplicación:
```bash
docker-compose ps
```

2. Verificar logs del sistema:
```bash
sudo journalctl -u docker.service
```

## Contacto

Para soporte técnico: tech@growthbdm.com