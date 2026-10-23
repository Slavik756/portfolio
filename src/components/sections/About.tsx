"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, GraduationCap, MapPin, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Fullstack Development",
    description: "React, Next.js, TypeScript, Node.js & Java",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Team projects, Git workflows & code reviews",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Software development & 42 Paris",
  },
];

export default function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 font-mono text-sm text-emerald-400">01 / GET TO KNOW ME</p>

        <h2 id="about-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
          About Me<span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-5 text-zinc-400">The person behind the code.</p>
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
            Building digital experiences with{" "}
            <span className="gradient-text">purpose and precision.</span>
          </h3>

          <div className="mt-8 space-y-5 text-base leading-8 text-zinc-400">
            <p>
              I&apos;m Viacheslav, a developer based in Perpignan, France, passionate about creating
              modern and user-friendly web applications.
            </p>

            <p>
              My main focus is frontend development with React, Next.js and TypeScript. I also work
              with backend technologies including Node.js, Express, Java, Spring Boot and
              PostgreSQL.
            </p>

            <p>
              I have experience collaborating on team projects, implementing REST APIs, working with
              databases and building responsive interfaces.
            </p>

            <p>
              I&apos;m continuously improving my skills and looking for opportunities to contribute
              to meaningful projects.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={17} className="text-emerald-400" />
              Perpignan, France
            </span>

            <a
              href="https://github.com/Slavik756"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Explore my GitHub
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  <Icon size={23} />
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
