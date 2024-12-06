'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MexicanMarketIntro = () => {
  const [showContact, setShowContact] = useState(false);

  const challenges = [
    "Marco regulatorio complejo",
    "Diferencias culturales",
    "Competencia local",
    "Sistema tributario",
    "Barrera del idioma",
    "Logística",
    "Obtención de permisos",
    "Contratación",
    "Seguridad"
  ];

  const solutions = [
    "Entender el marco regulatorio",
    "Adaptarse a la cultura empresarial mexicana",
    "Desarrollar estrategias de mercado efectivas",
    "Navegar el sistema tributario",
    "Superar las barreras logísticas",
    "Obtener los permisos necesarios",
    "Contratar y gestionar personal",
    "Establecer operaciones seguras y exitosas"
  ];

  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">¿Listo para conquistar el mercado mexicano?</h2>
        <p className="text-xl mb-8 text-center text-blue-100">
          Entrar a un nuevo mercado siempre es un reto, y México no es la excepción. Las empresas extranjeras que buscan expandirse a México se enfrentan a un panorama único con sus propias complejidades.
        </p>

        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="challenges">Desafíos</TabsTrigger>
            <TabsTrigger value="solutions">Soluciones</TabsTrigger>
          </TabsList>
          <TabsContent value="challenges">
            <Card className="bg-blue-800 text-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-300">Algunos de los desafíos</CardTitle>
                <CardDescription className="text-blue-200">
                  Obstáculos comunes al entrar al mercado mexicano
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {challenges.map((challenge, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-blue-300">{challenge}</AccordionTrigger>
                      <AccordionContent className="text-blue-100">
                        Descripción detallada del desafío y cómo afecta a las empresas extranjeras.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="solutions">
            <Card className="bg-blue-800 text-blue-100">
              <CardHeader>
                <CardTitle className="text-blue-300">¡No se desanime!</CardTitle>
                <CardDescription className="text-blue-200">
                  En Growth Business Development entendemos estos desafíos y le ayudamos a:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {solutions.map((solution, index) => (
                    <li key={index} className="text-blue-100">{solution}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => setShowContact(!showContact)} 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {showContact ? 'Ocultar Contacto' : 'Contáctenos hoy mismo'}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {showContact && (
          <Card className="mt-8 bg-blue-800 text-blue-100">
            <CardHeader>
              <CardTitle className="text-blue-300">Contáctenos</CardTitle>
              <CardDescription className="text-blue-200">
                Descubra cómo podemos ayudarle a alcanzar el éxito en México
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100">
                Información de contacto y formulario aquí...
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default MexicanMarketIntro;