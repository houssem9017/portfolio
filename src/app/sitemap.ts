import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
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
}
