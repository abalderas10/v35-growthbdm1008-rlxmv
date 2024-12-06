import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, pathnames } from './app/config';

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};