import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PlaceholderScene from "./PlaceholderScene";
import type { Project } from "@/data/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group glass-card flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <PlaceholderScene seed={project.seed} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
        )}
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
          {project.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold text-white">
          {project.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent-300 transition-colors group-hover:text-accent-200">
          View Project
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
