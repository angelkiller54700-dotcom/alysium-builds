import type { Metadata } from "next";
import { Gem, Sparkles, ShieldCheck, Clock } from "lucide-react";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alysium Builds is a Minecraft build studio focused on original, high-quality, server-ready worlds.",
};

const VALUES = [
  { icon: Sparkles, title: "Original, always", desc: "Every build starts from a blank canvas — no templates, no reused assets." },
  { icon: ShieldCheck, title: "Built to last", desc: "Optimized, server-friendly builds that hold up under real player load." },
  { icon: Clock, title: "Reliable delivery", desc: "Clear timelines and communication from first message to final delivery." },
];

export default function AboutPage() {
  return (
    <div className="pb-28 pt-36 sm:pt-40">
      <div className="container-page max-w-3xl">
        <div className="eyebrow w-fit rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
          About Alysium Builds
        </div>

        <h1 className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">
          We build worlds, not just structures.
        </h1>

        <p className="mt-6 text-white/60">
          Alysium Builds started with a simple frustration: too many
          Minecraft builds look like decoration, not like a place. We wanted
          to build spaces that feel considered from the terrain up — where
          lighting, scale, and detail work together instead of being bolted
          on at the end.
        </p>
        <p className="mt-4 text-white/60">
          Today we work with server owners, networks, and creators who care
          about that same level of craft — building spawns, hubs, survival
          worlds, and fully custom environments that are as functional as
          they are beautiful.
        </p>

        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6">
          <Gem className="h-6 w-6 shrink-0 text-accent-400" />
          <p className="font-display text-lg text-white/90">
            &ldquo;Quality isn&apos;t a phase of the project. It&apos;s the whole project.&rdquo;
          </p>
        </div>
      </div>

      <div className="container-page mt-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="glass-card p-6">
              <v.icon className="h-5 w-5 text-accent-400" />
              <h3 className="mt-3 font-display text-base font-semibold text-white">
                {v.title}
              </h3>
              <p className="mt-1.5 text-sm text-white/50">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page mt-20">
        <div className="glass-panel flex flex-col items-start gap-5 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Want to work together?
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Explore our portfolio or reach out to discuss your project.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/portfolio" variant="secondary">
              View Portfolio
            </Button>
            <Button href="/contact" showArrow>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
