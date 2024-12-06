'use client';

import { DollarSign, Zap, Settings, Scale } from 'lucide-react';

const advantages = [
  {
    icon: DollarSign,
    title: 'Reducción de Costos',
    description: 'Automatiza procesos operativos y administrativos.'
  },
  {
    icon: Zap,
    title: 'Incremento en la Eficiencia',
    description: 'Enfoca a tu equipo en tareas estratégicas.'
  },
  {
    icon: Settings,
    title: 'Personalización Total',
    description: 'Adaptamos cada solución a los desafíos únicos de tu negocio.'
  },
  {
    icon: Scale,
    title: 'Escalabilidad Garantizada',
    description: 'Nuestras herramientas crecen contigo.'
  }
];

const Advantages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Ventajas que Transforman Tu Negocio
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <advantage.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;