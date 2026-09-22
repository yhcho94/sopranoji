import type { MetadataRoute } from "next";

const BASE_URL = "https://sopranoji.vercel.app";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.9 },
  { path: "/vocalist", priority: 0.8 },
  { path: "/conductor", priority: 0.8 },
  { path: "/humanities-lecture", priority: 0.7 },
  { path: "/soborche", priority: 0.7 },
  { path: "/diva-cantabile", priority: 0.7 },
  { path: "/sing-together", priority: 0.7 },
  { path: "/press", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
