"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Home,
  LayoutGrid,
  List,
  Map,
  Mountain,
  Shield,
  Sparkles,
  Swords,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import ProjectListRow from "./ProjectListRow";
import { projectCategories, type Project, type ProjectCategory } from "@/data/types";

const FILTERS: ("All" | ProjectCategory)[] = ["All", ...projectCategories];

const FILTER_ICONS: Record<(typeof FILTERS)[number], LucideIcon> = {
  All: LayoutGrid,
  Hubs: Compass,
  Spawns: Home,
  Survival: Mountain,
  Fantasy: Sparkles,
  Medieval: Shield,
  Modern: Building2,
  Maps: Map,
  Faction: Swords,
};

type SortOption = "latest" | "name" | "featured";

const SORT_LABELS: Record<SortOption, string> = {
  latest: "Latest",
  name: "Name (A–Z)",
  featured: "Featured First",
};

function sortProjects(projects: Project[], sort: SortOption): Project[] {
  const copy = [...projects];
  if (sort === "name") return copy.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "featured") return copy.sort((a, b) => Number(b.featured) - Number(a.featured));
  return copy; // "latest" — original/insertion order
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const [sort, setSort] = useState<SortOption>("latest");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    const base =
      active === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(active as ProjectCategory));
    return sortProjects(base, sort);
  }, [active, sort, projects]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const Icon = FILTER_ICONS[filter];
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === filter
                    ? "border-accent-500/60 bg-accent-500/15 text-accent-200"
                    : "border-white/10 text-white/60 hover:border-white/25 hover:text-white/90"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {filter}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 outline-none transition-colors hover:border-white/25 focus:border-accent-500/60"
          >
            {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
              <option key={key} value={key} className="bg-ink-900 text-white">
                {SORT_LABELS[key]}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-1 rounded-full border border-white/10 p-1">
            <button
              type="button"
              onClick={() => setView("grid")}
              aria-pressed={view === "grid"}
              aria-label="Grid view"
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                view === "grid" ? "bg-accent-500/20 text-accent-200" : "text-white/50 hover:text-white/80"
              )}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setView("list")}
              aria-pressed={view === "list"}
              aria-label="List view"
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                view === "list" ? "bg-accent-500/20 text-accent-200" : "text-white/50 hover:text-white/80"
              )}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <motion.div
        layout
        className={
          view === "grid"
            ? "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "mt-8 flex flex-col gap-5"
        }
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) =>
            view === "grid" ? (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ) : (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectListRow project={project} />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-white/50">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
