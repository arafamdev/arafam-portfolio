import { useEffect, useRef } from 'react';

import { ArrowUpRight, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import { useLanguage } from '../../../../shared/i18n/useLanguage';

import TechnologyBadge from './TechnologyBadge';

const caseStudySections = ['challenge', 'solution', 'architecture', 'features'];

function ProjectCaseStudy({ project, isOpen, onClose }) {
  const { t } = useLanguage();

  const dialogRef = useRef(null);
  const dialogTitleRef = useRef(null);

  const projectText = t.projects.items[project.id];
  const caseStudy = projectText.caseStudy;

  const dialogTitleId = `case-study-${project.id}`;

  const liveDemoLabel = `${t.projects.liveDemo} — ${project.name} (${t.accessibility.opensInNewTab})`;
  const githubLabel = `GitHub — ${project.name} (${t.accessibility.opensInNewTab})`;
  const closeCaseStudyLabel = `${t.projects.closeCaseStudy} — ${project.name}`;

  // Control the dialog and lock background scrolling.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (!isOpen) {
      if (dialog.open) {
        dialog.close();
      }

      return;
    }

    // Preserve the previous scroll settings.
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    if (!dialog.open) {
      dialog.showModal();
    }

    // Start each case study at its heading.
    dialog.scrollTop = 0;
    dialogTitleRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);

  function handleClose() {
    onClose();
  }

  function handleCloseButton() {
    dialogRef.current?.close();
  }

  // Close only when clicking outside the visible dialog.
  function handleBackdropClick(event) {
    const dialog = dialogRef.current;

    if (!dialog || event.target !== dialog) {
      return;
    }

    const { clientX, clientY } = event;
    const { top, right, bottom, left } = dialog.getBoundingClientRect();

    const clickedOutsideDialog =
      clientX < left || clientX > right || clientY < top || clientY > bottom;

    if (clickedOutsideDialog) {
      dialog.close();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={handleClose}
      aria-labelledby={dialogTitleId}
      className="text-foreground bg-background border-foreground/15 fixed inset-0 m-auto hidden max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border p-0 shadow-2xl backdrop:bg-black/70 open:block"
    >
      <div className="p-6 sm:p-10">
        {/* Dialog heading */}
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              {t.projects.caseStudyLabel} / {project.number}
            </p>

            <h2
              ref={dialogTitleRef}
              id={dialogTitleId}
              tabIndex={-1}
              className="font-display mt-4 text-4xl font-medium focus:outline-2 focus:outline-offset-4 sm:text-5xl"
            >
              {project.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleCloseButton}
            aria-label={closeCaseStudyLabel}
            className="border-foreground/20 hover:bg-foreground/10 shrink-0 rounded-full border p-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <X aria-hidden="true" size={20} />
          </button>
        </div>

        {/* Project description */}
        <p className="text-muted mt-6 text-sm leading-7 sm:text-base">
          {projectText.description}
        </p>

        {/* Technology stack */}
        <div className="border-foreground/15 mt-8 border-t pt-6">
          <h3 className="mb-4 text-sm font-semibold">
            {t.projects.technologiesLabel}
          </h3>

          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology}>
                <TechnologyBadge name={technology} />
              </li>
            ))}
          </ul>
        </div>

        {/* Case study sections */}
        <div className="mt-8 space-y-8">
          {caseStudySections.map((sectionKey) => (
            <section
              key={sectionKey}
              className="border-foreground/15 border-t pt-6"
            >
              <h3 className="mb-3 text-base font-semibold">
                {t.projects.caseStudySections[sectionKey]}
              </h3>

              <p className="text-muted text-sm leading-7">
                {caseStudy[sectionKey]}
              </p>
            </section>
          ))}
        </div>

        {/* Project links */}
        <div className="border-foreground/15 mt-10 flex flex-wrap gap-6 border-t pt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={liveDemoLabel}
            className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {t.projects.liveDemo}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={githubLabel}
            className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <FaGithub aria-hidden="true" size={17} />
            GitHub
          </a>
        </div>
      </div>
    </dialog>
  );
}

export default ProjectCaseStudy;
