import type { en } from "./en";

export const fr: typeof en = {
  navigation: {
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    experience: "Expérience",
    contact: "Contact",
    talk: "Discutons",
  },

  hero: {
    availability: "Ouvert aux opportunités internationales",
    greeting: "Bonjour, je suis",
    role: "Développeur Frontend & Fullstack",
    description:
      "Je développe des applications web modernes et adaptatives avec React, Next.js, TypeScript et Node.js. J'aime résoudre des problèmes complexes et créer des expériences numériques de qualité.",
    projectsButton: "Voir mes projets",
    frontendCV: "CV Frontend",
    fullstackCV: "CV Fullstack",
    editorStatus: "Prêt à développer",
    cleanCode: "Code de qualité",
    betterExperiences: "Meilleures expériences",
    scrollToExplore: "DÉFILER POUR EXPLORER",
  },

  about: {
    label: "01 / FAISONS CONNAISSANCE",
    title: "À propos de moi",
    subtitle: "La personne derrière le code.",

    heading: "Créer des expériences numériques avec",
    headingAccent: "passion et précision.",

    paragraphs: [
      "Je m'appelle Viacheslav. Je suis développeur Fullstack basé à Perpignan, en France. Je crée des applications web modernes en travaillant aussi bien sur les interfaces utilisateur que sur les fonctionnalités côté serveur.",

      "Ma spécialité principale est le développement Fullstack. Côté frontend, j'utilise React, Next.js, TypeScript et Tailwind CSS. Côté backend, je travaille avec Node.js, Express, Java, Spring Boot, PostgreSQL et MongoDB.",

      "J'ai de l'expérience dans le développement de projets personnels et le travail en équipe. J'ai notamment travaillé sur des API REST, des bases de données, des systèmes d'authentification, des interfaces d'administration et des applications web responsives.",

      "J'ai contribué aux projets Elvira Nails, Verdora et Tasteorama, tout en développant mes propres applications. Je continue à perfectionner mes compétences et je souhaite évoluer en tant que développeur Fullstack.",
    ],

    githubButton: "Découvrir mon GitHub",

    highlights: {
      development: {
        title: "Développement Fullstack",
        description: "React, Next.js, TypeScript, Node.js et Java",
      },

      teamwork: {
        title: "Projets concrets",
        description: "Développement de projets personnels et collaboratifs",
      },

      learning: {
        title: "Apprentissage continu",
        description: "Développement logiciel et 42 Paris",
      },
    },
  },

  projectsSection: {
    label: "02 / PROJETS SÉLECTIONNÉS",
    title: "Mes projets",
    description:
      "Une sélection de projets dans lesquels j'explore les technologies modernes, résous des problèmes concrets et transforme des idées en applications fonctionnelles.",

    viewAll: "Voir tous mes projets sur GitHub",
    moreProjects: "Plus de projets sur GitHub",
    moreDescription: "Découvrez mes dépôts et mon parcours de développement.",
    exploreGitHub: "Explorer GitHub",

    keyFeatures: "Fonctionnalités principales",
    sourceCode: "Code source",
    sourceRequest: "Code source disponible sur demande",
    backend: "Backend",
    liveDemo: "Voir le site",
    featured: "À LA UNE",
    recognition: {
      label: "RECONNAISSANCE OPEN SOURCE",

      title: "Mon code dans XERJ Corpus Hub",

      description:
        "Ma contribution au projet collaboratif Elvira Nails — une API de services et une traduction ukrainienne — a été sélectionnée pour XERJ Corpus Hub, un index public de références de code pour les agents IA.",

      viewContribution: "Voir ma contribution",

      viewRepository: "Voir le dépôt GitHub",
    },

    items: {
      tasteorama: {
        category: "Application web Fullstack",
        description:
          "Une plateforme de découverte de recettes développée en équipe, avec authentification, filtres, favoris et interface adaptative. J’ai contribué au frontend et au backend en tant que chef d’équipe.",
        role: "Chef d'équipe / Développeur Fullstack",
        highlights: [
          "Encadrement de l’équipe",
          "Développement d’API REST",
          "Filtrage des recettes",
          "Gestion des favoris",
        ],
      },

      verdora: {
        category: "Backend e-commerce",
        description:
          "Un backend e-commerce collaboratif développé avec Java et Spring Boot. J’ai implémenté la pagination des catégories, le filtrage et le tri des commandes, des fonctionnalités API REST et des migrations de base de données.",
        role: "Développeur Backend",
        highlights: [
          "Développement d’API REST",
          "Filtrage et tri des commandes",
          "Pagination des catégories",
          "Migrations de base de données",
        ],
      },

      powergym: {
        category: "Application web de fitness",
        description:
          "Un site de fitness personnel et adaptatif, avec calendrier d’entraînement interactif, filtres par catégorie, formulaires de réservation et sauvegarde locale des réservations.",
        role: "Développeur Frontend",
        highlights: [
          "Interface adaptative",
          "Calendrier interactif",
          "Validation des réservations",
          "Stockage local",
        ],
      },

      tradeblade: {
        category: "Landing page adaptative",
        description:
          "Une page d’accueil moderne et adaptative, avec des composants bien structurés, des éléments interactifs et une interface épurée.",
        role: "Développeur Frontend",
        highlights: [
          "Mise en page adaptative",
          "Interface interactive",
          "HTML sémantique",
          "Architecture CSS",
        ],
      },

      "elvira-nails": {
        category: "Application web Fullstack · En développement",
        description:
          "Un projet Fullstack concret, en cours de développement, pour un studio de manucure et une académie de formation aux Pays-Bas. Je contribue au frontend et au backend, à la gestion de contenu multilingue, à l’intégration de Payload CMS et à l’architecture avec PostgreSQL.",
        role: "Développeur Fullstack",
        highlights: [
          "Développement frontend et backend",
          "Intégration de Payload CMS",
          "Gestion de contenu multilingue",
          "PostgreSQL et Prisma",
        ],
      },
      watchcharm: {
        category: "Site web responsive",
        description:
          "Un site de marque de montres développé en équipe, avec collections de produits, sections promotionnelles et mise en page adaptée aux différents écrans.",
        role: "Développeur Frontend",
        highlights: [
          "Design responsive",
          "Travail en équipe",
          "Catalogue de produits",
          "HTML sémantique",
        ],
      },

      stackers: {
        category: "Portfolio interactif",
        description:
          "Un portfolio JavaScript collaboratif avec personnalisation des thèmes, composants interactifs, carrousels et mise en page responsive.",
        role: "Développeur Frontend",
        highlights: [
          "Thèmes clair et sombre",
          "Personnalisation des couleurs",
          "Composants interactifs",
          "Design responsive",
        ],
      },

      "you-my-heart": {
        category: "Application React interactive",
        description:
          "Une application React créative associant narration interactive, animations Canvas, commandes musicales, galeries de photos et design adaptatif pour offrir une expérience utilisateur immersive.",
        role: "Développeur Frontend",
        highlights: [
          "Narration interactive",
          "Animations Canvas",
          "Commandes audio",
          "Interface adaptative",
        ],
      },
    },
  },

  skillsSection: {
    label: "03 / MES OUTILS",
    title: "Compétences techniques",
    description:
      "Les technologies et les outils que j'utilise pour concevoir, développer, tester et déployer des applications web modernes.",

    bottomTitle: "Toujours apprendre. Toujours progresser.",
    bottomDescription:
      "Je découvre continuellement de nouvelles technologies et développe mes compétences en programmation.",
    githubButton: "Découvrir mon GitHub",

    categories: {
      frontend: {
        title: "Développement Frontend",
        description: "Interfaces, interactions et expérience utilisateur",
      },
      backend: {
        title: "Développement Backend",
        description: "Logique serveur, API et architecture",
      },
      databases: {
        title: "Bases de données et ORM",
        description: "Stockage, modélisation et gestion des données",
      },
      tools: {
        title: "Outils et environnement",
        description: "Développement, tests et déploiement",
      },
    },
  },

  experienceSection: {
    label: "04 / MON PARCOURS",
    title: "Expérience et formation",
    description:
      "Mon parcours dans le développement logiciel, les projets collaboratifs, l'apprentissage continu et la résolution de problèmes concrets.",

    experienceTitle: "Expérience",
    experienceSubtitle: "Projets et développement",

    educationTitle: "Formation",
    educationSubtitle: "Apprentissage et développement professionnel",

    current: "En cours",
    viewProject: "Voir le projet",
    visitWebsite: "Visiter le site",

    bottomTitle: "Toujours aller de l'avant.",
    bottomDescription:
      "Chaque projet est une occasion d'apprendre, de collaborer et de créer quelque chose de meilleur.",
    workWithMe: "Travaillons ensemble",

    statuses: {
      inProgress: "En cours",
      completed: "Terminé",
      admitted: "Admis",
    },

    jobs: {
      "elvira-nails": {
        title: "Développeur Fullstack",
        period: "2026 — Aujourd'hui",
        location: "À distance · Projet en équipe",
        description:
          "Je participe au développement d'une plateforme web moderne pour une académie de manucure, en travaillant sur le frontend et le backend.",
        achievements: [
          "Développement de fonctionnalités frontend et backend avec Next.js et TypeScript.",
          "Utilisation de Payload CMS pour la gestion du contenu et l'administration.",
          "Intégration de PostgreSQL, Supabase et Prisma dans l'architecture de l'application.",
          "Collaboration avec les développeurs et la cheffe de projet à l'aide de Git et Jira.",
        ],
      },

      tasteorama: {
        title: "Chef d'équipe / Développeur Fullstack",
        period: "2025 — 2026",
        location: "À distance · Projet en équipe",
        description:
          "Développement d'une plateforme Fullstack de découverte de recettes et participation à la coordination du développement frontend et backend.",
        achievements: [
          "Implémentation des filtres de recettes, de la pagination et des composants adaptatifs.",
          "Développement de fonctionnalités API REST avec Node.js, Express et MongoDB.",
          "Intégration de l'authentification et de la gestion des favoris.",
          "Collaboration avec l'équipe via GitHub et les revues de code.",
        ],
      },

      verdora: {
        title: "Développeur Backend",
        period: "2026",
        location: "À distance · Projet en équipe",
        description:
          "Contribution à un backend e-commerce développé en Java et Spring Boot, avec des fonctionnalités API REST et de gestion des données.",
        achievements: [
          "Implémentation de la récupération des catégories avec pagination.",
          "Développement du filtrage et du tri des commandes par statut et par date.",
          "Travail avec PostgreSQL, Spring Data JPA et les migrations Flyway.",
          "Participation aux revues de code et au développement collaboratif.",
        ],
      },

      powergym: {
        title: "Développeur Frontend",
        period: "2026",
        location: "Projet personnel",
        description:
          "Conception et développement d'un site web de fitness adaptatif avec calendrier interactif et système de réservation.",
        achievements: [
          "Création d'interfaces adaptatives pour ordinateurs et appareils mobiles.",
          "Implémentation d'un calendrier interactif des entraînements.",
          "Développement de formulaires de réservation avec validation.",
          "Utilisation de LocalStorage pour conserver les réservations.",
        ],
      },
    },

    education: {
      "42-paris": {
        program: "Développement logiciel",
        description:
          "Admis à 42 Paris pour poursuivre une formation en développement logiciel fondée sur l'apprentissage par projets.",
      },

      "international-university": {
        program: "Développement Frontend",
        description:
          "Formation en développement logiciel et frontend afin de renforcer mes connaissances en programmation et mes compétences pratiques.",
      },

      goit: {
        program: "Développement Fullstack",
        description:
          "Formation pratique terminée en JavaScript, React, Node.js, API REST, bases de données et développement web en équipe.",
      },
    },
    showDetails: "Réalisations et technologies",
    hideDetails: "Masquer les réalisations et technologies",
    technologiesUsed: "Technologies utilisées",
  },

  contactSection: {
    label: "05 / ET MAINTENANT ?",
    title: "Contactons-nous",

    description:
      "Vous avez une opportunité professionnelle, une idée de projet ou simplement envie d'échanger ? Je serais ravi de vous répondre.",

    availability: "Ouvert aux opportunités internationales",

    heading: "Créons quelque chose",
    headingAccent: "de remarquable ensemble.",

    mainDescription:
      "Je suis développeur junior Frontend / Fullstack basé en France et ouvert aux opportunités internationales. Je recherche des postes en télétravail ou sur site, des stages et des projets collaboratifs où je pourrai apporter ma contribution, apprendre et progresser.",

    location: "Basé près de Perpignan, en France",

    sendEmail: "Envoyer un e-mail",

    emailTitle: "Me contacter",
    emailDescription: "Le moyen le plus simple de me joindre directement.",

    copyEmail: "Copier l'adresse e-mail",
    emailCopied: "Copié !",

    socialTitle: "Retrouvez-moi en ligne",
    socialDescription: "Découvrez mes projets ou échangeons sur les réseaux professionnels.",

    closing: "UNE IDÉE ? CONCRÉTISONS-LA ENSEMBLE.",
  },

  sections: {
    about: "À propos de moi",
    projects: "Projets sélectionnés",
    skills: "Compétences techniques",
    experience: "Expérience et formation",
    contact: "Me contacter",
  },
};
