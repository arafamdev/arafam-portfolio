import { useLanguage } from '../../../../shared/i18n/useLanguage';
import SpokenLanguages from './SpokenLanguages';

function About() {
  const { t } = useLanguage();

  const aboutDetails = [
    {
      number: '01',
      title: t.about.details.frontend.title,
      description: t.about.details.frontend.description,
    },
    {
      number: '02',
      title: t.about.details.approach.title,
      description: t.about.details.approach.description,
    },
    {
      number: '03',
      title: t.about.details.workflow.title,
      description: t.about.details.workflow.description,
    },
    {
      number: '04',
      title: t.about.details.location.title,
      description: t.about.details.location.description,
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-foreground/10 border-t"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        {/* Section identification */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
            {t.about.eyebrow}
          </p>

          <p className="text-muted text-xs tracking-[0.15em] uppercase">
            {t.about.caption}
          </p>
        </div>

        {/* Editorial introduction */}
        <div className="mt-12 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <h2
              id="about-title"
              className="font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl xl:text-7xl"
            >
              {t.about.title.first}
              <span className="block italic">{t.about.title.second}</span>
            </h2>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-6">
            <p className="text-lg leading-relaxed font-medium sm:text-xl">
              {t.about.introduction}
            </p>

            <p className="text-muted text-sm leading-8 sm:text-base">
              {t.about.description}
            </p>
          </div>
        </div>

        {/* Professional details */}
        <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-24">
          {aboutDetails.map(({ number, title, description }) => (
            <div key={number} className="border-foreground/15 border-t pt-5">
              <p className="text-muted mb-5 text-xs tracking-widest">
                {number}
              </p>

              <h3 className="mb-3 text-base font-semibold">{title}</h3>

              <p className="text-muted max-w-md text-sm leading-7">
                {description}
              </p>
            </div>
          ))}
        </div>

        <SpokenLanguages />
      </div>
    </section>
  );
}

export default About;
