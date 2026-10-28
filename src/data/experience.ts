export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
  current?: boolean;
};

export type EducationItem = {
  id: string;
  institution: string;
  program: string;
  period: string;
  description: string;
  status: "In Progress" | "Completed" | "Admitted";
  link?: string;
};

export const experiences: ExperienceItem[] = [
  {
    id: "elvira-nails",
    title: "Fullstack Developer",
    organization: "Elvira Nails — Nail Academy Platform",
    period: "2026 — Present",
    location: "Remote · Team Project",
    description:
      "Contributing to the development of a modern web platform for a nail academy, working across frontend and backend development.",
    achievements: [
      "Developing frontend and backend functionality using Next.js and TypeScript.",
      "Working with Payload CMS for content management and administration.",
      "Integrating PostgreSQL, Supabase and Prisma into the application architecture.",
      "Collaborating with developers and a project manager using Git and Jira.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Payload CMS",
      "Supabase",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    current: true,
  },
  {
    id: "tasteorama",
    title: "Team Lead / Fullstack Developer",
    organization: "Tasteorama",
    period: "2025 — 2026",
    location: "Remote · Team Project",
    description:
      "Developed a fullstack recipe discovery platform and contributed to coordinating frontend and backend development.",
    achievements: [
      "Implemented recipe filtering, pagination and responsive interface components.",
      "Developed REST API functionality using Node.js, Express and MongoDB.",
      "Integrated authentication and favorites functionality.",
      "Collaborated with team members using GitHub and code reviews.",
    ],
    technologies: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Mongoose"],
    link: "https://github.com/Slavik756/Response-201-Front",
  },
  {
    id: "verdora",
    title: "Backend Developer",
    organization: "Verdora — E-commerce Platform",
    period: "2026",
    location: "Remote · Team Project",
    description:
      "Contributed to a Java Spring Boot e-commerce backend, implementing REST API functionality and database-related features.",
    achievements: [
      "Implemented category retrieval with pagination.",
      "Developed order filtering and sorting by status and date.",
      "Worked with PostgreSQL, Spring Data JPA and Flyway migrations.",
      "Participated in code reviews and collaborative development.",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Flyway", "Docker"],
    link: "https://github.com/MaksymChalyi/Verdora-backend",
  },
  {
    id: "powergym",
    title: "Frontend Developer",
    organization: "PowerGym",
    period: "2026",
    location: "Personal Project",
    description:
      "Designed and developed a responsive fitness website with interactive scheduling and reservation functionality.",
    achievements: [
      "Created responsive interfaces for desktop and mobile devices.",
      "Implemented an interactive training calendar.",
      "Developed booking forms with validation.",
      "Used LocalStorage to persist reservation data.",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
  },
];

export const education: EducationItem[] = [
  {
    id: "42-paris",
    institution: "42 Paris",
    program: "Software Development",
    period: "2026",
    description:
      "Admitted to 42 Paris to pursue further software development education through a project-based learning approach.",
    status: "Admitted",
    link: "https://42.fr/",
  },
  {
    id: "goit",
    institution: "GoIT",
    program: "Fullstack Development",
    period: "2025",
    description:
      "Completed practical training in JavaScript, React, Node.js, REST APIs, databases and team-based web development.",
    status: "Completed",
  },
];
