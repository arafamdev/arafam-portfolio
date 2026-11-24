import { useLanguage } from '../../../../shared/i18n/useLanguage';

const spokenLanguages = [
  { id: 'portuguese', level: 'native' },
  { id: 'creole', level: 'native' },
  { id: 'english', level: 'fluent' },
  { id: 'russian', level: 'fluent' },
  { id: 'spanish', level: 'advanced' },
];

function SpokenLanguages() {
  const { t } = useLanguage();
  const { languages } = t.about;

  return (
    <section
      aria-labelledby="spoken-languages-title"
      className="border-foreground/15 mt-16 border-t pt-10 lg:mt-24 lg:pt-16"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
        {/* Section introduction */}
        <div className="min-w-0">
          <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
            {languages.eyebrow}
          </p>

          <h3
            id="spoken-languages-title"
            className="font-display mt-5 text-4xl font-medium tracking-tight sm:text-5xl"
          >
            {languages.title}
          </h3>

          <p className="text-muted mt-5 max-w-md text-sm leading-7 sm:text-base">
            {languages.description}
          </p>
        </div>

        {/* Languages and proficiency levels */}
        <ul className="min-w-0">
          {spokenLanguages.map(({ id, level }) => (
            <li
              key={id}
              className="border-foreground/15 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b py-5 first:pt-0"
            >
              <span className="text-sm font-semibold sm:text-base">
                {languages.names[id]}
              </span>

              <span className="text-muted text-sm">
                {languages.levels[level]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SpokenLanguages;
