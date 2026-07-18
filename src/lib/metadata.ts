import type { Metadata } from "next";
import { siteConfig, absoluteUrl, type SiteLocale } from "@/lib/site";

export function buildMetadata(locale: SiteLocale, path = ""): Metadata {
  const title = siteConfig.title[locale];
  const description = siteConfig.description[locale];
  const basePath = locale === "fr" ? "/fr" : "/";
  const canonical = path ? absoluteUrl(`${basePath}${path}`) : absoluteUrl(basePath);
  const ogLocale = locale === "fr" ? "fr_FR" : "en_US";
  const altLocale = locale === "fr" ? "en_US" : "fr_FR";

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    keywords: [
      "Houssem Darragi",
      "Full-Stack Software Engineer",
      "Django",
      "Next.js",
      "Angular",
      "SaaS",
      "web scraping",
      "automation",
    ],
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl("/"),
        fr: absoluteUrl("/fr"),
        "x-default": absoluteUrl("/"),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      locale: ogLocale,
      alternateLocale: [altLocale],
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.role.en}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
  };
}

export function buildJsonLd(locale: SiteLocale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description[locale],
        inLanguage: locale === "fr" ? "fr-FR" : "en-US",
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        jobTitle: siteConfig.role[locale],
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
        knowsAbout: [
          "Django",
          "Next.js",
          "Angular",
          "SaaS",
          "web scraping",
          "automation",
        ],
      },
    ],
  };
}
