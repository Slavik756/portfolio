export const locales = ["en", "fr", "uk"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  uk: "Українська",
};

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
