const en = {
  navigation: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    mainNavigation: 'Main navigation',
    mobileNavigation: 'Mobile navigation',
    connect: 'Connect',
  },

  hero: {
    role: 'Frontend Developer · React',
    title: {
      first: 'Building',
      second: 'digital',
      third: 'experiences.',
    },
    description:
      "I'm Arafam, a frontend developer focused on creating intuitive, accessible and carefully crafted web experiences with React and modern technologies.",
    exploreProjects: 'Explore projects',
    aboutMe: 'About me',
    downloadCv: 'Download CV',
    chooseCvLanguage: 'Choose a language',
    location: 'Based in Portugal · Working worldwide',
    portraitAlt: 'Black and white portrait of Arafam',
  },

  about: {
    eyebrow: '02 / About',
    caption: 'A little about me',
    title: {
      first: 'Design-minded.',
      second: 'Development-driven.',
    },
    introduction:
      "I'm a frontend developer who enjoys turning ideas into intuitive, accessible and thoughtfully built digital experiences.",
    description:
      'With a background in Information Systems and Technologies, I focus on building responsive interfaces with React and modern web technologies. I value clean code, attention to detail and continuous learning.',
    details: {
      frontend: {
        title: 'Frontend development',
        description: 'React · JavaScript · Tailwind CSS',
      },
      approach: {
        title: 'My approach',
        description: 'Accessibility · Responsive design · Clean code',
      },
      workflow: {
        title: 'Tools & workflow',
        description: 'Git · GitHub · Vite · REST APIs',
      },
      location: {
        title: 'Based in Portugal',
        description: 'Open to frontend opportunities',
      },
    },
    languages: {
      eyebrow: 'Communication',
      title: 'Spoken languages.',
      description:
        'Connecting across cultures and collaborating in international environments.',
      names: {
        portuguese: 'Portuguese',
        creole: 'Guinea-Bissau Creole',
        english: 'English',
        russian: 'Russian',
        spanish: 'Spanish',
      },
      levels: {
        native: 'Native',
        fluent: 'Fluent',
        advanced: 'Advanced',
      },
    },
  },

  projects: {
    eyebrow: '03 / Selected Work',
    caption: '2026 — Present',
    title: {
      first: 'Selected',
      second: 'projects.',
    },
    introduction:
      'A selection of applications built with modern frontend technologies, focusing on usability, responsive interfaces and practical problem-solving.',
    responsive: 'Responsive design',
    deviceLabel: 'Preview device',
    previewThemeLabel: 'Screenshot theme',
    technologiesLabel: 'Technologies used',
    devices: {
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobile: 'Mobile',
    },
    themes: {
      dark: 'Dark',
      light: 'Light',
    },
    liveDemo: 'Live Demo',
    viewCaseStudy: 'View case study',
    caseStudyLabel: 'Case Study',
    closeCaseStudy: 'Close case study',
    caseStudySections: {
      challenge: 'The challenge',
      solution: 'The solution',
      architecture: 'Architecture & technologies',
      features: 'Key features',
    },
    items: {
      djumbai: {
        category: 'Movie & TV discovery',
        description:
          'A cinematic platform for discovering movies and TV shows, exploring genres, watching trailers and managing personal favorites and watchlists.',
        caseStudy: {
          challenge:
            'Build an intuitive experience for discovering movies and TV shows while providing a personal way to organize content.',
          solution:
            'A responsive cinematic interface with search suggestions, genre discovery, trailers, favorites and a personal watchlist.',
          architecture:
            'React 19, Vite, Tailwind CSS, React Router and Context API. TMDB requests use a Vercel serverless proxy to keep the API token outside the client bundle.',
          features:
            'Movie and TV discovery, live search, genre filtering, detailed pages, trailers, favorites, watchlist and local persistence.',
        },
      },
      donext: {
        category: 'Task management',
        description:
          'A responsive task manager with search, filters, progress tracking, accessible interactions and reliable local persistence.',
        caseStudy: {
          challenge:
            'Create a practical task manager that remains accessible, responsive and reliable when handling locally stored data.',
          solution:
            'A focused interface for creating, editing, completing and filtering tasks, with progress tracking and persistent preferences.',
          architecture:
            'React 19, Vite and Vanilla CSS. React state manages the interface, localStorage preserves tasks, and the Web Locks API helps coordinate writes across tabs.',
          features:
            'Task creation and editing, search, filters, bulk actions, progress statistics, light and dark themes, keyboard interactions and local persistence.',
        },
      },
      atmos: {
        category: 'Weather application',
        description:
          'A modern weather experience with city search, device location, current conditions and detailed forecasts powered by real weather data.',
        caseStudy: {
          challenge:
            'Present weather information from external APIs in a clear, responsive and accessible interface.',
          solution:
            'A weather dashboard with city search, device location, current conditions and forecasts in a clean visual experience.',
          architecture:
            'React 19, Vite, Tailwind CSS and TanStack Query. Open-Meteo provides weather data, while BigDataCloud supports location-related functionality.',
          features:
            'City autocomplete, device geolocation, current weather, hourly and four-day forecasts, precipitation probability, sunrise and sunset, and persistent themes.',
        },
      },
    },
  },

  contact: {
    eyebrow: '04 / Contact',
    availability: 'Open to opportunities',
    title: {
      first: "Let's build",
      second: 'something meaningful.',
    },
    description:
      "I'm open to frontend opportunities, collaborations and interesting projects. Have something in mind? Let's talk.",
    emailLabel: 'Get in touch',
  },

  footer: {
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },

  theme: {
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },

  language: {
    label: 'Language',
    select: 'Select language',
  },

  accessibility: {
    skipToContent: 'Skip to main content',
    socialLinks: {
      github: 'GitHub profile (opens in a new tab)',
      linkedin: 'LinkedIn profile (opens in a new tab)',
      email: 'Send an email',
    },
    opensInNewTab: 'opens in a new tab',
  },
};

export default en;
