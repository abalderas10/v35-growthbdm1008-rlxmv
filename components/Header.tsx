'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, Link } from '@/navigation';
import { locales } from '@/navigation';
import { useChatStore } from '@/lib/chat';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const t = useTranslations('Header');
  const pathname = usePathname();
  const router = useRouter();
  const { setOpen, addWelcomeMessage } = useChatStore();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '/estrategias-expansion', label: 'expansionStrategies' },
    { href: '/growth-intelligence', label: 'growthIntelligence' },
    { href: '/blog', label: 'blog' },
  ];

  const changeLanguage = (lang: string) => {
    router.push(pathname, { locale: lang });
  };

  const getLanguageLabel = (locale: string) => {
    const labels = {
      es: 'Español',
      en: 'English',
      zh: '中文'
    };
    return labels[locale as keyof typeof labels] || locale.toUpperCase();
  };

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
    <>
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
      <header className={`bg-white shadow-md transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GrowthBDM_blue-wXHawxugy3GdFhlMNBRN9ZTQdwkDBa.png"
              alt="Growth BDM Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.label === 'blog' ? 'https://blog.growthbdm.com' : item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                target={item.label === 'blog' ? '_blank' : '_self'}
                rel={item.label === 'blog' ? 'noopener noreferrer' : ''}
              >
                {t(item.label)}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 px-0">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((locale) => (
                  <DropdownMenuItem
                    key={locale}
                    onClick={() => changeLanguage(locale)}
                    className="cursor-pointer"
                  >
                    {getLanguageLabel(locale)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>
        )}
      </header>
      {isSticky && <div className="h-[72px]" />}
    </>
  );
};

export default Header;