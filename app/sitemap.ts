import type { MetadataRoute } from "next";
import { projets } from "@/data/projets";
import { missions, secteurs, zones } from "@/data/site";

const base = "https://anneboullet.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixes = ["", "/realisations", "/professionnels", "/studio", "/questions-frequentes", "/contact", "/mentions-legales"];
  return [
    ...fixes.map((u) => ({ url: `${base}${u}` })),
    ...missions.map((m) => ({ url: `${base}/missions/${m.slug}` })),
    ...secteurs.map((s) => ({ url: `${base}/professionnels/${s.slug}` })),
    ...zones.map((z) => ({ url: `${base}/zones/${z.slug}` })),
    ...projets.map((p) => ({ url: `${base}/realisations/${p.slug}` })),
  ];
}
