import { Pathnames } from 'next-intl/navigation';

export const locales = ['es', 'en', 'zh'] as const;
export const defaultLocale = 'es' as const;

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/growth-intelligence': '/growth-intelligence',
  '/estrategias-expansion': '/estrategias-expansion',
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;