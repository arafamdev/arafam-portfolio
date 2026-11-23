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
      desktop: `${imageDirectory}/djumbai-desktop.png`,
      tablet: `${imageDirectory}/djumbai-tablet.png`,
      mobile: `${imageDirectory}/djumbai-mobile.png`,
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
        dark: `${imageDirectory}/donext-dark.png`,
        light: `${imageDirectory}/donext-light.png`,
      },
      tablet: `${imageDirectory}/donext-tablet.png`,
      mobile: `${imageDirectory}/donext-mobile.png`,
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
        dark: `${imageDirectory}/atmos-dark.png`,
        light: `${imageDirectory}/atmos-light.png`,
      },
      tablet: `${imageDirectory}/atmos-tablet.png`,
      mobile: `${imageDirectory}/atmos-mobile.png`,
    },
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort(
    (firstProject, secondProject) => firstProject.order - secondProject.order,
  )
  .slice(0, 3);
