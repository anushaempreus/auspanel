import type { MetadataRoute } from "next";

const SITE_URL = "https://auspanel.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about-us", "/services", "/projects", "/contact-us"];
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
