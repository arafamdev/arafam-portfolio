import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import { useLanguage } from '../../../../shared/i18n/useLanguage';

import TechnologyBadge from './TechnologyBadge';

const caseStudySections = ['challenge', 'solution', 'architecture', 'features'];

function ProjectCaseStudy({ project, isOpen, onClose }) {
  const { t } = useLanguage();

  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const projectText = t.projects.items[project.id];
  const caseStudy = projectText.caseStudy;

  // Control the dialog and lock background scrolling.
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (!isOpen) {
      if (dialog.open) {
        dialog.close();
      }

      return;
    }

    // Preserve the previous scroll settings.
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    // Prevent scrolling behind the dialog.
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    if (!dialog.open) {
      dialog.showModal();
    }

    // Move keyboard focus inside the dialog.
    closeButtonRef.current?.focus();

    return () => {
      // Restore scrolling after the dialog closes.
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
      aria-labelledby={`case-study-${project.id}`}
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
              id={`case-study-${project.id}`}
              className="font-display mt-4 text-4xl font-medium sm:text-5xl"
            >
              {project.name}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleCloseButton}
            aria-label={t.projects.closeCaseStudy}
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
            className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {t.projects.liveDemo}
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
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
