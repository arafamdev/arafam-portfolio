const pt = {
  navigation: {
    about: 'Sobre mim',
    projects: 'Projetos',
    contact: 'Contacto',
    openMenu: 'Abrir navegação',
    closeMenu: 'Fechar navegação',
    mainNavigation: 'Navegação principal',
    mobileNavigation: 'Navegação móvel',
    connect: 'Contactos',
  },

  hero: {
    role: 'Frontend Developer · React',
    title: {
      first: 'A criar',
      second: 'experiências',
      third: 'digitais.',
    },
    description:
      'Sou o Arafam, um programador frontend dedicado a criar experiências web intuitivas, acessíveis e cuidadosamente desenvolvidas com React e tecnologias modernas.',
    exploreProjects: 'Explorar projetos',
    aboutMe: 'Sobre mim',
    downloadCv: 'Descarregar CV',
    chooseCvLanguage: 'Escolher o idioma do CV',
    location: 'Em Portugal · A trabalhar para todo o mundo',
    portraitAlt: 'Retrato a preto e branco de Arafam',
  },

  about: {
    eyebrow: '02 / Sobre mim',
    caption: 'Um pouco sobre mim',
    title: {
      first: 'Design com intenção.',
      second: 'Código com propósito.',
    },
    introduction:
      'Sou um programador frontend que gosta de transformar ideias em experiências digitais intuitivas, acessíveis e cuidadosamente desenvolvidas.',
    description:
      'Com formação em Sistemas e Tecnologias de Informação, dedico-me à criação de interfaces responsivas com React e tecnologias web modernas. Valorizo o código organizado, a atenção ao detalhe e a aprendizagem contínua.',
    details: {
      frontend: {
        title: 'Desenvolvimento frontend',
        description: 'React · JavaScript · Tailwind CSS',
      },
      approach: {
        title: 'A minha abordagem',
        description: 'Acessibilidade · Design responsivo · Código limpo',
      },
      workflow: {
        title: 'Ferramentas e processo',
        description: 'Git · GitHub · Vite · APIs REST',
      },
      location: {
        title: 'Em Portugal',
        description: 'Disponível para oportunidades em frontend',
      },
    },
  },

  projects: {
    eyebrow: '03 / Projetos',
    caption: '2026 — Presente',
    title: {
      first: 'Projetos',
      second: 'em destaque.',
    },
    introduction:
      'Uma seleção de aplicações desenvolvidas com tecnologias frontend modernas, com foco na usabilidade, em interfaces responsivas e na resolução de problemas reais.',
    responsive: 'Design responsivo',
    deviceLabel: 'Dispositivo da pré-visualização',
    previewThemeLabel: 'Tema da captura de ecrã',
    technologiesLabel: 'Tecnologias utilizadas',
    devices: {
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobile: 'Mobile',
    },
    themes: {
      dark: 'Escuro',
      light: 'Claro',
    },
    liveDemo: 'Ver aplicação',
    viewCaseStudy: 'Ver estudo de caso',
    caseStudyLabel: 'Estudo de caso',
    closeCaseStudy: 'Fechar estudo de caso',
    caseStudySections: {
      challenge: 'O desafio',
      solution: 'A solução',
      architecture: 'Arquitetura e tecnologias',
      features: 'Funcionalidades principais',
    },
    items: {
      djumbai: {
        category: 'Descoberta de filmes e séries',
        description:
          'Uma plataforma cinematográfica para descobrir filmes e séries, explorar géneros, ver trailers e organizar favoritos e listas pessoais.',
        caseStudy: {
          challenge:
            'Criar uma experiência intuitiva para descobrir filmes e séries, permitindo também organizar conteúdos numa biblioteca pessoal.',
          solution:
            'Uma interface cinematográfica responsiva com sugestões de pesquisa, descoberta por género, trailers, favoritos e lista pessoal.',
          architecture:
            'React 19, Vite, Tailwind CSS, React Router e Context API. Os pedidos à TMDB passam por um proxy serverless da Vercel, mantendo o token da API fora do código enviado ao navegador.',
          features:
            'Descoberta de filmes e séries, pesquisa em tempo real, filtros por género, páginas de detalhe, trailers, favoritos, watchlist e persistência local.',
        },
      },
      donext: {
        category: 'Gestão de tarefas',
        description:
          'Um gestor de tarefas responsivo com pesquisa, filtros, acompanhamento do progresso, interações acessíveis e persistência local fiável.',
        caseStudy: {
          challenge:
            'Criar um gestor de tarefas prático, acessível e responsivo, com persistência fiável dos dados locais.',
          solution:
            'Uma interface focada na criação, edição, conclusão e filtragem de tarefas, com acompanhamento do progresso e preferências persistentes.',
          architecture:
            'React 19, Vite e Vanilla CSS. O estado React gere a interface, o localStorage guarda as tarefas e a Web Locks API ajuda a coordenar escritas entre separadores.',
          features:
            'Criação e edição de tarefas, pesquisa, filtros, ações em massa, estatísticas de progresso, temas claro e escuro, navegação por teclado e persistência local.',
        },
      },
      atmos: {
        category: 'Aplicação meteorológica',
        description:
          'Uma experiência meteorológica moderna com pesquisa de cidades, localização do dispositivo, condições atuais e previsões detalhadas com dados reais.',
        caseStudy: {
          challenge:
            'Apresentar informações meteorológicas de APIs externas numa interface clara, responsiva e acessível.',
          solution:
            'Um painel meteorológico com pesquisa de cidades, localização do dispositivo, condições atuais e previsões detalhadas.',
          architecture:
            'React 19, Vite, Tailwind CSS e TanStack Query. A Open-Meteo fornece dados meteorológicos e a BigDataCloud apoia funcionalidades relacionadas com localização.',
          features:
            'Pesquisa de cidades com sugestões, geolocalização, meteorologia atual, previsões horárias e para quatro dias, probabilidade de precipitação, nascer e pôr do sol e temas persistentes.',
        },
      },
    },
  },

  contact: {
    eyebrow: '04 / Contacto',
    availability: 'Disponível para oportunidades',
    title: {
      first: 'Vamos criar',
      second: 'algo com significado.',
    },
    description:
      'Estou disponível para oportunidades em frontend, colaborações e projetos interessantes. Tens alguma ideia em mente? Vamos conversar.',
    emailLabel: 'Envia-me uma mensagem',
  },

  footer: {
    rights: 'Todos os direitos reservados.',
    backToTop: 'Voltar ao início',
  },

  theme: {
    lightMode: 'Modo claro',
    darkMode: 'Modo escuro',
    switchToLight: 'Mudar para o modo claro',
    switchToDark: 'Mudar para o modo escuro',
  },

  language: {
    label: 'Idioma',
    select: 'Selecionar idioma',
  },
};

export default pt;
