import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Estrategias de Expansión en el Mercado Mexicano',
      description: 'Guía completa sobre estrategias efectivas para expandir tu negocio en el mercado mexicano, incluyendo aspectos legales, culturales y comerciales.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      slug: 'estrategias-expansion-mercado-mexicano'
    },
    {
      title: 'Innovaciones en Construcción Modular',
      description: 'Análisis profundo de las últimas innovaciones en construcción modular y su impacto en la eficiencia, sostenibilidad y futuro de la industria.',
      image: 'https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      slug: 'innovaciones-construccion-modular'
    },
    {
      title: 'El Impacto de la IA en la Ingeniería Civil',
      description: 'Exploración detallada de cómo la Inteligencia Artificial está revolucionando la ingeniería civil, desde el diseño hasta la gestión de proyectos.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      slug: 'ia-en-ingenieria-civil'
    },
    {
      title: 'Tendencias en Arquitectura Sustentable',
      description: 'Descubre las últimas innovaciones en arquitectura sostenible y cómo están transformando el paisaje urbano mexicano.',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      slug: 'tendencias-arquitectura-sustentable'
    },
    {
      title: 'Diseño de Oficinas Post-COVID',
      description: 'Análisis de las nuevas tendencias en diseño de espacios de trabajo adaptados a la era post-pandemia.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      slug: 'diseno-oficinas-post-covid'
    },
    {
      title: 'Scrum en Proyectos de Construcción',
      description: 'Implementación efectiva de metodologías ágiles en la gestión de proyectos de construcción.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      slug: 'scrum-construccion'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Mercado en Crecimiento en México</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {blogPosts.map((post, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-blue-900">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full hover:bg-blue-900 hover:text-white transition-colors">
                        Leer más
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BlogSection;