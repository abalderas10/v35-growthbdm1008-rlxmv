import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm: React.FC = () => {
  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">¿Listo para Expandir tu Negocio?</h2>
        <p className="text-xl mb-12 text-center">
          Completa el formulario y uno de nuestros expertos se pondrá en contacto para guiarte en tu expansión.
        </p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Nombre" className="w-full" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Correo electrónico" className="w-full" />
          </div>
          <div className="mb-4">
            <Input type="text" placeholder="Empresa" className="w-full" />
          </div>
          <div className="mb-6">
            <Textarea placeholder="Mensaje" className="w-full" rows={4} />
          </div>
          <div className="text-center">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Envía tu Solicitud
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;