import { Compass } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { getFeaturedProjects } from "@/lib/content";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        icon={Compass}
        eyebrow="Projets Phares"
        viewAllHref="/portfolio"
        viewAllLabel="Voir tous les projets"
      />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
