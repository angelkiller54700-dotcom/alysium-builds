import type { Metadata } from "next";
import { Info } from "lucide-react";
import PageBanner from "@/components/shared/PageBanner";
import ResourcesGrid from "@/components/shared/ResourcesGrid";
import { getResources } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ressources",
  description:
    "Spawns, schematics, packs de construction, maps, terrains et décorations Minecraft premium — disponibles sur BuiltByBit.",
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <div>
      <PageBanner
        image="/images/banner-resources.png"
        eyebrow="Ressources"
        title="Des assets Minecraft prêts à l'emploi."
        subtitle="Spawns, schematics, packs de construction, maps, et plus — conçus avec le même niveau d'exigence que nos créations sur mesure."
      />

      <div className="container-page pb-28 pt-14">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <Info className="h-3.5 w-3.5" />
          Chaque produit renvoie vers notre boutique BuiltByBit pour un paiement sécurisé.
        </div>

        <div className="mt-8">
          <ResourcesGrid resources={resources} />
        </div>
      </div>
    </div>
  );
}
