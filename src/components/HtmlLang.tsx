"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/translations";

export default function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "fr" ? "fr" : "en";
  }, [locale]);
  return null;
}
