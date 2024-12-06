import GrowthIntelligencePage from '@/components/GrowthIntelligencePage';
import { locales } from '@/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function GrowthIntelligence() {
  return <GrowthIntelligencePage />;
}