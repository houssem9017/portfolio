export const siteConfig = {
  name: "Houssem Darragi",
  shortName: "HD",
  title: {
    en: "Houssem Darragi | Full-Stack Software Engineer",
    fr: "Houssem Darragi | Ingénieur logiciel full-stack",
  },
  description: {
    en: "Full-stack software engineer specializing in SaaS platforms, automation, web scraping and modern web applications using Django, Next.js and Angular.",
    fr: "Ingénieur logiciel full-stack spécialisé dans les plateformes SaaS, l'automatisation, le web scraping et les applications web modernes avec Django, Next.js et Angular.",
  },
  role: {
    en: "Full-Stack Software Engineer",
    fr: "Ingénieur logiciel full-stack",
  },
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://houssemdarragi.com").replace(
    /\/$/,
    ""
  ),
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "houssem@houssemdarragi.com",
  phone: "+21692406973",
  phoneDisplay: "(+216) 92406973",
  social: {
    linkedin: "https://www.linkedin.com/in/houssem-darragi/",
    linkedinHandle: "houssem-darragi",
    github: "https://github.com/houssem9017",
    githubHandle: "houssem9017",
  },
  localeDefault: "en" as const,
  locales: ["en", "fr"] as const,
};

export type SiteLocale = (typeof siteConfig.locales)[number];

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url;
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localePath(locale: SiteLocale, hash = ""): string {
  const base = locale === "fr" ? "/fr" : "/";
  if (!hash) return base;
  const clean = hash.startsWith("#") ? hash : `#${hash}`;
  return locale === "fr" ? `/fr${clean}` : `/${clean}`;
}
