export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  role: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  githubBackend?: string;
  live?: string;
  accent: "emerald" | "violet" | "blue" | "amber";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "tasteorama",
    number: "01",
    title: "Tasteorama",
    category: "Fullstack Web Application",
    description:
      "A fullstack recipe discovery platform featuring authentication, advanced recipe filtering, favorites, and responsive design.",
    role: "Team Lead / Fullstack Developer",
    highlights: [
      "Team collaboration",
      "REST API integration",
      "Recipe filtering",
      "Authentication",
    ],
    technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    github: "https://github.com/Slavik756/Response-201-Front",
    githubBackend: "https://github.com/Slavik756/Response-201-back",
    accent: "emerald",
    featured: true,
  },
  {
    id: "verdora",
    number: "02",
    title: "Verdora",
    category: "E-commerce Backend",
    description:
      "A collaborative e-commerce backend with REST APIs, order management, advanced filtering, pagination, and database migrations.",
    role: "Backend Developer",
    highlights: [
      "REST API development",
      "Order filtering and sorting",
      "Pagination",
      "Database migrations",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security", "Flyway", "Docker"],
    github: "https://github.com/MaksymChalyi/Verdora-backend",
    accent: "violet",
    featured: true,
  },
  {
    id: "powergym",
    number: "03",
    title: "PowerGym",
    category: "Fitness Web Application",
    description:
      "A responsive fitness website with an interactive training calendar, category filters, booking forms, and persistent reservations.",
    role: "Frontend Developer",
    highlights: [
      "Responsive interface",
      "Interactive calendar",
      "Booking validation",
      "LocalStorage",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    accent: "blue",
  },
  {
    id: "tradeblade",
    number: "04",
    title: "TradeBlade",
    category: "Responsive Landing Page",
    description:
      "A modern responsive landing page with carefully structured components, interactive elements, and a clean visual interface.",
    role: "Frontend Developer",
    highlights: ["Responsive layout", "Interactive UI", "Semantic HTML", "CSS architecture"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Slavik756/TradeBlade",
    accent: "amber",
  },
];
