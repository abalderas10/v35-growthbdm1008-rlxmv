import ExpansionStrategiesPage from '@/components/ExpansionStrategiesPage';
import { locales } from '@/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function ExpansionStrategies() {
  return <ExpansionStrategiesPage />;
}