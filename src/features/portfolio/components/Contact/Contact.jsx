import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { useLanguage } from '../../../../shared/i18n/useLanguage';

const contactEmail = 'arafam.dev@gmail.com';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/arafamdev',
    Icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arafam-mussa-silla-5a7866446/',
    Icon: FaLinkedinIn,
  },
];

function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-foreground/10 border-t"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-36 xl:px-16">
        {/* Section identification */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
            {t.contact.eyebrow}
          </p>

          <p className="text-muted text-xs tracking-[0.15em] uppercase">
            {t.contact.availability}
          </p>
        </div>

        {/* Editorial introduction */}
        <div className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-20">
          <h2
            id="contact-title"
            className="font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl xl:text-7xl"
          >
            {t.contact.title.first}
            <span className="block italic">{t.contact.title.second}</span>
          </h2>

          <p className="text-muted max-w-lg self-end text-base leading-8">
            {t.contact.description}
          </p>
        </div>

        {/* Primary contact */}
        <div className="border-foreground/15 mt-16 border-t pt-8 lg:mt-24">
          <p className="text-muted mb-5 text-xs font-semibold tracking-[0.15em] uppercase">
            {t.contact.emailLabel}
          </p>

          <a
            href={`mailto:${contactEmail}`}
            className="group inline-flex max-w-full items-center gap-3 rounded-sm text-xl font-medium break-all underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-3xl lg:text-4xl"
          >
            <Mail
              aria-hidden="true"
              size={24}
              className="hidden shrink-0 sm:block"
            />

            <span>{contactEmail}</span>

            <ArrowUpRight
              aria-hidden="true"
              size={22}
              className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Professional profiles */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <Icon aria-hidden="true" size={18} />
              {name}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
