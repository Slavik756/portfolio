"use client";

import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { useLanguage } from "@/i18n/LanguageProvider";

const contributorUrl = "https://hub.xerj.org/contributors/Slavik756";

const repositoryUrl = "https://github.com/ElviraNailsProject/elvira-nails-web";

export default function XERJRecognition() {
  const { t } = useLanguage();

  const recognition = t.projectsSection.recognition;

  return (
    <article className="group relative mb-10 overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-emerald-400/[0.09] via-[#101413] to-[#101413] p-6 transition-colors duration-300 hover:border-emerald-400/45 sm:p-8">
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
          <BadgeCheck className="text-emerald-400" size={28} aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs tracking-widest text-emerald-400">{recognition.label}</p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {recognition.title}
          </h3>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
            {recognition.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["TypeScript", "SQL", "Next.js", "Open Source"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={contributorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition-colors hover:border-emerald-400 hover:bg-emerald-400/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              {recognition.viewContribution}

              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-5 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <FaGithub size={17} aria-hidden="true" />

              {recognition.viewRepository}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
