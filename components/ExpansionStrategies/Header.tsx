'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Header: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="relative h-screen flex items-center justify-center bg-blue-950 text-white">
      {!imageError && (
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Background"
          layout="fill"
          objectFit="cover"
          onError={() => setImageError(true)}
        />
      )}
      <div className="absolute inset-0 bg-blue-950 bg-opacity-70"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Expande tu Negocio Inmobiliario en México</h1>
        <p className="text-xl mb-8">Con Growth Business Development, haz crecer tu empresa en uno de los mercados más dinámicos y prometedores del sector inmobiliario.</p>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => document.getElementById('strategies')?.scrollIntoView({behavior: 'smooth'})}
        >
          Descubre nuestras estrategias
        </Button>
      </div>
    </header>
  );
};

export default Header;