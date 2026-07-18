import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import WebsitesPage from "@/components/WebsitesPage";
import { LanguageProvider } from "@/components/LanguageProvider";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("en", "/websites");

export default function EnglishWebsites() {
  return (
    <LanguageProvider locale="en">
      <SmoothScroll>
        <Navbar />
        <WebsitesPage />
      </SmoothScroll>
    </LanguageProvider>
  );
}
