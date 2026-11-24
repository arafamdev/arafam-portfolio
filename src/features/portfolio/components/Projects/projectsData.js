const imageDirectory = '/images/projects';

export const projects = [
  {
    id: 'djumbai',
    number: '01',
    order: 1,
    featured: true,
    name: 'Djumbai Cine',
    technologies: [
      'React',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'TMDB API',
    ],
    liveUrl: 'https://djumbai-cine.vercel.app/',
    githubUrl: 'https://github.com/arafamdev/djumbai-cine',
    images: {
      desktop: {
        src: `${imageDirectory}/djumbai-desktop.webp`,
        width: 2084,
        height: 1368,
      },
      tablet: {
        src: `${imageDirectory}/djumbai-tablet.webp`,
        width: 1668,
        height: 1642,
      },
      mobile: {
        src: `${imageDirectory}/djumbai-mobile.webp`,
        width: 1406,
        height: 1482,
      },
    },
  },
  {
    id: 'donext',
    number: '02',
    order: 2,
    featured: true,
    name: 'DoNext',
    technologies: [
      'React',
      'JavaScript',
      'Vite',
      'Vanilla CSS',
      'localStorage',
    ],
    liveUrl: 'https://do-next-app.vercel.app/',
    githubUrl: 'https://github.com/arafamdev/do-next',
    images: {
      desktop: {
        dark: {
          src: `${imageDirectory}/donext-dark.png`,
          width: 1030,
          height: 653,
        },
        light: {
          src: `${imageDirectory}/donext-light.png`,
          width: 1139,
          height: 699,
        },
      },
      tablet: {
        src: `${imageDirectory}/donext-tablet.png`,
        width: 920,
        height: 867,
      },
      mobile: {
        src: `${imageDirectory}/donext-mobile.png`,
        width: 483,
        height: 720,
      },
    },
  },
  {
    id: 'atmos',
    number: '03',
    order: 3,
    featured: true,
    name: 'Atmos',
    technologies: [
      'React',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Open-Meteo',
    ],
    liveUrl: 'https://atmos-by-arafam.vercel.app/',
    githubUrl: 'https://github.com/arafamdev/atmos-weather-app',
    images: {
      desktop: {
        dark: {
          src: `${imageDirectory}/atmos-dark.png`,
          width: 1035,
          height: 695,
        },
        light: {
          src: `${imageDirectory}/atmos-light.png`,
          width: 1044,
          height: 689,
        },
      },
      tablet: {
        src: `${imageDirectory}/atmos-tablet.png`,
        width: 775,
        height: 782,
      },
      mobile: {
        src: `${imageDirectory}/atmos-mobile.png`,
        width: 589,
        height: 746,
      },
    },
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort(
    (firstProject, secondProject) => firstProject.order - secondProject.order,
  )
  .slice(0, 3);
