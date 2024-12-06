'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useChatStore } from '@/lib/chat';

const GrowthDeveloper = () => {
  const { setOpen, addWelcomeMessage } = useChatStore();

  const handleScheduleMeeting = () => {
    setOpen(true);
    addWelcomeMessage('¡Bienvenido! Veo que estás interesado en conocer más sobre nuestros servicios de Growth Business Development. ¿Te gustaría agendar una reunión con nuestro equipo? Por favor, cuéntame más sobre tu empresa y tus objetivos.');
  };

  return (
    <section className="py-16 bg-growth-light-blue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/BD/avo1.png"
                alt="Growth Business Developer"
                fill
                className="rounded-lg shadow-lg object-cover object-[center_35%]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                quality={100}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4 text-growth-text">Un Growth Business Developer</h2>
            <p className="text-growth-text mb-6">
              Un Growth Business Developer es un profesional especializado en identificar y crear oportunidades de crecimiento para las empresas. Su rol abarca desde la planificación estratégica hasta la implementación de iniciativas que impulsan el desarrollo del negocio.
            </p>
            <Button 
              onClick={handleScheduleMeeting}
              className="bg-growth-blue text-white hover:bg-growth-dark-blue"
            >
              Agenda una Reunión
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthDeveloper;