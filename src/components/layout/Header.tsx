"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageProvider";

const sectionLinks = ["#about", "#projects", "#skills", "#experience", "#contact"];

export default function Header() {
  const { t } = useLanguage();

  const navigation = [
    { name: t.navigation.about, href: "#about" },
    { name: t.navigation.projects, href: "#projects" },
    { name: t.navigation.skills, href: "#skills" },
    { name: t.navigation.experience, href: "#experience" },
    { name: t.navigation.contact, href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
      },
    );

    sectionLinks.forEach((href) => {
      const section = document.querySelector(href);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
          scrolled ? "bg-[#080b0a]/95 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Go to homepage"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-lg font-bold text-emerald-400 transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]">
              VP
            </div>

            <span className="hidden text-sm font-semibold tracking-wider text-white sm:inline">
              VIACHESLAV
              <span className="text-emerald-400">.</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-9">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive ? "text-emerald-400" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-emerald-400"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Language switcher and contact */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-2.5 text-sm font-medium whitespace-nowrap text-emerald-400 transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10 xl:inline-flex"
            >
              {t.navigation.talk}
              <ArrowUpRight size={16} />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-emerald-400/40 lg:hidden"
            >
              {isOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#080b0a]/98 backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-8">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="text-3xl font-semibold text-zinc-200 transition-colors hover:text-emerald-400"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <p className="absolute bottom-12 font-mono text-xs tracking-widest text-zinc-600">
              VIACHESLAV POKORA © 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
