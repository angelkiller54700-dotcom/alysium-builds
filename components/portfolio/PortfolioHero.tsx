import Image from "next/image";
import { Boxes, ShieldCheck, Sparkles, Users } from "lucide-react";

const STATS = [
  { icon: Boxes, value: "25+", label: "Projets" },
  { icon: Users, value: "10+", label: "Propriétaires de Serveurs" },
  { icon: Sparkles, value: "500k+", label: "Blocs Placés" },
  { icon: ShieldCheck, value: "100%", label: "Créations Originales" },
];

export default function PortfolioHero() {
  return (
    <section className="relative h-[440px] w-full overflow-hidden sm:h-[500px] lg:h-[560px]">
      <Image
        src="/images/portfolio-wallpaper.png"
        alt="Un château fantastique éclairé par la lune, flottant au-dessus des nuages"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/75 to-ink-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

      <div className="container-page relative flex h-full flex-col justify-center pt-24">
        <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          DES BUILDS
          <br />
          <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-600 bg-clip-text text-transparent">
            À EXPLORER.
          </span>
        </h1>
        <p className="mt-5 max-w-lg text-white/60">
          Une sélection de hubs, spawns, mondes survie et maps sur mesure —
          tous conçus avec soin et passion.
        </p>

        <div className="mt-9 flex flex-wrap gap-x-10 gap-y-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="h-5 w-5 text-accent-400" />
              <div>
                <p className="font-display text-lg font-bold leading-none text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-white/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
