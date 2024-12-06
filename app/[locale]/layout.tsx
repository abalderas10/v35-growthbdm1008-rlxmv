import '../globals.css';
import { notFound } from 'next/navigation';
import { Providers } from './providers';
import { locales } from '@/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AgenteBD from '@/components/AgenteBD';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <Providers locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <AgenteBD />
      </div>
    </Providers>
  );
}