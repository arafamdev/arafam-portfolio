import { useLanguage } from '../../../../shared/i18n/useLanguage';

import ProjectCard from './ProjectCard';
import { featuredProjects } from './projectsData';

function Projects({ theme }) {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-foreground/10 border-t"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        {/* Section identification */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-muted text-xs font-semibold tracking-[0.2em] uppercase">
            {t.projects.eyebrow}
          </p>

          <p className="text-muted text-xs tracking-[0.15em] uppercase">
            {t.projects.caption}
          </p>
        </div>

        {/* Editorial introduction */}
        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <h2
            id="projects-title"
            className="font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-6xl xl:text-7xl"
          >
            {t.projects.title.first}
            <span className="block italic">{t.projects.title.second}</span>
          </h2>

          <p className="text-muted max-w-lg self-end text-base leading-8">
            {t.projects.introduction}
          </p>
        </div>

        {/* Featured projects */}
        <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-16 lg:mt-20 lg:space-y-20">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              portfolioTheme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
