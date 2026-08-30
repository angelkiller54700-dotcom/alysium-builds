"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Bookmark } from "lucide-react";
import PlaceholderScene from "./PlaceholderScene";
import { useBookmarks } from "@/lib/useBookmarks";
import type { Project } from "@/data/types";

export default function ProjectCard({ project }: { project: Project }) {
  const { isBookmarked, toggle } = useBookmarks();
  const saved = isBookmarked(project.slug);

  return (
    <div className="group glass-card relative flex flex-col overflow-hidden">
      <Link href={`/portfolio/${project.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden">
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
      </Link>

      <button
        type="button"
        onClick={() => toggle(project.slug)}
        aria-pressed={saved}
        aria-label={saved ? `Retirer ${project.name} des favoris` : `Ajouter ${project.name} aux favoris`}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur-sm transition-colors hover:border-accent-400/60 hover:text-accent-300"
      >
        <Bookmark className={saved ? "h-3.5 w-3.5 fill-accent-400 text-accent-400" : "h-3.5 w-3.5"} />
      </button>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <Link href={`/portfolio/${project.slug}`}>
          <h3 className="font-display text-lg font-semibold text-white transition-colors hover:text-accent-200">
            {project.name}
          </h3>
        </Link>
        <p className="flex-1 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>

        <div className="mt-2 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
          <span className="text-xs text-white/40">
            {project.size} <span className="mx-1">•</span> {project.version}
          </span>
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-accent-500/40 bg-accent-500/10 px-3 py-1.5 text-xs font-semibold text-accent-200 transition-colors hover:bg-accent-500/20"
          >
            Voir le Projet
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
