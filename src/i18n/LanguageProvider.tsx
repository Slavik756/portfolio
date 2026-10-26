"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { Locale } from "./config";
import { getDictionary, type Dictionary } from "./index";

type LanguageContextValue = {
  locale: Locale;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <LanguageContext.Provider
      value={{
        locale,
        t: getDictionary(locale),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
