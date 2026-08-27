"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ProductCard from "./ProductCard";
import { resourceCategories, type Resource, type ResourceCategory } from "@/data/types";

const FILTERS: ("All" | ResourceCategory)[] = ["All", ...resourceCategories];

export default function ResourcesGrid({ resources }: { resources: Resource[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return resources;
    return resources.filter((r) => r.category === active);
  }, [active, resources]);

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

      <motion.div layout className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((resource) => (
            <motion.div
              key={resource.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard resource={resource} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
