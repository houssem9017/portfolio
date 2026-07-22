"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { locale } = useLanguage();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 bg-[#1f2937] rounded-full p-0.5">
      {(["en", "fr"] as const).map((lang) => {
        const englishPath = pathname?.startsWith("/fr") ? pathname.replace(/^\/fr/, "") || "/" : pathname || "/";
        const href = lang === "fr" ? (englishPath === "/" ? "/fr" : `/fr${englishPath}`) : englishPath;
        const active = locale === lang;
        return (
          <Link
            key={lang}
            href={href}
            hrefLang={lang}
            aria-label={lang === "en" ? "English" : "Français"}
            aria-current={active ? "true" : undefined}
            className={`relative px-2.5 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
              active
                ? "text-white"
                : "text-[#6b7280] hover:text-[#9ca3af]"
            }`}
          >
            {active && (
              <motion.div
                layoutId="lang-bg"
                className="absolute inset-0 bg-[#6366f1] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{lang.toUpperCase()}</span>
          </Link>
        );
      })}
    </div>
  );
}
