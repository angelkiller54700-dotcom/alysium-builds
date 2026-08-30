import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Gamepad2,
  Layers,
  Ruler,
  Blocks,
  DoorOpen,
  Mountain,
  Wrench,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import PlaceholderScene from "@/components/shared/PlaceholderScene";
import Button from "@/components/shared/Button";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { SITE } from "@/lib/utils";

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const info = [
    { icon: Gamepad2, label: "Game", value: project.game },
    { icon: Layers, label: "Type", value: project.type },
    { icon: Ruler, label: "Size", value: project.size },
    { icon: Blocks, label: "Version", value: project.version },
    { icon: DoorOpen, label: "Interiors", value: project.interiors ? "Included" : "Not included" },
    { icon: Mountain, label: "Custom Terrain", value: project.customTerrain ? "Yes" : "No" },
    { icon: Wrench, label: "Tools Used", value: project.toolsUsed.join(", ") },
  ];

  return (
    <div className="pb-28 pt-24">
      {/* Project hero */}
      <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        {project.image ? (
          <Image src={project.image} alt={project.name} fill className="object-cover" priority />
        ) : (
          <PlaceholderScene seed={project.seed} className="h-full w-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
        <div className="container-page absolute inset-x-0 bottom-8">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70 backdrop-blur-sm"
              >
                {c}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            {project.name}
          </h1>
        </div>
      </div>

      <div className="container-page mt-14">
        <p className="max-w-2xl text-white/60">{project.longDescription}</p>

        {/* Info grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {info.map((item) => (
            <div key={item.label} className="glass-panel rounded-xl p-4">
              <item.icon className="h-4 w-4 text-accent-400" />
              <p className="mt-2 text-[11px] uppercase tracking-wide text-white/40">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm font-medium text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl font-semibold text-white">Gallery</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div key={src} className="glass-card overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={src}
                      alt={`${project.name} — screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                      Screenshot {i + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="glass-panel mt-16 flex flex-col items-start gap-5 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Like what you see?
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Grab this build if it&apos;s available, or commission something
              built entirely around your vision.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {project.resourceLink && (
              <Button href={project.resourceLink} external icon={<ShoppingBag className="h-4 w-4" />}>
                Buy on BuiltByBit
              </Button>
            )}
            <Button href="/custom-builds" variant="secondary">
              Request a Custom Build
            </Button>
            <Button href={SITE.discord} external variant="ghost" icon={<MessageCircle className="h-4 w-4" />}>
              Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
