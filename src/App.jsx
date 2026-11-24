import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';

import About from './features/portfolio/components/About/About';
import Contact from './features/portfolio/components/Contact/Contact';
import Hero from './features/portfolio/components/Hero/Hero';
import Projects from './features/portfolio/components/Projects/Projects';

import { useTheme } from './shared/hooks/useTheme';
import { useLanguage } from './shared/i18n/useLanguage';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <>
      {/* Allow keyboard users to bypass the header navigation. */}
      <a href="#main-content" className="skip-link">
        {t.accessibility.skipToContent}
      </a>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content" tabIndex={-1}>
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
