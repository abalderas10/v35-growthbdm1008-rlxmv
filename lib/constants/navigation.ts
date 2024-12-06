import { Pathnames } from 'next-intl/navigation';
import { SUPPORTED_LOCALES } from './locales';

export const PATHNAMES = {
  '/': '/',
  '/blog': '/blog',
  '/growth-intelligence': '/growth-intelligence',
  '/estrategias-expansion': '/estrategias-expansion',
} satisfies Pathnames<typeof SUPPORTED_LOCALES>;

export type AppPathnames = keyof typeof PATHNAMES;