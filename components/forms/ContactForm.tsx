'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useApi } from '@/hooks/useApi';
import { api } from '@/lib/api';
import { ContactForm as ContactFormType } from '@/lib/api-types';
import { toast } from '@/hooks/use-toast';

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormType>(initialState);
  const { loading, execute } = useApi<ContactFormType>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    execute(
      () => api.contact.send(formData),
      () => {
        toast({
          title: '¡Mensaje enviado!',
          description: 'Nos pondremos en contacto contigo pronto.',
        });
        setFormData(initialState);
      },
      (error) => {
        toast({
          title: 'Error',
          description: error,
          variant: 'destructive',
        });
      }
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        name="company"
        placeholder="Empresa"
        value={formData.company}
        onChange={handleChange}
      />
      <Textarea
        name="message"
        placeholder="Mensaje"
        value={formData.message}
        onChange={handleChange}
        required
        rows={4}
      />
      <Button 
        type="submit" 
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </Button>
    </form>
  );
}