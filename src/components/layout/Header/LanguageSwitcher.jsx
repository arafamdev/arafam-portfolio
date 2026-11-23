import { useLanguage } from '../../../shared/i18n/useLanguage';

const availableLanguages = [
  {
    code: 'en',
    label: 'English',
    flag: '🇬🇧',
  },
  {
    code: 'pt',
    label: 'Português',
    flag: '🇵🇹',
  },
];

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.select}
      className="border-foreground/20 flex h-10 items-center gap-1 rounded-xl border p-1"
    >
      {availableLanguages.map(({ code, label, flag }) => {
        const isActive = language === code;

        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => setLanguage(code)}
            aria-label={label}
            aria-pressed={isActive}
            title={label}
            className={`focus-visible:outline-foreground flex h-8 min-w-8 items-center justify-center rounded-lg px-1.5 text-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
              isActive ? 'bg-foreground/15' : 'hover:bg-foreground/10'
            }`}
          >
            <span aria-hidden="true">{flag}</span>
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
