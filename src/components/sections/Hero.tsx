"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
  Sparkles,
  Terminal,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const codeLines = [
  [
    { text: "const ", color: "text-purple-400" },
    { text: "developer", color: "text-blue-300" },
    { text: " = {", color: "text-zinc-300" },
  ],
  [
    { text: "  name", color: "text-emerald-300" },
    { text: ': "Viacheslav Pokora",', color: "text-amber-300" },
  ],
  [
    { text: "  role", color: "text-emerald-300" },
    { text: ': "Fullstack Developer",', color: "text-amber-300" },
  ],
  [
    { text: "  location", color: "text-emerald-300" },
    { text: ': "France",', color: "text-amber-300" },
  ],
  [
    { text: "  skills", color: "text-emerald-300" },
    { text: ": [", color: "text-zinc-300" },
  ],
  [{ text: '    "React", "Next.js",', color: "text-amber-300" }],
  [{ text: '    "TypeScript", "Node.js",', color: "text-amber-300" }],
  [{ text: '    "Java", "PostgreSQL"', color: "text-amber-300" }],
  [{ text: "  ],", color: "text-zinc-300" }],
  [
    { text: "  available", color: "text-emerald-300" },
    { text: ": true", color: "text-purple-400" },
  ],
  [{ text: "};", color: "text-zinc-300" }],
];

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reducedMotion ? 0 : 0.65,
      delay: reducedMotion ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-28"
    >
      {/* Left side */}
      <div className="relative z-10">
        <motion.div
          {...reveal(0.1)}
          className="mb-9 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2.5"
        >
          <span className="relative flex h-2 w-2">
            {!reducedMotion && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            )}
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-emerald-300 sm:text-xs">
            OPEN TO OPPORTUNITIES
          </span>
        </motion.div>

        <motion.p {...reveal(0.2)} className="mb-5 text-lg text-zinc-400">
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          id="hero-title"
          {...reveal(0.3)}
          className="text-[clamp(3.4rem,8vw,6.4rem)] font-bold leading-[1.05] tracking-[-0.065em]"
        >
          Viacheslav
          <br />
          <span className="gradient-text">Pokora.</span>
        </motion.h1>

        <motion.div {...reveal(0.4)} className="mt-8">
          <p className="flex flex-wrap items-center gap-3 text-xl font-medium text-zinc-200 sm:text-2xl">
            <Code2 size={23} className="text-emerald-400" aria-hidden="true" />
            Frontend & Fullstack Developer
          </p>
        </motion.div>

        <motion.p
          {...reveal(0.5)}
          className="mt-7 max-w-[540px] text-base leading-8 text-zinc-400"
        >
          I create modern, responsive web applications with React, Next.js,
          TypeScript and Node.js. I enjoy solving complex problems, writing
          maintainable code and building meaningful digital experiences.
        </motion.p>

        <motion.div
          {...reveal(0.6)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="primary-button group">
            Explore Projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <a
            href="/cv.pdf"
            download="Viacheslav_Pokora_CV.pdf"
            className="secondary-button"
          >
            <Download size={17} aria-hidden="true" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          {...reveal(0.7)}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href="https://github.com/Slavik756"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="social-link"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/viacheslav-pokora-1971a8350/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="social-link"
          >
            <FaLinkedin size={22} />
          </a>

          <span className="h-5 w-px bg-zinc-700" />

          <span className="flex items-center gap-2 text-sm text-zinc-500">
            <MapPin size={16} aria-hidden="true" />
            Perpignan, France
          </span>
        </motion.div>
      </div>

      {/* Right side: editor */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, x: 35, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: reducedMotion ? 0 : 0.8,
          delay: reducedMotion ? 0 : 0.35,
        }}
        className="relative mx-auto w-full max-w-[560px] lg:mx-0"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-10 rounded-full bg-emerald-500/10 blur-[100px]"
        />

        <div className="code-window relative overflow-hidden rounded-2xl">
          {/* Window top */}
          <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
            <div aria-hidden="true" className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Code2 size={15} aria-hidden="true" />
              developer.ts
            </div>

            <Terminal size={16} className="text-zinc-500" aria-hidden="true" />
          </div>

          {/* Code */}
          <div className="overflow-x-auto px-3 py-7 font-mono text-[11px] leading-8 sm:px-6 sm:text-[13px]">
            <div aria-label="TypeScript developer profile">
              {codeLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={reducedMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reducedMotion ? 0 : 0.65 + index * 0.075,
                    duration: reducedMotion ? 0 : 0.3,
                  }}
                  className="flex min-w-max"
                >
                  <span
                    aria-hidden="true"
                    className="mr-5 inline-block w-5 select-none text-right text-zinc-600"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="whitespace-pre">
                    {line.map((part, partIndex) => (
                      <span key={partIndex} className={part.color}>
                        {part.text}
                      </span>
                    ))}
                  </span>
                </motion.div>
              ))}

              <motion.div {...reveal(1.6)} className="mt-5 flex min-w-max">
                <span
                  aria-hidden="true"
                  className="mr-5 inline-block w-5 text-right text-zinc-600"
                >
                  12
                </span>

                <span className="text-zinc-500">
                  {"// Always learning. Always building."}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Editor status bar */}
          <div className="flex items-center justify-between border-t border-white/10 bg-black/20 px-5 py-3 text-xs text-zinc-500">
            <span className="flex items-center gap-2">
              <Code2 size={13} aria-hidden="true" />
              TypeScript
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Ready to build
            </span>
          </div>
        </div>

        {/* Floating card */}
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -9, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-7 -left-4 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#151a19] px-5 py-4 shadow-2xl sm:flex"
        >
          <div className="rounded-lg bg-emerald-400/10 p-2.5 text-emerald-400">
            <Sparkles size={21} aria-hidden="true" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Clean Code</p>

            <p className="text-xs text-zinc-500">Better Experiences</p>
          </div>

          <ArrowUpRight
            size={15}
            className="ml-2 text-emerald-400"
            aria-hidden="true"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-zinc-500 transition-colors hover:text-emerald-400 lg:flex"
      >
        SCROLL TO EXPLORE
        <ArrowDown
          size={17}
          className={reducedMotion ? "" : "animate-bounce"}
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
