import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 bg-white text-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Lo que Nuestros Clientes Dicen</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {!imageError ? (
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Proyecto terminado en México"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="bg-gray-200 rounded-lg shadow-lg w-full h-64 flex items-center justify-center">
                <p className="text-gray-500">Image not available</p>
              </div>
            )}
          </div>
          <div className="md:w-1-2 md:pl-12">
            <Card className="bg-blue-100">
              <CardContent className="p-6">
                <p className="text-lg mb-4">
                  &ldquo;Gracias a Growth BD, nuestra expansión en México fue fluida y exitosa. Nos guiaron en cada paso, desde la estrategia hasta la ejecución del proyecto.&rdquo;
                </p>
                <p className="font-semibold">&mdash; Empresa Líder en Desarrollo Inmobiliario</p>
              </CardContent>
            </Card>
            <div className="mt-8 text-center">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Contáctanos y Expande tu Negocio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;