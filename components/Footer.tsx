'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Growth BDM</h3>
            <p className="text-gray-400">
              Especialistas en desarrollo de negocios y alianzas estratégicas en México.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400">{t('home')}</Link></li>
              <li><Link href="#services" className="hover:text-blue-400">{t('services')}</Link></li>
              <li><Link href="/estrategias-expansion" className="hover:text-blue-400">{t('expansionStrategies')}</Link></li>
              <li><Link href="/growth-intelligence" className="hover:text-blue-400">{t('growthIntelligence')}</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">{t('blog')}</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact')}</h4>
            <p className="text-gray-400">Email: adriana.vargas@growthbdm.com</p>
            <p className="text-gray-400">Teléfono: +52 (55) 2701 6354</p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/adrianavargasolvera/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('newsletter')}</h4>
            <p className="text-gray-400 mb-4">Suscríbete para recibir noticias y actualizaciones.</p>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Tu correo electrónico" className="bg-gray-800 text-white" />
              <Button type="submit">{t('subscribeButton')}</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              {t('copyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;