'use client';

import { Globe, Cpu, Cog } from 'lucide-react';

const solutions = [
  {
    icon: Globe,
    title: 'Páginas Web Personalizadas',
    description: 'Creamos páginas web a la medida para empresas de construcción, arquitectura, ingeniería y más.',
    features: [
      'Portafolios de Proyectos: Muestra tus obras con galerías atractivas.',
      'Integración de Contacto: Simplifica la comunicación con tus clientes.',
      'SEO Optimizado: Aumenta tu visibilidad en línea y genera más leads.'
    ]
  },
  {
    icon: Cpu,
    title: 'Agentes de Inteligencia Artificial',
    description: 'Implementa asistentes virtuales que entienden las necesidades de tu industria.',
    features: [
      'Responden preguntas frecuentes sobre servicios, materiales y procesos.',
      'Gestionan inventarios en tiempo real.',
      'Automatizan la atención a clientes y la programación de citas.',
      'Realizan ventas y promociones de manera inteligente.'
    ]
  },
  {
    icon: Cog,
    title: 'Automatización de Procesos',
    description: 'Libera el potencial de tu equipo automatizando tareas repetitivas:',
    features: [
      'Control de Inventarios: Actualizaciones automáticas y alertas en tiempo real.',
      'Gestión de Cotizaciones: Cotizaciones dinámicas basadas en precios actuales de materiales.',
      'Análisis Predictivo: Información para tomar decisiones estratégicas.'
    ]
  }
];

const Solutions = () => {
  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Soluciones Inteligentes para Empresas de Construcción, Arquitectura e Ingeniería
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-blue-800 rounded-lg p-6 text-white">
              <solution.icon className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
              <p className="mb-4 text-blue-100">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-blue-200">• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;