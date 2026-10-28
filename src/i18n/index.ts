import { en } from "./translations/en";
import { fr } from "./translations/fr";
import { uk } from "./translations/uk";

import type { Locale } from "./config";

export const dictionaries = {
  en,
  fr,
  uk,
};

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
