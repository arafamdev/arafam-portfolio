import { useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'arafam-theme';
const DEFAULT_THEME = 'dark';

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    return savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Keep the theme usable when storage is unavailable.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  return {
    theme,
    toggleTheme,
  };
}
