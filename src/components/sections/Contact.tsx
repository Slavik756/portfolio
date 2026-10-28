"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { ArrowDownToLine, ArrowRight, ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";

import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

import { useLanguage } from "@/i18n/LanguageProvider";

const email = "slavikpokora567@gmail.com";

const gmailComposeUrl =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${encodeURIComponent(email)}` +
  `&su=${encodeURIComponent("Portfolio — Contact Request")}`;

const contactLinks = [
  {
    name: "GitHub",
    username: "@Slavik756",
    href: "https://github.com/Slavik756",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    username: "Viacheslav Pokora",
    href: "https://www.linkedin.com/in/viacheslav-pokora-1971a8350/",
    icon: FaLinkedinIn,
  },
  {
    name: "Telegram",
    username: "@hejsar",
    href: "https://t.me/hejsar",
    icon: FaTelegramPlane,
  },
];

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10"
    >
      {/* Heading */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
        }}
        className="mb-16"
      >
        <p className="mb-4 font-mono text-sm text-emerald-400">{t.contactSection.label}</p>

        <h2 id="contact-title" className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t.contactSection.title}
          <span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
          {t.contactSection.description}
        </p>
      </motion.div>

      <div className="grid gap-7 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Main contact card */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
          }}
          className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-[#101815] p-7 sm:p-10"
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-[100px]"
          />

          <div className="relative">
            {/* Availability */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                {!reducedMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                )}

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-medium text-emerald-300">
                {t.contactSection.availability}
              </span>
            </div>

            {/* Main title */}
            <h3 className="mt-9 max-w-xl text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl">
              {t.contactSection.heading}

              <span className="block text-emerald-400">{t.contactSection.headingAccent}</span>
            </h3>

            {/* Main description */}
            <p className="mt-7 max-w-lg text-sm leading-8 text-zinc-400 sm:text-base">
              {t.contactSection.mainDescription}
            </p>

            {/* Location */}
            <div className="mt-7 flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={17} className="text-emerald-400" aria-hidden="true" />

              {t.contactSection.location}
            </div>

            {/* Main buttons */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-[#07110c] transition-all hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                <Mail size={18} aria-hidden="true" />

                {t.contactSection.sendEmail}

                <ArrowUpRight size={17} aria-hidden="true" />
              </a>

              <a
                href="/cv-frontend.pdf"
                download="Viacheslav_Pokora_Frontend_CV.pdf"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-white/10"
              >
                <ArrowDownToLine size={18} aria-hidden="true" />

                {t.hero.frontendCV}
              </a>

              <a
                href="/cv-fullstack.pdf"
                download="Viacheslav_Pokora_Fullstack_CV.pdf"
                className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-emerald-400/30 hover:bg-white/10"
              >
                <ArrowDownToLine size={18} aria-hidden="true" />

                {t.hero.fullstackCV}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
            delay: reducedMotion ? 0 : 0.12,
          }}
          className="flex flex-col gap-7"
        >
          {/* Email card */}
          <div className="rounded-3xl border border-white/10 bg-[#101413] p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <Mail size={23} aria-hidden="true" />
              </div>

              <span className="font-mono text-xs text-zinc-600">01 / EMAIL</span>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">{t.contactSection.emailTitle}</h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {t.contactSection.emailDescription}
            </p>

            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-sm font-medium break-all text-emerald-400 transition-colors hover:text-emerald-300 sm:text-base"
            >
              {email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? t.contactSection.emailCopied : t.contactSection.copyEmail}
              className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {copied ? (
                <Check size={16} className="text-emerald-400" aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}

              {copied ? t.contactSection.emailCopied : t.contactSection.copyEmail}
            </button>
          </div>

          {/* Social card */}
          <div className="flex-1 rounded-3xl border border-white/10 bg-[#101413] p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-zinc-300">
                <ArrowRight size={23} aria-hidden="true" />
              </div>

              <span className="font-mono text-xs text-zinc-600">02 / SOCIAL</span>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {t.contactSection.socialTitle}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {t.contactSection.socialDescription}
            </p>

            <div className="mt-6 space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all hover:border-emerald-400/25 hover:bg-emerald-400/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-zinc-300 transition-colors group-hover:text-emerald-400">
                        <Icon size={19} />
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-white">{link.name}</p>

                        <p className="mt-1 text-xs text-zinc-500">{link.username}</p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-zinc-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-400"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Closing line */}
      <motion.p
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
          delay: reducedMotion ? 0 : 0.15,
        }}
        className="mt-16 text-center font-mono text-xs tracking-wider text-zinc-600"
      >
        {t.contactSection.closing}
      </motion.p>
    </section>
  );
}
