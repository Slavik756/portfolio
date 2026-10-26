import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

import { isLocale, locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <main id="home" className="relative min-h-screen overflow-hidden">
      <div className="background-grid pointer-events-none fixed inset-0" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <span>© 2026 Viacheslav Pokora</span>

          <span>
            Designed &amp; built with <span className="text-emerald-400">passion.</span>
          </span>
        </div>
      </footer>
    </main>
  );
}
