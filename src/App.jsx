import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

import About from './features/portfolio/components/About/About';
import Contact from './features/portfolio/components/Contact/Contact';
import Hero from './features/portfolio/components/Hero/Hero';
import Projects from './features/portfolio/components/Projects/Projects';

import { useTheme } from './shared/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Projects theme={theme} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
