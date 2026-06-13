"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Locale } from "@/lib/translations";
import { getTranslations, getLocaleFromBrowser } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: ReturnType<typeof getTranslations>;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match?.[2];
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved = getCookie("locale") as Locale | undefined;
    const initial = saved || getLocaleFromBrowser();
    setLocaleState(initial);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.cookie = `locale=${l};path=/;max-age=31536000`;
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: getTranslations(locale) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
