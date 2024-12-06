import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useChatStore } from '@/lib/chat';

export const TopBanner = () => {
  const t = useTranslations('Header');
  const { setOpen, addWelcomeMessage } = useChatStore();

  const handleBuildAlliances = () => {
    setOpen(true);
    addWelcomeMessage(
      "¡Bienvenido a AliEst! Somos un grupo especializado en crear y fortalecer alianzas estratégicas. " +
      "Podemos ayudarte a:\n\n" +
      "• Identificar socios estratégicos ideales\n" +
      "• Desarrollar propuestas de valor conjuntas\n" +
      "• Estructurar acuerdos de colaboración\n" +
      "• Implementar proyectos exitosos\n\n" +
      "¿En qué tipo de alianza estratégica estás interesado?"
    );
  };

  return (
    <div className="bg-blue-950 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm md:text-base">{t('topBanner')}</p>
        <a
          href="https://aliest.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            {t('buildAlliances')}
          </Button>
        </a>
      </div>
    </div>
  );
};