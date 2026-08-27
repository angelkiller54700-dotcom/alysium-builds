import fs from "fs";
import path from "path";
import type { Project, Resource, Testimonial } from "@/data/types";

/**
 * Server-only content loaders. Reads the JSON files under /content, which
 * is exactly what the CMS at /admin edits. Do NOT import this file from a
 * "use client" component — it uses Node's fs module. Client components
 * that need this data should receive it as a prop from a server page/
 * component instead (see PortfolioGrid / ResourcesGrid usage).
 */

const CONTENT_DIR = path.join(process.cwd(), "content");

function readCollection<T>(folder: string): T[] {
  const dir = path.join(CONTENT_DIR, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      return JSON.parse(raw) as T;
    });
}

export function getProjects(): Project[] {
  return readCollection<Project>("projects").sort((a, b) => a.seed - b.seed);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getResources(): Resource[] {
  return readCollection<Resource>("resources").sort((a, b) => a.seed - b.seed);
}

export function getFeaturedResources(): Resource[] {
  return getResources().filter((r) => r.featured);
}

export function getTestimonials(): Testimonial[] {
  return readCollection<Testimonial>("testimonials");
}
