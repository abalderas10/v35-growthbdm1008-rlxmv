import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales, pathnames } from './app/config';

export { locales, pathnames };

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ 
  locales,
  pathnames,
  localePrefix: 'always'
});