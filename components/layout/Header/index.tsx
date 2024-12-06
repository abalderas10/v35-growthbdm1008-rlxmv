'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from '@/navigation';
import { TopBanner } from './TopBanner';
import { Navigation } from './Navigation';
import { LanguageSelector } from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <>
      <TopBanner />
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
          
          <Navigation className="hidden md:flex space-x-6" />
          
          <div className="flex items-center space-x-4">
            <LanguageSelector 
              currentLocale={pathname.split('/')[1]} 
              onLanguageChange={handleLanguageChange}
            />
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4">
            <Navigation 
              className="flex flex-col"
              onItemClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </header>
      {isSticky && <div className="h-[72px]" />}
    </>
  );
};

export default Header;