import type { Metadata } from "next";
import { Info } from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
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
    <div>
      <PageBanner
        image="/images/banner-resources.png"
        eyebrow="Resources"
        title="Ready-to-use Minecraft assets."
        subtitle="Spawns, schematics, building packs, maps, and more — built to the same premium standard as our custom work."
      />

      <div className="container-page pb-28 pt-14">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <Info className="h-3.5 w-3.5" />
          Every product links out to our BuiltByBit storefront for secure checkout.
        </div>

        <div className="mt-8">
          <ResourcesGrid resources={resources} />
        </div>
      </div>
    </div>
  );
}
