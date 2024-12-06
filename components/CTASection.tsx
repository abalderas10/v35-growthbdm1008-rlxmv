'use client';

import { Button } from '@/components/ui/button';
import { useChatStore } from '@/lib/chat';

const CTASection = () => {
  const { setOpen, addWelcomeMessage } = useChatStore();

  const handleScheduleMeeting = () => {
    setOpen(true);
    addWelcomeMessage('¡Hola! Me alegro que estés interesado en agendar una reunión. ¿Te gustaría que te ayude a programar una consulta con nuestro equipo? Por favor, cuéntame un poco sobre tu proyecto y el horario que prefieres.');
  };

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para impulsar tu negocio?</h2>
        <p className="text-xl mb-8">
          Descubre cómo nuestras estrategias de crecimiento y alianzas pueden llevar tu empresa al siguiente nivel.
        </p>
        <Button 
          size="lg" 
          variant="outline" 
          className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
          onClick={handleScheduleMeeting}
        >
          Agenda una reunión hoy y trabajemos en tu próximo gran proyecto
        </Button>
      </div>
    </section>
  );
};

export default CTASection;