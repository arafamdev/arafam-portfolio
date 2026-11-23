import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { X } from 'lucide-react';

import { useLanguage } from '../../../shared/i18n/useLanguage';

import HeaderSocialLinks from './HeaderSocialLinks';

import { navigationLinks } from './headerData';

function NavigationDrawer({ isOpen, onClose, menuButtonRef }) {
  const { t } = useLanguage();

  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const appRootElement = document.getElementById('root');
    const wasAppRootInert = appRootElement?.inert ?? false;

    const menuButtonElement = menuButtonRef.current;
    const previouslyFocusedElement = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;

    // Disable background interaction while the drawer is open.
    if (appRootElement) {
      appRootElement.inert = true;
    }

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusableElements = Array.from(
        drawerRef.current?.querySelectorAll(
          'a[href], button:not([disabled])',
        ) ?? [],
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      const isFocusOutsideDrawer = !drawerRef.current?.contains(
        document.activeElement,
      );

      // Keep keyboard focus inside the drawer.
      if (isFocusOutsideDrawer) {
        event.preventDefault();

        if (event.shiftKey) {
          lastFocusableElement.focus();
        } else {
          firstFocusableElement.focus();
        }

        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastFocusableElement
      ) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);

      // Restore background interaction before restoring focus.
      if (appRootElement) {
        appRootElement.inert = wasAppRootInert;
      }

      if (menuButtonElement?.isConnected) {
        menuButtonElement.focus();
      } else if (previouslyFocusedElement?.isConnected) {
        previouslyFocusedElement.focus();
      }
    };
  }, [isOpen, onClose, menuButtonRef]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Background overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/65 backdrop-blur-sm"
      />

      {/* Close the drawer when clicking outside */}
      <button
        type="button"
        aria-label={t.navigation.closeMenu}
        onClick={onClose}
        tabIndex={-1}
        className="fixed inset-0 cursor-default"
      />

      {/* Navigation panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.navigation.mainNavigation}
        className="bg-background border-foreground/10 fixed inset-y-0 right-0 flex h-dvh w-[min(85vw,380px)] flex-col border-l px-7 py-8 shadow-2xl"
      >
        {/* Panel header */}
        <div className="flex items-center justify-between">
          <span className="text-muted text-[10px] font-semibold tracking-[0.2em] uppercase">
            {t.navigation.mainNavigation}
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t.navigation.closeMenu}
            className="focus-visible:outline-foreground rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <X aria-hidden="true" size={22} />
          </button>
        </div>

        {/* Navigation links */}
        <nav
          aria-label={t.navigation.mobileNavigation}
          className="flex min-h-0 flex-1 flex-col justify-center overflow-y-auto py-8"
        >
          <ul className="space-y-5">
            {navigationLinks.map(({ translationKey, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={onClose}
                  className="hover:text-muted focus-visible:outline-foreground block rounded-sm text-2xl font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {t.navigation[translationKey]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Professional contact links */}
        <div className="border-foreground/10 shrink-0 border-t pt-5">
          <p className="text-muted mb-4 text-[10px] font-semibold tracking-[0.2em] uppercase">
            {t.navigation.connect}
          </p>

          <HeaderSocialLinks
            onLinkClick={onClose}
            className="flex items-center gap-3"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default NavigationDrawer;
