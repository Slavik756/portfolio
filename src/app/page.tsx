"use client";

import { motion } from "motion/react";
import { ArrowRight, Code2 } from "lucide-react";

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Java",
];

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="background-grid pointer-events-none fixed inset-0" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      {/* Navigation */}
      <Header />
      {/* Hero */}
      <Hero />
      <About />
      {/* Projects */}
      <Projects />
      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <SectionHeading
          number="03"
          title="Tech Stack"
          description="Technologies I use to bring ideas to life."
        />

        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="skill-card"
            >
              <Code2 size={19} className="text-emerald-400" />
              {tech}
            </motion.div>
          ))}
        </div>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-10"
      >
        <p className="mb-6 font-mono text-sm text-emerald-400">
          04 / WHAT&apos;S NEXT?
        </p>

        <h2 className="text-4xl font-bold sm:text-6xl">
          Let&apos;s build something
          <br />
          <span className="gradient-text">great together.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-zinc-400">
          I&apos;m open to new opportunities, interesting projects, and
          collaborations. Let&apos;s connect.
        </p>

        <a
          href="https://www.linkedin.com/in/viacheslav-pokora-1971a8350/"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button mt-10"
        >
          Get in Touch
          <ArrowRight size={18} />
        </a>
      </section>
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <span>© 2026 Viacheslav Pokora</span>

          <span>
            Designed & built with{" "}
            <span className="text-emerald-400">passion.</span>
          </span>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-14">
      <p className="mb-4 font-mono text-sm text-emerald-400">
        {number} / SECTION
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
        <span className="text-emerald-400">.</span>
      </h2>

      <p className="mt-5 text-zinc-400">{description}</p>
    </div>
  );
}
