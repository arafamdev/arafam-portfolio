import {
  SiCss,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';

import {
  CloudSun,
  Code2,
  Database,
  Download,
  FlaskConical,
  Grip,
  Languages,
  ListChecks,
  RefreshCw,
} from 'lucide-react';

const technologyIcons = {
  React: SiReact,
  JavaScript: SiJavascript,
  Vite: SiVite,
  'Tailwind CSS': SiTailwindcss,
  'Vanilla CSS': SiCss,
  'React Router': SiReactrouter,
  'TanStack Query': RefreshCw,
  'React Hook Form': ListChecks,
  localStorage: Database,
  IndexedDB: Database,
  Dexie: Database,
  'dnd-kit': Grip,
  PWA: Download,
  i18next: Languages,
  Vitest: FlaskConical,
  'TMDB API': Code2,
  'Open-Meteo': CloudSun,
};

function TechnologyBadge({ name }) {
  const Icon = technologyIcons[name];

  return (
    <span className="border-foreground/15 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium">
      {Icon && <Icon aria-hidden="true" size={16} className="shrink-0" />}

      <span>{name}</span>
    </span>
  );
}

export default TechnologyBadge;
