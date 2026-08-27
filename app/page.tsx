import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ResourcesPreview from "@/components/home/ResourcesPreview";
import CustomBuildsCTA from "@/components/home/CustomBuildsCTA";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ResourcesPreview />
      <CustomBuildsCTA />
      <Testimonials />
    </>
  );
}
