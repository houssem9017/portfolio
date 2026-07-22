import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { portfolioProjects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const roots: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: absoluteUrl("/"),
          fr: absoluteUrl("/fr"),
          "x-default": absoluteUrl("/"),
        },
      },
    },
    {
      url: absoluteUrl("/fr"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl("/"),
          fr: absoluteUrl("/fr"),
          "x-default": absoluteUrl("/"),
        },
      },
    },
  ];
  const projectRoutes = portfolioProjects.filter((project) => project.featured).flatMap((project) => {
    const en = absoluteUrl(`/work/${project.slug}`);
    const fr = absoluteUrl(`/fr/work/${project.slug}`);
    return [
      { url: en, lastModified, changeFrequency: "monthly" as const, priority: 0.8, alternates: { languages: { en, fr, "x-default": en } } },
      { url: fr, lastModified, changeFrequency: "monthly" as const, priority: 0.75, alternates: { languages: { en, fr, "x-default": en } } },
    ];
  });
  return [...roots, ...projectRoutes];
}
