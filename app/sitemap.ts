import type { MetadataRoute } from "next";
import { firm } from "@/lib/firm";
import { internalPracticeAreas, attorneys } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = firm.url;
  const staticRoutes = [
    "",
    "/about",
    "/attorneys",
    "/practice-areas",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const pa of internalPracticeAreas) {
    routes.push({
      url: `${base}/practice-areas/${pa.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  for (const a of attorneys) {
    routes.push({
      url: `${base}/attorneys/${a.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return routes;
}
