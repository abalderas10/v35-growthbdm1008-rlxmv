'use client';

import { useEffect } from 'react';
import HeroSection from './GrowthIntelligence/HeroSection';
import Solutions from './GrowthIntelligence/Solutions';
import Advantages from './GrowthIntelligence/Advantages';
import Process from './GrowthIntelligence/Process';
import Newsletter from './GrowthIntelligence/Newsletter';

const GrowthIntelligencePage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/alberto-balderas'
      });
    }
  };

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <HeroSection onCalendlyClick={openCalendly} />
      <Solutions />
      <Advantages />
      <Process />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Transforma tu Negocio Hoy Mismo
            </h2>
            <p className="mb-8 text-center text-gray-700">
              Eleva el rendimiento de tu empresa con Growth Intelligence. Desde una página web profesional hasta la implementación de tecnología de punta, estamos listos para impulsar tu éxito.
            </p>
            
            <Newsletter />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GrowthIntelligencePage;