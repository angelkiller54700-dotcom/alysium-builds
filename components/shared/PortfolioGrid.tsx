"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";
import { projectCategories, type Project, type ProjectCategory } from "@/data/types";

const FILTERS: ("All" | ProjectCategory)[] = ["All", ...projectCategories];

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active as ProjectCategory));
  }, [active, projects]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === filter
                ? "border-accent-500/60 bg-accent-500/15 text-accent-200"
                : "border-white/10 text-white/60 hover:border-white/25 hover:text-white/90"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
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
          ))}
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
