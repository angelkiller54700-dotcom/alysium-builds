import type { Metadata } from "next";
import PortfolioGrid from "@/components/shared/PortfolioGrid";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse premium Minecraft builds by Alysium Builds — hubs, spawns, survival worlds, fantasy castles, and custom maps.",
};

export default function PortfolioPage() {
  const projects = getProjects();

  return (
    <div className="container-page pb-28 pt-36 sm:pt-40">
      <div className="eyebrow w-fit rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
        Portfolio
      </div>
      <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
        Builds worth exploring.
      </h1>
      <p className="mt-4 max-w-xl text-white/55">
        A curated selection of hubs, spawns, survival worlds, and custom
        maps — each one built from the ground up, with no templates or
        shortcuts.
      </p>

      <div className="mt-12">
        <PortfolioGrid projects={projects} />
      </div>
    </div>
  );
}
