import Header from './components/layout/Header/Header';

import About from './features/portfolio/components/About/About';
import Hero from './features/portfolio/components/Hero/Hero';

import { useTheme } from './shared/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
