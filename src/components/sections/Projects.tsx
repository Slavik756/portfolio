"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Projects() {
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reducedMotion ? 0 : 0.6 }}
        className="mb-16"
      >
        <p className="mb-4 font-mono text-sm text-emerald-400">{t.projectsSection.label}</p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 id="projects-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
              {t.projectsSection.title}
              <span className="text-emerald-400">.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
              {t.projectsSection.description}
            </p>
          </div>

          <a
            href="https://github.com/Slavik756"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
          >
            {t.projectsSection.viewAll}

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </motion.div>

      <div className="grid items-stretch gap-7 lg:grid-cols-2">
        {projects.map((project, index) => {
          const translatedProject =
            t.projectsSection.items[project.id as keyof typeof t.projectsSection.items];

          return (
            <ProjectCard
              key={project.id}
              index={index}
              project={translatedProject ? { ...project, ...translatedProject } : project}
            />
          );
        })}
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reducedMotion ? 0 : 0.6 }}
        className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:flex-row"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
            <FolderGit2 size={23} />
          </div>

          <div>
            <h3 className="font-semibold text-white">{t.projectsSection.moreProjects}</h3>

            <p className="mt-1 text-sm text-zinc-500">{t.projectsSection.moreDescription}</p>
          </div>
        </div>

        <a
          href="https://github.com/Slavik756?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-button shrink-0"
        >
          {t.projectsSection.exploreGitHub}
          <ArrowUpRight size={17} />
        </a>
      </motion.div>
    </section>
  );
}
