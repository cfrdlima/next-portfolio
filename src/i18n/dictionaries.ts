export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

// caminho da página inicial de cada idioma
export const localePath: Record<Locale, string> = { pt: "/", en: "/en" };

const pt = {
  meta: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    title: "Claudinei de Lima | Desenvolvedor de Software",
    description:
      "Portfólio de Claudinei de Lima, desenvolvedor de software com foco em aplicações web e mobile: Java, Flutter, Next.js e Firebase.",
    keywords: ["desenvolvedor de software", "portfólio"],
  },
  nav: {
    home: "Início",
    about: "Sobre",
    skills: "Skills",
    projects: "Projetos",
    contact: "Contato",
    homeLabel: "Claudinei de Lima, página inicial",
    openMenu: "Abrir menu",
  },
  common: {
    socialLabel: (name: string) => `${name} de Claudinei`,
    themeToLight: "Mudar para modo claro",
    themeToDark: "Mudar para modo escuro",
    switchLocale: "Switch to English",
    otherLocaleShort: "EN",
    resumeFile: "/curriculo.pdf",
    resumeDownloadName: "Curriculo-Claudinei-de-Lima.pdf",
  },
  hero: {
    badge: "Desenvolvedor de Software · Web & Mobile",
    greeting: "Olá, meu nome é Claudinei.",
    lead: "E eu sou",
    role: "desenvolvedor",
    rest: ". Crio aplicações web e mobile com Java, Flutter e Next.js.",
    ctaProjects: "Ver projetos",
    ctaContact: "Entrar em contato",
    ctaResume: "Currículo",
    scrollLabel: "Rolar para a seção Sobre",
  },
  about: {
    eyebrow: "01 · Sobre mim",
    title: "Além dos commits e branches: a jornada por trás do código.",
    p1: "Sou o Claudinei, desenvolvedor de software com foco em aplicações web e mobile. Iniciei minha trajetória em tecnologia em 2019, cursando Ciência da Computação na",
    p2: ", e desde então venho me especializando em criar soluções robustas e escaláveis. Atualmente atuo na",
    p3: ", trabalhando com Java, Flutter e Next.js.",
  },
  skills: {
    eyebrow: "02 · Skills",
    title: "Minha caixinha de ferramentas",
    subtitle:
      "As habilidades e ferramentas que domino e que me permitem criar soluções criativas e funcionais para meus clientes.",
    toolsLabel: "Ferramentas",
    areas: {
      web: {
        title: "Desenvolvimento Web",
        description: "Sites e aplicações web modernas, rápidas e responsivas.",
      },
      mobile: {
        title: "Desenvolvimento Mobile",
        description:
          "Apps multiplataforma para Android e iOS, com back-end em Java quando preciso.",
      },
      games: {
        title: "Desenvolvimento de Games",
        description:
          "Jogos em Unity, incluindo um jogo mobile para ensinar LIBRAS.",
      },
    },
  },
  projects: {
    eyebrow: "03 · Projetos",
    title: "O que eu venho construindo",
    subtitle:
      "Uma seleção de projetos web, mobile e de games, dos profissionais aos acadêmicos.",
    tagsLabel: "Tecnologias",
    viewSite: "Ver site",
    code: "Código",
    inDevelopment: "em desenvolvimento",
    gallery: {
      label: (name: string) => `Capturas de tela: ${name}`,
      roleDescription: "carrossel",
      slide: "imagem",
      alt: (name: string, n: number) => `Tela ${n} do projeto ${name}`,
      position: (n: number, total: number) => `Imagem ${n} de ${total}`,
      enlarge: "Ampliar",
      previous: "Imagem anterior",
      next: "Próxima imagem",
      close: "Fechar",
    },
    items: {
      "libras-go": {
        description:
          "Jogo mobile no estilo endless runner 3D que ensina LIBRAS durante a jogabilidade, com fases organizadas por tema de vocabulário.",
        siteLabel: "Painel do professor",
      },
      joinme: {
        description:
          "App para esportes amadores: conecta jogadores, organiza partidas e gerencia quadras. Android e iOS.",
      },
      "formatta-aq": {
        description:
          "Plataforma que formata documentos automaticamente segundo normas acadêmicas como ABNT e APA, pensada para quem não domina as regras.",
      },
      "steam-watcher": {
        description:
          "App que acompanha seus jogos da Steam e avisa sobre atualizações com notificações em tempo real.",
      },
      "roka-moka": {
        description:
          "Gamificação para museus de Pelotas: o visitante escaneia QR codes das obras, junta estrelas e desbloqueia emblemas.",
        note: "Projeto da faculdade",
      },
      "ja-vi-esse-filme": {
        description:
          "Agenda de filmes com favoritos, listas personalizadas e detalhes como sinopse, elenco e trailers, usando a API do TMDB.",
      },
      portfolio: {
        description:
          "Este site: portfólio pessoal com tema claro/escuro, dois idiomas, animações e SEO.",
      },
      "flappy-bird": {
        description:
          "Recriação do Flappy Bird feita para praticar Unity e desenvolvimento de games.",
      },
    } as Record<
      string,
      { name?: string; description: string; siteLabel?: string; note?: string }
    >,
  },
  contact: {
    eyebrow: "04 · Contato",
    title: "Vamos conversar?",
    subtitle:
      "Tem um projeto, uma vaga ou só quer trocar uma ideia? Me mande um e-mail ou me encontre nas redes.",
    copy: "Copiar",
    copied: "Copiado!",
    copyLabel: "Copiar e-mail",
    copiedAnnouncement: "E-mail copiado",
    downloadResume: "Baixar currículo",
    otherResumePrefix: "Currículo também disponível em",
    otherResumeLink: "inglês",
    otherResumeFile: "/resume-en.pdf",
    otherResumeDownloadName: "Resume-Claudinei-de-Lima.pdf",
    otherResumeLang: "en",
  },
  footer: {
    madeWith: "Feito com Next.js.",
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  meta: {
    htmlLang: "en",
    ogLocale: "en_US",
    title: "Claudinei de Lima | Software Developer",
    description:
      "Portfolio of Claudinei de Lima, a software developer focused on web and mobile applications: Java, Flutter, Next.js and Firebase.",
    keywords: ["software developer", "portfolio"],
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    homeLabel: "Claudinei de Lima, home page",
    openMenu: "Open menu",
  },
  common: {
    socialLabel: (name: string) => `Claudinei on ${name}`,
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    switchLocale: "Mudar para português",
    otherLocaleShort: "PT",
    resumeFile: "/resume-en.pdf",
    resumeDownloadName: "Resume-Claudinei-de-Lima.pdf",
  },
  hero: {
    badge: "Software Developer · Web & Mobile",
    greeting: "Hi, my name is Claudinei.",
    lead: "And I'm a",
    role: "developer",
    rest: ". I build web and mobile apps with Java, Flutter and Next.js.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    ctaResume: "Resume",
    scrollLabel: "Scroll to the About section",
  },
  about: {
    eyebrow: "01 · About me",
    title: "Beyond commits and branches: the journey behind the code.",
    p1: "I'm Claudinei, a software developer focused on web and mobile applications. I started my journey in tech in 2019, studying Computer Science at",
    p2: ", and since then I've been specializing in building robust, scalable solutions. I currently work at",
    p3: ", using Java, Flutter and Next.js.",
  },
  skills: {
    eyebrow: "02 · Skills",
    title: "My toolbox",
    subtitle:
      "The skills and tools I master, which let me build creative, functional solutions for my clients.",
    toolsLabel: "Tools",
    areas: {
      web: {
        title: "Web Development",
        description: "Modern, fast and responsive websites and web apps.",
      },
      mobile: {
        title: "Mobile Development",
        description:
          "Cross-platform apps for Android and iOS, with a Java back end when needed.",
      },
      games: {
        title: "Game Development",
        description:
          "Games in Unity, including a mobile game that teaches Brazilian Sign Language.",
      },
    },
  },
  projects: {
    eyebrow: "03 · Projects",
    title: "What I've been building",
    subtitle:
      "A selection of web, mobile and game projects, from professional to academic.",
    tagsLabel: "Technologies",
    viewSite: "View site",
    code: "Code",
    inDevelopment: "in development",
    gallery: {
      label: (name: string) => `${name} screenshots`,
      roleDescription: "carousel",
      slide: "slide",
      alt: (name: string, n: number) => `${name} screenshot ${n}`,
      position: (n: number, total: number) => `Image ${n} of ${total}`,
      enlarge: "Enlarge",
      previous: "Previous image",
      next: "Next image",
      close: "Close",
    },
    items: {
      "libras-go": {
        description:
          "3D endless-runner mobile game that teaches Brazilian Sign Language (LIBRAS) through gameplay, with vocabulary-themed levels.",
        siteLabel: "Teacher dashboard",
      },
      joinme: {
        description:
          "App for amateur sports: connects players, organizes matches and manages courts. Android and iOS.",
      },
      "formatta-aq": {
        description:
          "Platform that automatically formats documents to academic standards such as ABNT and APA, built for people who don't know the rules.",
      },
      "steam-watcher": {
        description:
          "App that tracks your Steam games and sends real-time notifications about updates.",
      },
      "roka-moka": {
        description:
          "Gamification for museums in Pelotas: visitors scan QR codes on artworks, collect stars and unlock badges.",
        note: "University project",
      },
      "ja-vi-esse-filme": {
        description:
          "Movie tracker with favorites, custom lists and details such as synopsis, cast and trailers, powered by the TMDB API.",
      },
      portfolio: {
        name: "Portfolio",
        description:
          "This site: personal portfolio with light/dark theme, two languages, animations and SEO.",
      },
      "flappy-bird": {
        description:
          "A Flappy Bird remake built to practice Unity and game development.",
      },
    },
  },
  contact: {
    eyebrow: "04 · Contact",
    title: "Let's talk?",
    subtitle:
      "Got a project, a job opening or just want to chat? Send me an email or find me on social media.",
    copy: "Copy",
    copied: "Copied!",
    copyLabel: "Copy email",
    copiedAnnouncement: "Email copied",
    downloadResume: "Download resume",
    otherResumePrefix: "Resume also available in",
    otherResumeLink: "Portuguese",
    otherResumeFile: "/curriculo.pdf",
    otherResumeDownloadName: "Curriculo-Claudinei-de-Lima.pdf",
    otherResumeLang: "pt-BR",
  },
  footer: {
    madeWith: "Built with Next.js.",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
