'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useChatStore } from '@/lib/chat';

const HeroSection = () => {
  const t = useTranslations('HeroSection');
  const { setOpen, addWelcomeMessage } = useChatStore();

  const handleExploreServices = () => {
    setOpen(true);
    addWelcomeMessage('¡Hola! Me alegro que estés interesado en nuestros servicios. En Growth Business Development ofrecemos:\n\n1. Estrategias de Expansión\n2. Growth Intelligence\n3. Alianzas Estratégicas\n4. Desarrollo de Negocios\n\n¿Sobre cuál de estos servicios te gustaría saber más?');
  };

  return (
    <section className="bg-gradient-to-r from-growth-blue to-growth-dark-blue text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
        <Button 
          size="lg" 
          className="bg-white text-growth-blue hover:bg-growth-light-blue"
          onClick={handleExploreServices}
        >
          {t('cta')}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;