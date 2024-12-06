import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AliEstGrowth = () => {
  return (
    <section className="py-16 bg-growth-light-blue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-growth-text">AliEst-Growth</h2>
            <p className="text-growth-text mb-6">
              AliEst-Growth es nuestro grupo de empresas especializadas en crear y fortalecer alianzas estratégicas. Aprovechamos sinergias únicas para impulsar el crecimiento mutuo y generar valor a largo plazo para nuestros socios.
            </p>
            <ul className="mb-6 list-disc list-inside text-growth-text">
              <li>Acceso a una red diversa de socios estratégicos</li>
              <li>Oportunidades de colaboración intersectorial</li>
              <li>Recursos compartidos y economías de escala</li>
              <li>Innovación colaborativa y desarrollo de nuevos mercados</li>
            </ul>
            <Button className="bg-growth-blue text-white hover:bg-growth-dark-blue">Construye Alianzas</Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-HjVcFoiyXDjvVjvTPQkvVnZKcz4t72.jpeg"
              alt="AliEst-Growth"
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

export default AliEstGrowth;