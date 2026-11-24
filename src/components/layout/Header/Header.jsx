import { useCallback, useEffect, useRef, useState } from 'react';

import { Menu } from 'lucide-react';

import { useLanguage } from '../../../shared/i18n/useLanguage';

import HeaderNavigation from './HeaderNavigation';
import HeaderSocialLinks from './HeaderSocialLinks';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationDrawer from './NavigationDrawer';
import ThemeToggle from './ThemeToggle';

function Header({ theme, onToggleTheme }) {
  const { t } = useLanguage();

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const brandLinkRef = useRef(null);
  const navigationTargetRef = useRef(null);

  function openNavigation() {
    navigationTargetRef.current = null;
    setIsNavigationOpen(true);
  }

  const closeNavigation = useCallback(() => {
    setIsNavigationOpen(false);
  }, []);

  function handleNavigationSelect(href) {
    navigationTargetRef.current = href;
    closeNavigation();
  }

  // Close the drawer when the viewport changes to desktop.
  useEffect(() => {
    const desktopMediaQuery = window.matchMedia('(min-width: 1024px)');

    function handleBreakpointChange(event) {
      if (event.matches) {
        closeNavigation();
      }
    }

    desktopMediaQuery.addEventListener('change', handleBreakpointChange);

    return () => {
      desktopMediaQuery.removeEventListener('change', handleBreakpointChange);
    };
  }, [closeNavigation]);

  return (
    <>
      <header className="bg-background/95 border-foreground/10 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
        <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-6 sm:px-10 lg:px-16">
          {/* Brand */}
          <a
            ref={brandLinkRef}
            href="#home"
            className="focus-visible:outline-foreground shrink-0 rounded-sm text-sm font-bold tracking-[0.18em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Arafam.dev
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:block">
            <HeaderNavigation />
          </div>

          {/* Header actions */}
          <div className="flex items-center gap-2">
            <HeaderSocialLinks className="hidden items-center gap-2 lg:flex" />

            <LanguageSwitcher />

            <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />

            {/* Mobile and tablet navigation */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={openNavigation}
              aria-label={t.navigation.openMenu}
              aria-haspopup="dialog"
              aria-expanded={isNavigationOpen}
              className="border-foreground/20 hover:bg-foreground/10 focus-visible:outline-foreground flex h-10 w-10 items-center justify-center rounded-xl border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden"
            >
              <Menu aria-hidden="true" size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile and tablet navigation drawer */}
      <NavigationDrawer
        isOpen={isNavigationOpen}
        onClose={closeNavigation}
        onNavigationSelect={handleNavigationSelect}
        menuButtonRef={menuButtonRef}
        brandLinkRef={brandLinkRef}
        navigationTargetRef={navigationTargetRef}
      />
    </>
  );
}

export default Header;
