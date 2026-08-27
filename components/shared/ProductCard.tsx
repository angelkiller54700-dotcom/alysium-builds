import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import PlaceholderScene from "./PlaceholderScene";
import type { Resource } from "@/data/types";

export default function ProductCard({ resource }: { resource: Resource }) {
  return (
    <div className="glass-card flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {resource.image ? (
          <Image
            src={resource.image}
            alt={resource.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <PlaceholderScene seed={resource.seed} className="h-full w-full" />
        )}
        <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
          {resource.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <h3 className="font-display text-base font-semibold text-white">
          {resource.name}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-white/55">
          {resource.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-lg font-bold text-accent-300">
            ${resource.price.toFixed(2)}
          </span>
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-accent-400/60 hover:bg-accent-500/10 hover:text-accent-300"
            aria-label={`Buy ${resource.name} on BuiltByBit`}
          >
            <ShoppingCart className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
