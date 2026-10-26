"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, GraduationCap, MapPin, Users } from "lucide-react";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function About() {
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: t.about.highlights.development.title,
      description: t.about.highlights.development.description,
    },
    {
      icon: Users,
      title: t.about.highlights.teamwork.title,
      description: t.about.highlights.teamwork.description,
    },
    {
      icon: GraduationCap,
      title: t.about.highlights.learning.title,
      description: t.about.highlights.learning.description,
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
    >
      {/* Section heading */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 font-mono text-sm text-emerald-400">{t.about.label}</p>

        <h2 id="about-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t.about.title}
          <span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-5 text-zinc-400">{t.about.subtitle}</p>
      </motion.div>

      <div className="mt-16 grid items-start gap-14 lg:grid-cols-2">
        {/* Main description */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="max-w-xl text-3xl leading-snug font-semibold sm:text-4xl">
            {t.about.heading} <span className="gradient-text">{t.about.headingAccent}</span>
          </h3>

          <div className="mt-8 space-y-5 text-base leading-8 text-zinc-400">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={17} className="text-emerald-400" aria-hidden="true" />
              Perpignan, France
            </span>

            <a
              href="https://github.com/Slavik756"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
            >
              {t.about.githubButton}

              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={reducedMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : index * 0.12,
                }}
                className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.04]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10 text-emerald-400">
                  <Icon size={23} aria-hidden="true" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
