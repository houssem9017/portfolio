"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-[#1f2937] rounded-full p-0.5">
      {(["fr", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`relative px-2.5 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
            locale === lang
              ? "text-white"
              : "text-[#6b7280] hover:text-[#9ca3af]"
          }`}
        >
          {locale === lang && (
            <motion.div
              layoutId="lang-bg"
              className="absolute inset-0 bg-[#6366f1] rounded-full"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{lang.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
