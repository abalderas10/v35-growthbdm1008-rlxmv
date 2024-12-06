import React from 'react';
import { locales } from '@/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose">
          <h1>Términos de Servicio</h1>
          <p className="text-gray-600">Última actualización: {new Date().toLocaleDateString()}</p>

          <p>Growth Business Development S.A. de C.V. ofrece un agente de IA diseñado para atender a usuarios finales y proporcionar asistencia eficiente. Al usar este servicio, aceptas los siguientes Términos de Servicio.</p>

          <h2>1. Aceptación de los Términos</h2>
          <p>Al acceder a nuestro agente de IA, aceptas estos términos en su totalidad. Si no estás de acuerdo, no utilices el servicio.</p>

          <h2>2. Requisitos de Uso</h2>
          <ul>
            <li>Solo usuarios registrados pueden utilizar el servicio.</li>
            <li>Está estrictamente prohibido el uso indebido, lenguaje ofensivo o cualquier actividad ilegal al interactuar con el agente.</li>
          </ul>

          <h2>3. Propiedad Intelectual</h2>
          <p>Todos los derechos de la aplicación, incluidos los textos, imágenes y algoritmos de IA, son propiedad de Growth Business Development S.A. de C.V..</p>

          <h2>4. Limitación de Responsabilidad</h2>
          <p>Growth Business Development S.A. de C.V. no se hace responsable de:</p>
          <ul>
            <li>Interrupciones del servicio debido a fallos técnicos.</li>
            <li>Consecuencias derivadas del mal uso de la aplicación.</li>
            <li>Pérdida de datos por causas ajenas a nuestra voluntad.</li>
          </ul>

          <h2>5. Soporte y Mantenimiento</h2>
          <p>Ofrecemos soporte técnico. Los usuarios pueden contactarnos en admin@growthbdm.com.</p>

          <h2>6. Modificaciones y Suspensiones</h2>
          <p>Nos reservamos el derecho de modificar o suspender el servicio. Los cambios serán notificados por correo electrónico.</p>

          <h2>7. Ley Aplicable y Jurisdicción</h2>
          <p>Estos Términos de Servicio se rigen por las leyes de México. En caso de disputas, se resolverán bajo la jurisdicción del Estado de México.</p>

          <h2>8. Contacto</h2>
          <p>Para consultas sobre estos términos, contáctanos en:</p>
          <p>Email: admin@growthbdm.com</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;