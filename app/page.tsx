import { redirect } from 'next/navigation';
import { defaultLocale } from '@/navigation';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}