import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
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
    <div>
      <PortfolioHero />

      <div className="container-page pb-28 pt-14">
        <PortfolioGrid projects={projects} />
      </div>
    </div>
  );
}
