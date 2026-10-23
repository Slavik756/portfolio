"use client";

import { motion } from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  Download,
  Code2,
  Terminal,
  ExternalLink,
  MapPin,
  Sparkles,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Java",
];

const projects = [
  {
    number: "01",
    title: "Tasteorama",
    category: "Fullstack Application",
    description:
      "A recipe discovery platform with authentication, advanced filtering, favorites, and a responsive user experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Slavik756",
  },
  {
    number: "02",
    title: "Verdora",
    category: "Backend Development",
    description:
      "An e-commerce backend featuring REST APIs, order management, filtering, pagination, and database migrations.",
    technologies: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/MaksymChalyi/Verdora-backend",
  },
  {
    number: "03",
    title: "PowerGym",
    category: "Frontend Application",
    description:
      "A responsive fitness website featuring an interactive training calendar and a booking system.",
    technologies: ["JavaScript", "CSS", "Frontend"],
    github: "https://github.com/Slavik756",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="background-grid pointer-events-none fixed inset-0" />

      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* Navigation */}
      <header className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-xl font-bold text-emerald-400">
            VP
          </div>

          <span className="text-sm font-semibold tracking-wide">
            VIAСHESLAV<span className="text-emerald-400">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm text-zinc-400 md:flex">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-emerald-400/40 px-5 py-2.5 text-sm font-medium text-emerald-400 transition hover:bg-emerald-400/10"
        >
          Let's Talk ↗
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            OPEN TO OPPORTUNITIES
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-lg text-zinc-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Viacheslav
            <br />
            <span className="gradient-text">Pokora.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-7 text-xl font-medium text-zinc-200 sm:text-2xl"
          >
            Fullstack Developer
            <span className="text-emerald-400">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-8 text-zinc-400"
          >
            I build modern, scalable, and user-focused web applications.
            Passionate about clean code, thoughtful design, and transforming
            ideas into digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a href="#projects" className="primary-button">
              Explore Projects
              <ArrowRight size={18} />
            </a>

            <a href="/cv.pdf" download className="secondary-button">
              <Download size={17} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <a
              href="https://github.com/Slavik756"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/viacheslav-pokora-1971a8350/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedin size={21} />
            </a>

            <div className="h-5 w-px bg-zinc-700" />

            <span className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={15} />
              France
            </span>
          </motion.div>
        </div>

        {/* Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-emerald-500/10 blur-[90px]" />

          <div className="code-window relative overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Code2 size={14} />
                developer.ts
              </div>

              <Terminal size={15} className="text-zinc-500" />
            </div>

            <div className="overflow-x-auto p-6 font-mono text-xs leading-8 sm:p-8 sm:text-sm">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-zinc-400">= {"{"}</span>
              </div>

              <div className="pl-6">
                <span className="text-emerald-300">name</span>:{" "}
                <span className="text-amber-300">"Viacheslav Pokora"</span>,
              </div>

              <div className="pl-6">
                <span className="text-emerald-300">role</span>:{" "}
                <span className="text-amber-300">"Fullstack Developer"</span>,
              </div>

              <div className="pl-6">
                <span className="text-emerald-300">location</span>:{" "}
                <span className="text-amber-300">"France"</span>,
              </div>

              <div className="pl-6">
                <span className="text-emerald-300">skills</span>: [
              </div>

              <div className="pl-12 text-amber-300">"React", "Next.js",</div>

              <div className="pl-12 text-amber-300">
                "TypeScript", "Node.js",
              </div>

              <div className="pl-12 text-amber-300">"Java", "PostgreSQL"</div>

              <div className="pl-6">],</div>

              <div className="pl-6">
                <span className="text-emerald-300">passion</span>:{" "}
                <span className="text-amber-300">"Building great things"</span>,
              </div>

              <div className="pl-6">
                <span className="text-emerald-300">available</span>:{" "}
                <span className="text-purple-400">true</span>
              </div>

              <div>{"};"}</div>

              <div className="mt-5 text-zinc-600">
                // Always learning. Always building.
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 bg-black/20 px-6 py-3 text-xs text-zinc-500">
              <span>TypeScript</span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Ready to build
              </span>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-6 -left-5 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#151a19] px-5 py-4 shadow-2xl sm:flex"
          >
            <div className="rounded-lg bg-emerald-400/10 p-2 text-emerald-400">
              <Sparkles size={21} />
            </div>
            <div>
              <p className="text-sm font-semibold">Clean Code</p>
              <p className="text-xs text-zinc-500">Better Experiences</p>
            </div>
          </motion.div>
        </motion.div>

        <a
          href="#about"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-500 lg:flex"
        >
          SCROLL TO EXPLORE
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <SectionHeading
          number="01"
          title="About Me"
          description="A little about who I am and what drives me."
        />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-semibold leading-snug">
              Turning complex problems into{" "}
              <span className="gradient-text">elegant solutions.</span>
            </h3>
          </div>

          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>
              I'm a developer based in France, focused on building reliable and
              engaging web applications.
            </p>

            <p>
              My experience includes frontend development with React and
              Next.js, backend development with Node.js and Java, and
              collaborating with teams on real-world projects.
            </p>

            <p>
              I enjoy learning new technologies, improving my skills, and
              creating products that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
      >
        <SectionHeading
          number="02"
          title="Featured Projects"
          description="A selection of projects I've worked on."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="mb-12 flex items-start justify-between">
                <span className="font-mono text-sm text-emerald-400">
                  {project.number} / PROJECT
                </span>

                <ExternalLink
                  size={20}
                  className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400"
                />
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-widest text-zinc-500">
                  {project.category}
                </p>

                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

                <p className="mb-8 min-h-28 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300"
                >
                  View GitHub
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

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
          04 / WHAT'S NEXT?
        </p>

        <h2 className="text-4xl font-bold sm:text-6xl">
          Let's build something
          <br />
          <span className="gradient-text">great together.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-zinc-400">
          I'm open to new opportunities, interesting projects, and
          collaborations. Let's connect.
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
