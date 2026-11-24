import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';

import { useLanguage } from '../../../shared/i18n/useLanguage';

const socialLinks = [
  {
    translationKey: 'github',
    href: 'https://github.com/arafamdev',
    icon: FaGithub,
    opensNewTab: true,
  },
  {
    translationKey: 'linkedin',
    href: 'https://www.linkedin.com/in/arafam-mussa-silla-5a7866446/',
    icon: FaLinkedinIn,
    opensNewTab: true,
  },
  {
    translationKey: 'email',
    href: 'mailto:arafam.dev@gmail.com',
    icon: Mail,
    opensNewTab: false,
  },
];

const socialLinkClassName =
  'border-foreground/20 hover:bg-foreground/10 focus-visible:outline-foreground flex h-10 w-10 items-center justify-center rounded-xl border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4';

function HeaderSocialLinks({ onLinkClick, className = '' }) {
  const { t } = useLanguage();

  return (
    <div className={className}>
      {socialLinks.map(
        ({ translationKey, href, icon: SocialIcon, opensNewTab }) => {
          const label = t.accessibility.socialLinks[translationKey];

          return (
            <a
              key={translationKey}
              href={href}
              target={opensNewTab ? '_blank' : undefined}
              rel={opensNewTab ? 'noopener noreferrer' : undefined}
              aria-label={label}
              title={label}
              onClick={onLinkClick}
              className={socialLinkClassName}
            >
              <SocialIcon aria-hidden="true" size={19} />
            </a>
          );
        },
      )}
    </div>
  );
}

export default HeaderSocialLinks;
