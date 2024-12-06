'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <div className="max-w-md mx-auto text-center">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Suscríbete a Nuestro Boletín</h3>
      <p className="mb-4 text-gray-700">Mantente al día con las últimas tendencias y soluciones de automatización.</p>
      <div className="flex gap-4">
        <Input type="email" placeholder="Tu correo electrónico" className="flex-grow" />
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Suscríbete
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;