import { Moon, Sun } from 'lucide-react';

import { useTheme } from './shared/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'
        }
        className="hover:bg-foreground/10 focus-visible:outline-foreground absolute top-6 right-6 rounded-full border border-current/20 p-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        {isDarkTheme ? (
          <Sun aria-hidden="true" size={20} />
        ) : (
          <Moon aria-hidden="true" size={20} />
        )}
      </button>

      <p className="mb-4 text-xs font-medium tracking-[0.3em] uppercase">
        Arafam.dev
      </p>

      <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
        Frontend Developer
      </h1>

      <p className="text-muted mt-5 max-w-md text-sm leading-relaxed sm:text-base">
        Personal portfolio — currently under development.
      </p>
    </main>
  );
}

export default App;
