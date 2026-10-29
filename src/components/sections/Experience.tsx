"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Code2,
  GraduationCap,
  ListChecks,
  MapPin,
  Sparkles,
} from "lucide-react";

import { experiences, education, type ExperienceItem, type EducationItem } from "@/data/experience";

import { useLanguage } from "@/i18n/LanguageProvider";

// ==========================================
// EXPERIENCE CARD
// ==========================================

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : Math.min(index * 0.08, 0.24),
      }}
      className="group relative pl-9 sm:pl-12"
    >
      {/* Timeline marker */}
      <span
        className="absolute top-8 left-0 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/50 bg-[#080b0a]"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </span>

      {/* Timeline line */}
      <span
        className="absolute top-12 bottom-[-32px] left-[9px] w-px bg-gradient-to-b from-emerald-400/40 to-white/5"
        aria-hidden="true"
      />

      {/* Main card */}
      <div className="rounded-2xl border border-white/10 bg-[#101413] p-6 transition-all duration-300 hover:border-emerald-400/30 hover:bg-[#131a17] sm:p-8">
        {/* Period and status */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400">
            <CalendarDays size={14} aria-hidden="true" />
            {item.period}
          </span>

          {item.current && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-emerald-300 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {t.experienceSection.current}
            </span>
          )}
        </div>

        {/* Job title */}
        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{item.title}</h3>

        {/* Organization */}
        <p className="mt-2 text-base font-medium text-emerald-400">{item.organization}</p>

        {/* Location */}
        <p className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
          <MapPin size={14} aria-hidden="true" />
          {item.location}
        </p>

        {/* Description */}
        <p className="mt-6 text-sm leading-7 text-zinc-400">{item.description}</p>

        {/* ======================================
            EXPANDABLE DETAILS
        ====================================== */}

        <div className="mt-7 border-y border-white/10">
          {/* Toggle button */}
          <button
            id={`experience-toggle-${item.id}`}
            type="button"
            onClick={() => setIsExpanded((previous) => !previous)}
            aria-expanded={isExpanded}
            aria-controls={`experience-details-${item.id}`}
            className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            <span className="flex items-center gap-3">
              <ListChecks size={19} className="shrink-0 text-emerald-400" aria-hidden="true" />

              <span className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-emerald-400">
                {isExpanded ? t.experienceSection.hideDetails : t.experienceSection.showDetails}
              </span>
            </span>

            {/* Animated arrow */}
            <ChevronDown
              size={19}
              aria-hidden="true"
              className={`shrink-0 text-emerald-400 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Animated content */}
          <div id={`experience-details-${item.id}`}>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="details"
                  role="region"
                  aria-labelledby={`experience-toggle-${item.id}`}
                  initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.32,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/10 pt-5 pb-6">
                    {/* ======================
                        ACHIEVEMENTS
                    ====================== */}

                    <div className="space-y-4 border-l-2 border-emerald-400/40 pl-4">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-emerald-400"
                            aria-hidden="true"
                          />

                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* ======================
                        TECHNOLOGIES
                    ====================== */}

                    <div className="mt-6 border-t border-white/10 pt-5">
                      {/* Technologies title */}
                      <div className="mb-4 flex items-center gap-3">
                        <Code2 size={18} className="text-emerald-400" aria-hidden="true" />

                        <h4 className="text-sm font-semibold text-zinc-200">
                          {t.experienceSection.technologiesUsed}
                        </h4>
                      </div>

                      {/* Technologies badges */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-emerald-400/15 bg-emerald-400/[0.055] px-3 py-1.5 font-mono text-[11px] text-zinc-300 transition-colors hover:border-emerald-400/35 hover:bg-emerald-400/10 hover:text-emerald-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* View project */}
        <a
          href={`#project-${item.id}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
        >
          {t.experienceSection.viewProject}

          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

// ==========================================
// EDUCATION CARD
// ==========================================

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  const statusStyles = {
    "In Progress": "border-blue-400/20 bg-blue-400/10 text-blue-300",
    Completed: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    Admitted: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  };

  const statusLabels = {
    "In Progress": t.experienceSection.statuses.inProgress,
    Completed: t.experienceSection.statuses.completed,
    Admitted: t.experienceSection.statuses.admitted,
  };

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : index * 0.1,
      }}
      className="group relative pl-9 sm:pl-12"
    >
      {/* Timeline marker */}
      <span
        className="absolute top-8 left-0 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-violet-400/50 bg-[#080b0a]"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-violet-400" />
      </span>

      {/* Timeline line */}
      <span
        className="absolute top-12 bottom-[-32px] left-[9px] w-px bg-gradient-to-b from-violet-400/40 to-white/5"
        aria-hidden="true"
      />

      <div className="rounded-2xl border border-white/10 bg-[#101413] p-6 transition-all duration-300 hover:border-violet-400/30 hover:bg-[#17141d] sm:p-8">
        {/* Period and status */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 font-mono text-xs text-violet-400">
            <CalendarDays size={14} aria-hidden="true" />
            {item.period}
          </span>

          <span
            className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-wider uppercase ${statusStyles[item.status]}`}
          >
            {statusLabels[item.status]}
          </span>
        </div>

        {/* Institution */}
        <h3 className="text-xl font-bold text-white sm:text-2xl">{item.institution}</h3>

        {/* Program */}
        <p className="mt-2 text-base font-medium text-violet-300">{item.program}</p>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-zinc-400">{item.description}</p>

        {/* Website */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
          >
            {t.experienceSection.visitWebsite}

            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

// ==========================================
// EXPERIENCE SECTION
// ==========================================

export default function Experience() {
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
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
        <p className="mb-4 font-mono text-sm text-emerald-400">{t.experienceSection.label}</p>

        <h2 id="experience-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t.experienceSection.title}
          <span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
          {t.experienceSection.description}
        </p>
      </motion.div>

      {/* Two-column timeline */}
      <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Experience */}
        <div>
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
              <BriefcaseBusiness size={23} aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                {t.experienceSection.experienceTitle}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">{t.experienceSection.experienceSubtitle}</p>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((item, index) => {
              const translation =
                t.experienceSection.jobs[item.id as keyof typeof t.experienceSection.jobs];

              const localizedItem = translation ? { ...item, ...translation } : item;

              return <ExperienceCard key={item.id} item={localizedItem} index={index} />;
            })}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/10 text-violet-400">
              <GraduationCap size={24} aria-hidden="true" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                {t.experienceSection.educationTitle}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">{t.experienceSection.educationSubtitle}</p>
            </div>
          </div>

          <div className="space-y-8">
            {education.map((item, index) => {
              const translation =
                t.experienceSection.education[
                  item.id as keyof typeof t.experienceSection.education
                ];

              const localizedItem = translation ? { ...item, ...translation } : item;

              return <EducationCard key={item.id} item={localizedItem} index={index} />;
            })}
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
        }}
        className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.035] p-7 sm:flex-row sm:items-center sm:p-9"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
            <Sparkles size={23} aria-hidden="true" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">{t.experienceSection.bottomTitle}</h3>

            <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-400">
              {t.experienceSection.bottomDescription}
            </p>
          </div>
        </div>

        <a href="#contact" className="secondary-button shrink-0">
          {t.experienceSection.workWithMe}

          <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
