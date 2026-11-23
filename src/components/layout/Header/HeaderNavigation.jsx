import { useLanguage } from '../../../shared/i18n/useLanguage';

import { navigationLinks } from './headerData';

function HeaderNavigation() {
  const { t } = useLanguage();

  return (
    <nav aria-label={t.navigation.mainNavigation}>
      <ul className="flex items-center gap-7">
        {navigationLinks.map(({ translationKey, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-muted hover:text-foreground focus-visible:outline-foreground rounded-sm text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {t.navigation[translationKey]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
