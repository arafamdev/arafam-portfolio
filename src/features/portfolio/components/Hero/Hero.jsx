import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { useLanguage } from '../../../../shared/i18n/useLanguage';

import ResumeDownload from './ResumeDownload';

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 pt-28 pb-16 sm:px-10 lg:grid-cols-2 lg:gap-12 lg:px-12 xl:gap-16 xl:px-16"
    >
      {/* Introduction */}
      <div className="flex min-w-0 flex-col items-start">
        <p className="text-muted mb-6 text-xs font-semibold tracking-[0.2em] uppercase">
          {t.hero.role}
        </p>

        <h1
          id="hero-title"
          className="font-display text-6xl leading-[0.95] font-medium tracking-tight sm:text-7xl xl:text-8xl"
        >
          {t.hero.title.first}
          <span className="block italic">{t.hero.title.second}</span>
          {t.hero.title.third}
        </h1>

        <p className="text-muted mt-8 max-w-lg text-sm leading-7 sm:text-base">
          {t.hero.description}
        </p>

        {/* Primary actions */}
        <div className="mt-9 flex w-full flex-wrap items-center gap-3 xl:gap-4">
          <a
            href="#projects"
            className="bg-foreground text-background focus-visible:outline-foreground inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 xl:px-5"
          >
            {t.hero.exploreProjects}
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>

          <a
            href="#about"
            className="border-foreground/20 hover:bg-foreground/10 focus-visible:outline-foreground inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 xl:px-5"
          >
            {t.hero.aboutMe}
            <ArrowDownRight aria-hidden="true" size={18} />
          </a>

          <ResumeDownload />
        </div>
      </div>

      {/* Hero portrait */}
      <div className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="border-foreground/10 relative aspect-[4/5] overflow-hidden rounded-2xl border">
          <img
            src="/images/arafam-hero-portrait.jpeg"
            alt={t.hero.portraitAlt}
            width={723}
            height={1086}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[center_20%]"
          />
        </div>

        <p className="text-muted mt-4 text-right text-xs tracking-wide">
          {t.hero.location}
        </p>
      </div>
    </section>
  );
}

export default Hero;
