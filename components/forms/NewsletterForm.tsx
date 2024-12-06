'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useApi } from '@/hooks/useApi';
import { api } from '@/lib/api';
import { NewsletterSubscription } from '@/lib/api-types';
import { toast } from '@/hooks/use-toast';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const { loading, execute } = useApi<NewsletterSubscription>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    execute(
      () => api.newsletter.subscribe({ email }),
      () => {
        toast({
          title: '¡Suscripción exitosa!',
          description: 'Gracias por suscribirte a nuestro newsletter.',
        });
        setEmail('');
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-white border-gray-300"
      />
      <Button 
        type="submit" 
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Suscribiendo...' : 'Suscribirse'}
      </Button>
    </form>
  );
}