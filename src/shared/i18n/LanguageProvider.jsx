import { useEffect, useState } from 'react';

import { LanguageContext } from './LanguageContext';
import en from './translations/en';
import pt from './translations/pt';

const LANGUAGE_STORAGE_KEY = 'arafam-language';
const DEFAULT_LANGUAGE = 'en';

const translations = {
  en,
  pt,
};

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    return Object.hasOwn(translations, savedLanguage)
      ? savedLanguage
      : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // The selected language still works without storage.
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
