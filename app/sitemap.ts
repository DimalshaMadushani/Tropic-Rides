import type { MetadataRoute } from "next";
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "/",
    "/about",
    "/airport-transfers",
    "/contact-us",
    "/scooter-rent",
    "/surf-lessons",
    "/tour",
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
