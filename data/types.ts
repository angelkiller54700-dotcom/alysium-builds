/**
 * Shared, framework-agnostic types + fixed taxonomies for site content.
 * Safe to import from both server and client components (no fs access here).
 * The actual content now lives as JSON files in /content, editable by hand
 * or through the CMS at /admin — see lib/content.ts for the loaders.
 */

export type ProjectCategory =
  | "Hubs"
  | "Spawns"
  | "Survival"
  | "Fantasy"
  | "Medieval"
  | "Modern"
  | "Maps"
  | "Faction";

export type GalleryShot = {
  label: string;
  seed: number;
  /** Optional real screenshot, e.g. /images/uploads/xxx.jpg (uploaded via CMS) */
  image?: string;
};

export type Project = {
  slug: string;
  name: string;
  /** Short badge shown on cards, e.g. Hub / Faction / Survival / Town */
  type: string;
  categories: ProjectCategory[];
  description: string;
  longDescription: string;
  version: string;
  size: string;
  interiors: boolean;
  customTerrain: boolean;
  toolsUsed: string[];
  featured: boolean;
  /** Seed for the generated placeholder art, used until `image` is set */
  seed: number;
  /** Optional real cover screenshot, e.g. /images/uploads/xxx.jpg */
  image?: string;
  gallery: GalleryShot[];
  /** Present when this build is also purchasable as a resource on BuiltByBit */
  resourceLink?: string;
};

export type ResourceCategory =
  | "Spawns"
  | "Schematics"
  | "Building Packs"
  | "Maps"
  | "Terrain"
  | "Decorations";

export type Resource = {
  slug: string;
  name: string;
  category: ResourceCategory;
  description: string;
  price: number;
  version: string;
  format: string;
  seed: number;
  image?: string;
  link: string;
  featured: boolean;
};

export type Testimonial = {
  name: string;
  role: string;
  rating: number;
  quote: string;
};

export const projectCategories: ProjectCategory[] = [
  "Hubs",
  "Spawns",
  "Survival",
  "Fantasy",
  "Medieval",
  "Modern",
  "Maps",
  "Faction",
];

export const resourceCategories: ResourceCategory[] = [
  "Spawns",
  "Schematics",
  "Building Packs",
  "Maps",
  "Terrain",
  "Decorations",
];
