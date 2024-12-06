import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ExpansionStrategies = () => {
  const strategies = [
    'Análisis de mercado',
    'Desarrollo de alianzas estratégicas',
    'Optimización de procesos de negocio',
    'Implementación de tecnologías innovadoras',
  ];

  return (
    <section className="py-16 bg-growth-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-growth-text">Estrategias de Expansión en México</h2>
            <p className="text-growth-text mb-6">
              Nuestros servicios están diseñados para impulsar el crecimiento de su negocio en el mercado mexicano, aprovechando oportunidades únicas y superando desafíos específicos.
            </p>
            <ul className="mb-6">
              {strategies.map((strategy, index) => (
                <li key={index} className="flex items-center mb-2">
                  <CheckCircle className="text-growth-blue mr-2" />
                  <span className="text-growth-text">{strategy}</span>
                </li>
              ))}
            </ul>
            <Link href="/estrategias-expansion">
              <Button className="bg-growth-blue text-white hover:bg-growth-dark-blue">
                Explora Oportunidades
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-1MVZCtWtOXdu8UlHcVE9WYTk2C9Vci.jpeg"
              alt="Estrategias de Expansión"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpansionStrategies;