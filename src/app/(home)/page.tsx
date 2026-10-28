"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { defaultLocale, isLocale } from "@/i18n/config";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("portfolio-locale");

    if (savedLocale && isLocale(savedLocale)) {
      router.replace(`/${savedLocale}`);
      return;
    }

    const browserLanguages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];

    const preferredLanguage = browserLanguages
      .map((language) => language.split("-")[0].toLowerCase())
      .find(isLocale);

    router.replace(`/${preferredLanguage ?? defaultLocale}`);
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080b0a]">
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-3 font-mono text-sm text-emerald-400"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        Loading portfolio...
      </div>
    </main>
  );
}
