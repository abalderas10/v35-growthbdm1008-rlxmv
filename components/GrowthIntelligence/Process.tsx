'use client';

import { Search, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Análisis Inicial',
    description: 'Evaluamos tus necesidades específicas y proponemos soluciones estratégicas.'
  },
  {
    icon: Rocket,
    title: 'Implementación Rápida',
    description: 'Diseñamos, desarrollamos e integramos las herramientas necesarias.'
  },
  {
    icon: LineChart,
    title: 'Optimización Continua',
    description: 'Ajustamos y mejoramos los sistemas para maximizar resultados.'
  }
];

const Process = () => {
  return (
    <section className="py-16 bg-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-300">
          ¿Cómo Funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-200">{step.title}</h3>
              <p className="text-blue-100">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;