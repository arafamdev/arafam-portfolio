import Header from './components/layout/Header/Header';

import Hero from './features/portfolio/components/Hero/Hero';

import { useTheme } from './shared/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
