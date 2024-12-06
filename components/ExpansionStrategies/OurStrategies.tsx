import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, ClipboardCheck, Lightbulb } from 'lucide-react';

const strategies = [
  { icon: Building2, title: 'Optimización de Proyectos Inmobiliarios', description: 'Adaptamos tus proyectos a las demandas del mercado local.' },
  { icon: Users, title: 'Selección Estratégica de Proveedores', description: 'Colaboramos con proveedores de confianza para asegurar calidad y eficiencia.' },
  { icon: ClipboardCheck, title: 'Gestión de Proyectos', description: 'Supervisamos cada fase del proyecto, desde la planificación hasta la ejecución.' },
  { icon: Lightbulb, title: 'Servicios de Diseño y Construcción', description: 'Ofrecemos soluciones innovadoras y sostenibles.' },
];

const OurStrategies: React.FC = () => {
  return (
    <section id="strategies" className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Estrategias Personalizadas para Impulsar tu Crecimiento</h2>
        <p className="text-xl mb-12 text-center">
          En Growth Business Development, diseñamos soluciones estratégicas que te ayudan a superar los retos del mercado mexicano y maximizar las oportunidades de crecimiento en el sector inmobiliario.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {strategies.map((strategy, index) => (
            <Card key={index} className="bg-blue-900">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <strategy.icon className="w-12 h-12 mb-4 text-blue-300" />
                <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                <p>{strategy.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Descubre cómo te ayudamos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurStrategies;