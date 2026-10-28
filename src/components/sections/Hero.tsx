"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
  Code2,
  Database,
  Layers3,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

import { useLanguage } from "@/i18n/LanguageProvider";

const technologies = [
  {
    name: "React",
    icon: Code2,
    position: "top-[10%] left-[-2%] sm:left-[-6%]",
    delay: 0,
  },
  {
    name: "Next.js",
    icon: Layers3,
    position: "top-[15%] right-[-2%] sm:right-[-5%]",
    delay: 0.6,
  },
  {
    name: "TypeScript",
    icon: Code2,
    position: "bottom-[19%] left-[-3%] sm:left-[-8%]",
    delay: 1.2,
  },
  {
    name: "Node.js",
    icon: Database,
    position: "right-[-2%] bottom-[14%] sm:right-[-6%]",
    delay: 1.8,
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-10 flex min-h-screen items-center overflow-hidden px-5 pt-32 pb-24 sm:px-8 lg:px-10 lg:pt-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[10%] left-[35%] h-[500px] w-[500px] rounded-full bg-emerald-500/[0.06] blur-[130px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="relative z-20">
          {/* Availability */}
          <motion.div
            {...reveal(0.1)}
            className="mb-10 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2.5 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              {!reducedMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              )}

              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium tracking-[0.1em] text-emerald-300">
              {t.hero.availability}
            </span>

            <ArrowUpRight size={14} className="text-emerald-400" aria-hidden="true" />
          </motion.div>

          {/* Intro */}
          <motion.p
            {...reveal(0.2)}
            className="mb-5 text-base font-medium tracking-wide text-zinc-400 sm:text-lg"
          >
            {t.hero.greeting}
          </motion.p>

          {/* Main heading */}
          <motion.h1
            id="hero-title"
            {...reveal(0.3)}
            className="max-w-[760px] text-[clamp(3.6rem,8vw,7.5rem)] leading-[0.95] font-bold tracking-[-0.075em]"
          >
            <span className="block text-white">Viacheslav</span>

            <span className="mt-2 block bg-gradient-to-r from-white via-emerald-200 to-emerald-500 bg-clip-text pb-2 text-transparent">
              Pokora<span className="text-emerald-400">.</span>
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div {...reveal(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <span className="h-px w-9 bg-emerald-400" />

            <span className="text-lg font-medium tracking-wide text-zinc-200 sm:text-xl">
              {t.hero.role}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            {...reveal(0.5)}
            className="mt-7 max-w-[570px] text-base leading-8 text-zinc-400"
          >
            {t.hero.description}
          </motion.p>

          {/* Buttons */}
          <motion.div {...reveal(0.6)} className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="primary-button group">
              {t.hero.projectsButton}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>

            <a
              href="/cv-frontend.pdf"
              download="Viacheslav_Pokora_Frontend_CV.pdf"
              className="secondary-button"
            >
              <Download size={17} aria-hidden="true" />
              {t.hero.frontendCV}
            </a>

            <a
              href="/cv-fullstack.pdf"
              download="Viacheslav_Pokora_Fullstack_CV.pdf"
              className="secondary-button"
            >
              <Download size={17} aria-hidden="true" />
              {t.hero.fullstackCV}
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...reveal(0.7)} className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Slavik756"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="social-link"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/viacheslav-pokora-1971a8350/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="social-link"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://t.me/hejsar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram — @hejsar"
              className="social-link"
            >
              <FaTelegramPlane size={20} />
            </a>

            <span className="mx-2 h-6 w-px bg-white/10" />

            <span className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={16} className="text-emerald-400" aria-hidden="true" />
              Perpignan, France
            </span>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: reducedMotion ? 0 : 1,
            delay: reducedMotion ? 0 : 0.3,
            ease: "easeOut",
          }}
          className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
        >
          {/* Outer rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[3%] rounded-full border border-white/[0.06]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[12%] rounded-full border border-dashed border-emerald-400/[0.15]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[22%] rounded-full border border-white/[0.08]"
          />

          {/* Ambient light */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[18%] rounded-full bg-emerald-500/10 blur-[80px]"
          />

          {/* Main card */}
          <div className="relative z-10 flex h-[57%] w-[57%] flex-col items-center justify-center overflow-hidden rounded-[28%] border border-emerald-300/20 bg-gradient-to-br from-[#1d3129] via-[#101916] to-[#080c0a] shadow-[0_35px_100px_rgba(0,0,0,0.6),0_0_80px_rgba(52,211,153,0.08)]">
            {/* Reflection */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent"
            />

            <div
              aria-hidden="true"
              className="absolute top-0 right-[20%] h-px w-[60%] bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent"
            />

            {/* Monogram */}
            <span className="relative bg-gradient-to-br from-white via-emerald-100 to-emerald-500 bg-clip-text text-[clamp(4.5rem,11vw,8rem)] leading-none font-black tracking-[-0.12em] text-transparent">
              VP
            </span>

            <span className="relative mt-5 text-[10px] font-medium tracking-[0.45em] text-emerald-300/70 uppercase sm:text-xs">
              Developer
            </span>

            {/* Status */}
            <div className="relative mt-7 flex items-center gap-2 rounded-full border border-emerald-400/15 bg-black/20 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[10px] font-medium tracking-wide text-zinc-300 sm:text-xs">
                {t.hero.editorStatus}
              </span>
            </div>
          </div>

          {/* Floating technologies */}
          {technologies.map((technology) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.name}
                animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  delay: technology.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute z-20 ${technology.position}`}
              >
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#111816]/95 px-3 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:px-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                    <Icon size={17} aria-hidden="true" />
                  </div>

                  <span className="text-xs font-semibold text-zinc-200 sm:text-sm">
                    {technology.name}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Decorative star */}
          <div aria-hidden="true" className="absolute top-[5%] left-[50%] text-emerald-300/50">
            <Sparkles size={25} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium tracking-[0.25em] text-zinc-500 transition-colors hover:text-emerald-400 lg:flex"
      >
        {t.hero.scrollToExplore}

        <ArrowDown size={17} className={reducedMotion ? "" : "animate-bounce"} aria-hidden="true" />
      </a>
    </section>
  );
}
