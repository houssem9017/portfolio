import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import HtmlLang from "@/components/HtmlLang";
import { LanguageProvider } from "@/components/LanguageProvider";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("fr");

export default function FrenchHome() {
  return (
    <LanguageProvider locale="fr">
      <HtmlLang locale="fr" />
      <JsonLd locale="fr" />
      <SmoothScroll>
        <Navbar />
        <HomePage />
      </SmoothScroll>
    </LanguageProvider>
  );
}
