export type SkillCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: "emerald" | "blue" | "violet" | "amber";
  skills: {
    name: string;
    icon: string;
  }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend Development",
    description: "Building modern, interactive user interfaces.",
    accent: "emerald",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Redux Toolkit", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Development",
    description: "Building APIs and scalable server-side systems.",
    accent: "blue",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "REST API", icon: "api" },
      { name: "Payload CMS", icon: "payload" },
    ],
  },
  {
    id: "databases",
    number: "03",
    title: "Databases & Backend Services",
    description: "Managing data, authentication and backend services.",
    accent: "violet",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Mongoose", icon: "mongoose" },
      { name: "Prisma", icon: "prisma" },
      { name: "Supabase", icon: "supabase" },
    ],
  },
  {
    id: "tools",
    number: "04",
    title: "Tools & DevOps",
    description: "Development, testing, deployment and collaboration.",
    accent: "amber",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "Swagger", icon: "swagger" },
      { name: "Vercel", icon: "vercel" },
      { name: "Playwright", icon: "playwright" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
];
