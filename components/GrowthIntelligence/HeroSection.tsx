'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onCalendlyClick: () => void;
}

const HeroSection = ({ onCalendlyClick }: HeroSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-300">
              Growth Business Development
            </h1>
            <p className="text-xl mb-6 text-blue-200">
              Construye el Futuro de tu Negocio
            </p>
            <p className="mb-8 text-blue-100">
              En Growth Business Development, transformamos la manera en que operas y haces crecer tu negocio. Somos expertos en desarrollo de negocios, creación de páginas web personalizadas, y la implementación de agentes de inteligencia artificial para automatizar y optimizar tus procesos empresariales.
            </p>
            <Button onClick={onCalendlyClick} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              Conoce más
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/ai/AI_chip.jpeg"
              alt="AI Assistant"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;