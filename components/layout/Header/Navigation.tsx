import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export const Navigation = ({ className = '', onItemClick }: NavigationProps) => {
  const t = useTranslations('Header');
  
  const menuItems = [
    { href: '/estrategias-expansion', label: 'expansionStrategies' },
    { href: '/growth-intelligence', label: 'growthIntelligence' },
    { href: '/blog', label: 'blog' },
  ];

  return (
    <nav className={className}>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 transition-colors"
          onClick={onItemClick}
        >
          {t(item.label)}
        </Link>
      ))}
    </nav>
  );
};