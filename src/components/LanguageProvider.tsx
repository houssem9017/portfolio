"use client";

import {
  createContext,
  useContext,
  useCallback,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "@/lib/translations";
import { getTranslations } from "@/lib/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: ReturnType<typeof getTranslations>;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (l: Locale) => {
      document.cookie = `locale=${l};path=/;max-age=31536000;SameSite=Lax`;
      const hash =
        typeof window !== "undefined" ? window.location.hash : "";
      if (l === "fr") {
        router.push(`/fr${hash}`);
      } else {
        const next =
          pathname?.startsWith("/fr")
            ? pathname.replace(/^\/fr/, "") || "/"
            : pathname || "/";
        router.push(`${next}${hash}`);
      }
    },
    [pathname, router]
  );

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: getTranslations(locale) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
