import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WhyMexico: React.FC = () => {
  return (
    <section className="py-20 bg-white text-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">México: Un Mercado en Crecimiento</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-6">
              México es un destino estratégico para empresas extranjeras, con un crecimiento sostenido en el sector de la construcción y grandes oportunidades para desarrolladores. Nuestra experiencia local te permite acceder a un mercado en expansión mientras superas cualquier reto regulatorio o logístico.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Conoce el Potencial del Mercado
            </Button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { stat: '+6%', desc: 'Crecimiento anual del sector inmobiliario' },
              { stat: '+8.5%', desc: 'Aumento en inversión extranjera directa' },
              { stat: '150+', desc: 'Proyectos de infraestructura en desarrollo' },
              { stat: '#1', desc: 'Destino de inversión en LATAM' },
            ].map((item, index) => (
              <Card key={index} className="bg-blue-100">
                <CardContent className="p-4">
                  <p className="text-3xl font-bold text-blue-600">{item.stat}</p>
                  <p className="text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMexico;