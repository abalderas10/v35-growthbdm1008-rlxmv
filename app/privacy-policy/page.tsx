import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose">
          <h1>Política de Privacidad</h1>
          <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString()}</p>

          <p>En Growth Business Development S.A. de C.V., valoramos la privacidad de nuestros usuarios y estamos comprometidos con la protección de su información personal. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información al interactuar con nuestro agente de IA.</p>

          <h2>1. Información que Recopilamos</h2>
          <ul>
            <li>Datos personales: Nombre, número de teléfono, historial de interacciones y correo electrónico.</li>
            <li>Datos recopilados automáticamente: Información generada durante el uso de nuestra aplicación.</li>
            <li>Cookies: Utilizamos cookies para mejorar la experiencia del usuario y optimizar las interacciones en nuestra página.</li>
          </ul>

          <h2>2. Uso de la Información</h2>
          <ul>
            <li>Atención al cliente: Para responder consultas y resolver problemas.</li>
            <li>Análisis y mejora del servicio: Para evaluar y mejorar la calidad de nuestro agente de IA.</li>
            <li>Experiencia del usuario: Adaptar y personalizar el servicio según las interacciones.</li>
          </ul>

          <h2>3. Protección de la Información</h2>
          <ul>
            <li>Usamos certificados SSL para proteger las interacciones y los datos transmitidos.</li>
            <li>Los datos se almacenan de forma segura en servidores en la nube (Google Cloud Platform - GCP).</li>
          </ul>

          <h2>4. Derechos del Usuario</h2>
          <p>Los usuarios pueden solicitar acceso, corrección o eliminación de su información personal escribiendo a admin@growthbdm.com o a través del agente de IA.</p>

          <h2>5. Uso de Cookies</h2>
          <p>Utilizamos cookies para mejorar la experiencia del usuario y las interacciones en la página.</p>

          <h2>6. Cambios a esta Política</h2>
          <p>Los cambios en esta Política serán notificados a los usuarios mediante correo electrónico.</p>

          <h2>7. Contacto</h2>
          <p>Para cualquier consulta relacionada con esta Política de Privacidad, contáctanos en:</p>
          <p>Email: admin@growthbdm.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;