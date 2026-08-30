import { Package2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductCard from "@/components/shared/ProductCard";
import { getFeaturedResources } from "@/lib/content";

export default function ResourcesPreview() {
  const featuredResources = getFeaturedResources();

  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        icon={Package2}
        eyebrow="Ressources / Boutique"
        viewAllHref="/resources"
        viewAllLabel="Voir tous les produits"
      />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredResources.map((resource) => (
          <ProductCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </section>
  );
}
