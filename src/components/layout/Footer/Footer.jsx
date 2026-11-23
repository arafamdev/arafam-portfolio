import { useLanguage } from '../../../shared/i18n/useLanguage';

function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-foreground/10 border-t">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12 xl:px-16">
        <a
          href="#home"
          className="w-fit rounded-sm text-sm font-bold tracking-[0.18em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Arafam.dev
        </a>

        <p className="text-muted text-xs">
          © {currentYear} Arafam.dev. {t.footer.rights}
        </p>

        <a
          href="#home"
          className="w-fit rounded-sm text-xs font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {t.footer.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
