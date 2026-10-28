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
  image?: string;
  imageAlt?: string;
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
    technologies: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],
    image: "/projects/tasteorama-preview.webp",
    imageAlt: "Tasteorama recipe discovery application",

    github: "https://github.com/Slavik756/Response-201-Front",
    githubBackend: "https://github.com/Slavik756/Response-201-back",
    live: "https://tasteorama-tau.vercel.app/",
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
    technologies: ["HTML5", "CSS3", "JavaScript", "Vite", "LocalStorage"],
    image: "/projects/powergym-real-preview.webp",
    imageAlt: "PowerGym fitness website with dark design and lime green accents",

    github: "https://github.com/Slavik756/Gym",
    live: "https://gym-orpin-mu.vercel.app/",
    accent: "blue",
    featured: true,
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
    technologies: ["HTML5", "CSS3", "JavaScript", "Vite", "Playwright"],
    image: "/projects/tradeblade-preview.webp",
    imageAlt: "TradeBlade responsive trading service landing page",

    github: "https://github.com/Slavik756/TradeBlade",
    live: "https://tradeblade-pi.vercel.app/",
    accent: "amber",
  },
  {
    id: "elvira-nails",
    number: "05",
    title: "Elvira Nails",
    category: "Fullstack Web Application · In Development",
    description:
      "A team-developed website for a nail studio and training academy in the Netherlands. Built with Next.js, TypeScript, PostgreSQL and Payload CMS, featuring multilingual content management and student case studies.",
    role: "Fullstack Developer",
    highlights: [
      "Frontend and backend development",
      "Payload CMS integration",
      "Multilingual content management",
      "PostgreSQL and Prisma",
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
    ],
    github: "https://github.com/ElviraNailsProject/elvira-nails-web",
    accent: "emerald",
  },
  {
    id: "watchcharm",
    number: "06",
    title: "WatchCharm",
    category: "Responsive Website",
    description:
      "A collaborative responsive watch brand website featuring product collections, promotional sections and adaptive layouts.",
    role: "Frontend Developer",
    highlights: ["Responsive design", "Team collaboration", "Product catalog", "Semantic HTML"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Vite"],
    github: "https://github.com/Slavik756/WatchCharm-team-project",
    live: "https://watchcharm-ochre.vercel.app/",
    accent: "blue",
  },
  {
    id: "stackers",
    number: "07",
    title: "Stackers",
    category: "Interactive Portfolio Website",
    description:
      "A collaborative JavaScript portfolio featuring theme customization, interactive components, sliders and responsive layouts.",
    role: "Frontend Developer",
    highlights: [
      "Dark and light themes",
      "Accent color customization",
      "Interactive components",
      "Responsive design",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Vite", "Swiper"],
    github: "https://github.com/Slavik756/stackers-js-project",
    live: "https://mykhaito.github.io/stackers-js-project/",
    accent: "violet",
  },
  {
    id: "you-my-heart",
    number: "08",
    title: "You My Heart",
    category: "Interactive React Experience",
    description:
      "A creative interactive web experience featuring Canvas animations, audio controls, photo galleries and responsive design.",
    role: "Frontend Developer",
    highlights: [
      "React components",
      "Canvas animations",
      "Audio controls",
      "Responsive interfaces",
    ],
    technologies: ["React", "TypeScript", "JavaScript", "Canvas API", "Vite"],
    github: "https://github.com/Slavik756/gift",
    live: "https://gift-chi-five.vercel.app/",
    accent: "amber",
  },
];
