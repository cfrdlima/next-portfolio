import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { "pt-BR": siteUrl, en: `${siteUrl}/en` };
  return [siteUrl, `${siteUrl}/en`].map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
