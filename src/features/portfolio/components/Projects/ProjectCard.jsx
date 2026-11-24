import { useRef, useState } from 'react';

import {
  ArrowUpRight,
  BookOpen,
  Monitor,
  Moon,
  Smartphone,
  Sun,
  Tablet,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import { useLanguage } from '../../../../shared/i18n/useLanguage';

import ProjectCaseStudy from './ProjectCaseStudy';
import TechnologyBadge from './TechnologyBadge';

const devices = [
  { id: 'desktop', Icon: Monitor },
  { id: 'tablet', Icon: Tablet },
  { id: 'mobile', Icon: Smartphone },
];

const themes = [
  { id: 'dark', Icon: Moon },
  { id: 'light', Icon: Sun },
];

function ProjectCard({ project, portfolioTheme }) {
  const { t } = useLanguage();

  const [selectedDevice, setSelectedDevice] = useState('desktop');
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  const caseStudyButtonRef = useRef(null);

  const projectText = t.projects.items[project.id];
  const desktopImages = project.images.desktop;

  const hasMultipleThemes = Boolean(
    desktopImages?.dark && desktopImages?.light,
  );

  const canSelectTheme = selectedDevice === 'desktop' && hasMultipleThemes;

  // Use the opposite portfolio theme until manually selected.
  const defaultPreviewTheme = portfolioTheme === 'dark' ? 'light' : 'dark';

  const activeTheme = selectedTheme ?? defaultPreviewTheme;

  const selectedImage = canSelectTheme
    ? desktopImages[activeTheme]
    : project.images[selectedDevice];

  const imageDescription = [
    project.name,
    t.projects.devices[selectedDevice],
    canSelectTheme ? t.projects.themes[activeTheme] : null,
  ]
    .filter(Boolean)
    .join(' — ');

  const caseStudyLabel = `${t.projects.viewCaseStudy} — ${project.name}`;
  const liveDemoLabel = `${t.projects.liveDemo} — ${project.name} (${t.accessibility.opensInNewTab})`;
  const githubLabel = `GitHub — ${project.name} (${t.accessibility.opensInNewTab})`;

  function openCaseStudy() {
    setIsCaseStudyOpen(true);
  }

  function closeCaseStudy() {
    setIsCaseStudyOpen(false);
    caseStudyButtonRef.current?.focus({ preventScroll: true });
  }

  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      className="border-foreground/15 border-t pt-6 lg:pt-8"
    >
      {/* Project identification */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-muted text-xs tracking-[0.2em] uppercase">
          {project.number} / {projectText.category}
        </p>

        <p className="text-muted text-xs tracking-[0.15em] uppercase">
          {t.projects.responsive}
        </p>
      </div>

      {/* Device and theme selectors */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div
          role="group"
          aria-label={`${t.projects.deviceLabel} — ${project.name}`}
          className="flex flex-wrap gap-2"
        >
          {devices.map(({ id, Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setSelectedDevice(id)}
              aria-pressed={selectedDevice === id}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
                selectedDevice === id
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/20 hover:border-foreground/60'
              }`}
            >
              <Icon aria-hidden="true" size={15} />
              {t.projects.devices[id]}
            </button>
          ))}
        </div>

        {canSelectTheme && (
          <div
            role="group"
            aria-label={`${t.projects.previewThemeLabel} — ${project.name}`}
            className="flex flex-wrap gap-2"
          >
            {themes.map(({ id, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedTheme(id)}
                aria-pressed={activeTheme === id}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
                  activeTheme === id
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-foreground/20 hover:border-foreground/60'
                }`}
              >
                <Icon aria-hidden="true" size={15} />
                {t.projects.themes[id]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Responsive screenshot preview */}
      <div className="flex justify-center">
        <img
          key={selectedImage.src}
          src={selectedImage.src}
          width={selectedImage.width}
          height={selectedImage.height}
          alt={imageDescription}
          loading="lazy"
          decoding="async"
          className="border-foreground/10 h-auto max-h-[440px] w-auto max-w-full rounded-lg border object-contain"
        />
      </div>

      {/* Project information */}
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div className="min-w-0">
          <h3
            id={`project-title-${project.id}`}
            className="font-display text-3xl font-medium tracking-tight sm:text-4xl"
          >
            {project.name}
          </h3>

          <p className="text-muted mt-2 max-w-xl text-sm leading-6">
            {projectText.description}
          </p>
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-5">
          {/* Technology badges */}
          <ul
            aria-label={`${t.projects.technologiesLabel} — ${project.name}`}
            className="flex flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <li key={technology}>
                <TechnologyBadge name={technology} />
              </li>
            ))}
          </ul>

          {/* Project actions */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              ref={caseStudyButtonRef}
              type="button"
              onClick={openCaseStudy}
              aria-haspopup="dialog"
              aria-label={caseStudyLabel}
              className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <BookOpen aria-hidden="true" size={17} />
              {t.projects.viewCaseStudy}
            </button>

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
      </div>

      {/* Accessible case study dialog */}
      <ProjectCaseStudy
        project={project}
        isOpen={isCaseStudyOpen}
        onClose={closeCaseStudy}
      />
    </article>
  );
}

export default ProjectCard;
