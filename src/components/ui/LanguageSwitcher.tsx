"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Check, ChevronDown, Globe2 } from "lucide-react";

import { defaultLocale, isLocale, locales, localeNames, type Locale } from "@/i18n/config";

const languageLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  uk: "UA",
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const segments = pathname.split("/").filter(Boolean);

  const currentLocale = segments.length > 0 && isLocale(segments[0]) ? segments[0] : defaultLocale;

  function changeLanguage(locale: Locale) {
    const remainingSegments = isLocale(segments[0] ?? "") ? segments.slice(1) : segments;

    const restPath = remainingSegments.join("/");

    const nextPath = `/${locale}${restPath ? `/${restPath}` : ""}`;

    // Save the selected language
    window.localStorage.setItem("portfolio-locale", locale);

    setIsOpen(false);

    router.push(`${nextPath}${window.location.hash}`);
  }

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 text-sm font-medium text-zinc-300 transition-all hover:border-emerald-400/30 hover:text-white"
      >
        <Globe2 size={17} className="text-emerald-400" aria-hidden="true" />

        <span>{languageLabels[currentLocale]}</span>

        <ChevronDown
          size={14}
          aria-hidden="true"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Languages"
          className="absolute top-full right-0 z-50 mt-3 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#141a17] p-1.5 shadow-2xl shadow-black/50"
        >
          {locales.map((locale) => {
            const isActive = currentLocale === locale;

            return (
              <button
                key={locale}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => changeLanguage(locale)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  isActive
                    ? "bg-emerald-400/10 text-emerald-300"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{localeNames[locale]}</span>

                {isActive && <Check size={16} aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
