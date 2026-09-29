"use client";

import { createContext, useContext } from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

type I18n = { locale: Locale; t: Dictionary };

const LocaleContext = createContext<I18n>({ locale: "pt", t: dictionaries.pt });

// recebe só o locale (serializável); o dicionário é resolvido no cliente
export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useI18n = () => useContext(LocaleContext);
