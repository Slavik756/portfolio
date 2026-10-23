"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Server,
  Dumbbell,
  Activity,
  CheckCircle2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const themes = {
  emerald: {
    border: "hover:border-emerald-400/35",
    glow: "bg-emerald-500/15",
    text: "text-emerald-400",
    badge: "border-emerald-400/20 bg-emerald-400/10",
  },
  violet: {
    border: "hover:border-violet-400/35",
    glow: "bg-violet-500/15",
    text: "text-violet-400",
    badge: "border-violet-400/20 bg-violet-400/10",
  },
  blue: {
    border: "hover:border-blue-400/35",
    glow: "bg-blue-500/15",
    text: "text-blue-400",
    badge: "border-blue-400/20 bg-blue-400/10",
  },
  amber: {
    border: "hover:border-amber-400/35",
    glow: "bg-amber-500/15",
    text: "text-amber-400",
    badge: "border-amber-400/20 bg-amber-400/10",
  },
};

function ProjectVisual({ project }: { project: Project }) {
  const theme = themes[project.accent];

  const icons = {
    tasteorama: Code2,
    verdora: Server,
    powergym: Dumbbell,
    tradeblade: Activity,
  };

  const Icon = icons[project.id as keyof typeof icons] ?? Code2;

  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-[#101513] sm:h-72">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />

      {/* Glow */}
      <div
        className={`absolute h-60 w-60 rounded-full blur-[90px] ${theme.glow}`}
      />

      {/* Decorative browser window */}
      <div className="relative w-[82%] max-w-[420px] origin-center rounded-xl border border-white/15 bg-[#151b19] shadow-[0_25px_65px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]">
        <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-4">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />

          <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1 text-center font-mono text-[9px] text-zinc-500">
            {project.id}.dev
          </div>
        </div>

        <div className="flex min-h-40 flex-col items-center justify-center gap-5 px-6 py-8">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${theme.badge} ${theme.text}`}
          >
            <Icon size={31} strokeWidth={1.5} />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-2 text-xs text-zinc-500">{project.category}</p>
          </div>

          <div className="flex gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded bg-white/5 px-2 py-1 font-mono text-[9px] text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span className="absolute bottom-4 left-5 font-mono text-[10px] tracking-widest text-zinc-500">
        PROJECT / {project.number}
      </span>

      {project.featured && (
        <span className="absolute right-4 top-4 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium text-emerald-300">
          FEATURED
        </span>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const theme = themes[project.accent];

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : Math.min(index % 2, 1) * 0.12,
      }}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101413] transition-colors duration-300 ${theme.border}`}
    >
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Category */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className={`font-mono text-xs uppercase tracking-widest ${theme.text}`}
          >
            {project.category}
          </span>

          <span className="font-mono text-xs text-zinc-600">
            {project.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>

        {/* Role */}
        <p className="mt-3 flex items-center gap-2 text-sm text-zinc-400">
          <Code2 size={15} className={theme.text} />
          {project.role}
        </p>

        {/* Description */}
        <p className="mt-6 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mt-7">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Key Features
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-2 text-xs leading-5 text-zinc-400"
              >
                <CheckCircle2
                  size={15}
                  className={`mt-0.5 shrink-0 ${theme.text}`}
                />

                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-400 transition-colors hover:border-emerald-400/20 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-white/10 pt-7 text-sm">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-emerald-400"
            >
              <FaGithub size={17} />
              Source Code
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="text-xs text-zinc-600">
              Source code available on request
            </span>
          )}

          {project.githubBackend && (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-emerald-400"
            >
              Backend
              <ArrowUpRight size={15} />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 font-medium ${theme.text}`}
            >
              Live Demo
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
