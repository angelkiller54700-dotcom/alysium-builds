import type { Metadata } from "next";
import { Info } from "lucide-react";
import ResourcesGrid from "@/components/shared/ResourcesGrid";
import { getResources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Premium Minecraft spawns, schematics, building packs, maps, terrain, and decorations — available on BuiltByBit.",
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <div className="container-page pb-28 pt-36 sm:pt-40">
      <div className="eyebrow w-fit rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
        Resources
      </div>
      <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
        Ready-to-use Minecraft assets.
      </h1>
      <p className="mt-4 max-w-xl text-white/55">
        Spawns, schematics, building packs, maps, and more — built to the
        same premium standard as our custom work.
      </p>

      <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
        <Info className="h-3.5 w-3.5" />
        Every product links out to our BuiltByBit storefront for secure checkout.
      </div>

      <div className="mt-10">
        <ResourcesGrid resources={resources} />
      </div>
    </div>
  );
}
