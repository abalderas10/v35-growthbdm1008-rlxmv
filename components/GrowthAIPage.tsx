'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Search, Rocket, TrendingUp, Users, Globe, BarChart } from 'lucide-react';

const GrowthIntelligencePage = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: 'Análisis de Datos',
      icon: <Search className="w-8 h-8 text-blue-500" />,
      description: 'Utilizamos algoritmos avanzados para analizar grandes volúmenes de datos y extraer insights valiosos sobre tu negocio y mercado.',
    },
    {
      title: 'Automatización de Procesos',
      icon: <Rocket className="w-8 h-8 text-green-500" />,
      description: 'Implementamos soluciones de automatización inteligente para optimizar tus procesos de negocio y aumentar la eficiencia operativa.',
    },
    {
      title: 'Estrategias de Crecimiento',
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      description: 'Desarrollamos estrategias personalizadas basadas en datos para impulsar el crecimiento sostenible de tu empresa.',
    },
  ];

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/alberto-balderas'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Growth Intelligence</h1>
          <p className="text-xl mb-8">Potencia tu negocio con soluciones de automatización inteligente</p>
          <Button onClick={openCalendly} size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
            Solicita una Demostración
          </Button>
        </div>
      </section>

      {/* Características de Growth Intelligence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Características de Growth Intelligence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <BarChart className="w-12 h-12 text-blue-500" />, title: 'Análisis Predictivo' },
              { icon: <Rocket className="w-12 h-12 text-green-500" />, title: 'Automatización Inteligente' },
              { icon: <Globe className="w-12 h-12 text-purple-500" />, title: 'Insights de Mercado' },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fases de Implementación */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Fases de Implementación</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all ${
                  activePhase === index ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setActivePhase(index)}
              >
                <div className="flex items-center mb-4">
                  {phase.icon}
                  <h3 className="text-xl font-semibold ml-2">{phase.title}</h3>
                </div>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Beneficios de Growth Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Crecimiento Acelerado', description: 'Impulsa el crecimiento de tu negocio con estrategias basadas en datos.' },
              { icon: <Users className="w-8 h-8" />, title: 'Mejora en la Toma de Decisiones', description: 'Toma decisiones informadas con insights precisos y actualizados.' },
              { icon: <Rocket className="w-8 h-8" />, title: 'Eficiencia Operativa', description: 'Optimiza tus procesos de negocio con automatización inteligente.' },
              { icon: <Globe className="w-8 h-8" />, title: 'Ventaja Competitiva', description: 'Mantente a la vanguardia en tu industria con tecnología de punta.' },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-4">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para potenciar tu negocio con Growth Intelligence?</h2>
          <p className="text-xl mb-8">Descubre cómo nuestra solución puede transformar tu empresa</p>
          <Button onClick={openCalendly} size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            Agenda una Demostración
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GrowthIntelligencePage;