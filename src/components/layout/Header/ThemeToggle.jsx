import { Moon, Sun } from 'lucide-react';

import { useLanguage } from '../../../shared/i18n/useLanguage';

function ThemeToggle({ theme, onToggleTheme }) {
  const { t } = useLanguage();

  const isDarkTheme = theme === 'dark';

  const themeButtonLabel = isDarkTheme
    ? t.theme.switchToLight
    : t.theme.switchToDark;

  const themeButtonText = isDarkTheme ? t.theme.lightMode : t.theme.darkMode;

  return (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={themeButtonLabel}
      className="border-foreground/20 hover:bg-foreground/10 focus-visible:outline-foreground flex h-10 items-center justify-center gap-2 rounded-xl border px-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 sm:px-4"
    >
      {isDarkTheme ? (
        <Sun aria-hidden="true" size={19} />
      ) : (
        <Moon aria-hidden="true" size={19} />
      )}

      <span className="hidden text-xs font-semibold tracking-wide uppercase xl:inline">
        {themeButtonText}
      </span>
    </button>
  );
}

export default ThemeToggle;
