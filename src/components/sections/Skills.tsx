"use client";

import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, Code2, Database, Server, Wrench } from "lucide-react";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiMongoose,
  SiPrisma,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiVercel,
  SiVite,
  SiSupabase,
  SiGithubactions,
} from "react-icons/si";

import { FaJava, FaTheaterMasks } from "react-icons/fa";
import type { IconType } from "react-icons";

import { skillCategories, type SkillCategory } from "@/data/skills";

const skillIcons: Record<string, IconType> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  java: FaJava,
  spring: SiSpringboot,
  api: Code2 as IconType,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  prisma: SiPrisma,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  postman: SiPostman,
  swagger: SiSwagger,
  vercel: SiVercel,
  playwright: FaTheaterMasks,
  vite: SiVite,
  supabase: SiSupabase,
  githubactions: SiGithubactions,
  payload: Code2 as IconType,
};

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

const themes = {
  emerald: {
    text: "text-emerald-400",
    border: "hover:border-emerald-400/30",
    bg: "bg-emerald-400/10",
  },
  blue: {
    text: "text-blue-400",
    border: "hover:border-blue-400/30",
    bg: "bg-blue-400/10",
  },
  violet: {
    text: "text-violet-400",
    border: "hover:border-violet-400/30",
    bg: "bg-violet-400/10",
  },
  amber: {
    text: "text-amber-400",
    border: "hover:border-amber-400/30",
    bg: "bg-amber-400/10",
  },
};

function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const reducedMotion = useReducedMotion();

  const theme = themes[category.accent];

  const CategoryIcon = categoryIcons[category.id as keyof typeof categoryIcons] ?? Code2;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : (index % 2) * 0.1,
      }}
      className={`group rounded-2xl border border-white/10 bg-[#101413] p-6 transition-colors duration-300 sm:p-8 ${theme.border}`}
    >
      {/* Category header */}
      <div className="mb-9 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${theme.bg} ${theme.text}`}
          >
            <CategoryIcon size={23} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">{category.title}</h3>

            <p className="mt-1.5 text-xs leading-5 text-zinc-500 sm:text-sm">
              {category.description}
            </p>
          </div>
        </div>

        <span className="font-mono text-xs text-zinc-600">{category.number}</span>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {category.skills.map((skill) => {
          const Icon = skillIcons[skill.icon] ?? Code2;

          return (
            <div
              key={skill.name}
              className="group/skill flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/[0.05]"
            >
              <Icon
                size={27}
                className="text-zinc-400 transition-colors duration-300 group-hover/skill:text-emerald-400"
              />

              <span className="text-center text-xs font-medium text-zinc-400 transition-colors group-hover/skill:text-white">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
}

export default function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
    >
      {/* Section heading */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
        }}
        className="mb-16"
      >
        <p className="mb-4 font-mono text-sm text-emerald-400">03 / MY TOOLKIT</p>

        <h2 id="skills-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
          Tech Stack
          <span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
          Technologies and tools I use to design, develop, test, and deliver modern web
          applications.
        </p>
      </motion.div>

      {/* Categories */}
      <div className="grid items-stretch gap-7 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Bottom block */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
        }}
        className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:flex-row"
      >
        <div>
          <h3 className="text-lg font-semibold text-white">Always learning. Always improving.</h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Continuously exploring new technologies and improving my development skills.
          </p>
        </div>

        <a
          href="https://github.com/Slavik756"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
        >
          Explore my GitHub
          <ArrowUpRight size={17} />
        </a>
      </motion.div>
    </section>
  );
}
