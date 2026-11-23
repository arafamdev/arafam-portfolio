import { useEffect, useRef, useState } from 'react';

import { Download } from 'lucide-react';

const resumeOptions = [
  {
    label: 'Português (PT)',
    flag: '🇵🇹',
    href: '/documents/arafam-silla-cv-pt.pdf',
    filename: 'Arafam_Mussa_Silla_CV_PT.pdf',
  },
  {
    label: 'English (EN)',
    flag: '🇬🇧',
    href: '/documents/arafam-silla-cv-en.pdf',
    filename: 'Arafam_Mussa_Silla_CV_EN.pdf',
  },
];

function ResumeDownload() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event) {
      if (!menuRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="resume-download-options"
        className="border-foreground/20 hover:bg-foreground/10 focus-visible:outline-foreground inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border px-4 text-sm font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 xl:px-5"
      >
        <Download aria-hidden="true" size={18} />
        Download CV
      </button>

      {isOpen && (
        <div
          id="resume-download-options"
          className="bg-background border-foreground/20 absolute top-full left-0 z-20 mt-3 min-w-52 rounded-xl border p-2 shadow-xl lg:top-auto lg:bottom-full lg:mt-0 lg:mb-3"
        >
          <p className="text-muted px-3 py-2 text-xs font-medium">
            Choose a language
          </p>

          <ul>
            {resumeOptions.map(({ label, flag, href, filename }) => (
              <li key={href}>
                <a
                  href={href}
                  download={filename}
                  onClick={closeMenu}
                  className="hover:bg-foreground/10 focus-visible:outline-foreground flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <span aria-hidden="true" className="text-xl leading-none">
                    {flag}
                  </span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResumeDownload;
