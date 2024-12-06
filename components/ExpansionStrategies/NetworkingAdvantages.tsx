import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, DollarSign, ShieldCheck, Zap, TrendingDown } from 'lucide-react';

const advantages = [
  { icon: Users, title: 'Acceso a Proveedores de Calidad' },
  { icon: DollarSign, title: 'Optimización de Costos y Tiempos' },
  { icon: ShieldCheck, title: 'Cumplimiento Normativo Garantizado' },
  { icon: Zap, title: 'Innovación y Tecnología al Alcance' },
  { icon: TrendingDown, title: 'Reducción de Riesgos' },
];

const NetworkingAdvantages: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Accede a una Red de Oportunidades</h2>
        <p className="text-xl mb-12 text-center">
          El networking con Growth BD te conecta con una red de proveedores confiables, tecnologías avanzadas y expertos del sector inmobiliario, facilitando el éxito de tus proyectos en México.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-blue-800">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <advantage.icon className="w-12 h-12 mb-4 text-blue-300" />
                <h3 className="text-lg font-semibold">{advantage.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkingAdvantages;