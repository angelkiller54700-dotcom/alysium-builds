import { Gem, Sparkles, ShieldCheck, Gauge } from "lucide-react";
import Button from "@/components/shared/Button";

const BENEFITS = [
  { icon: Sparkles, label: "100% Original Builds" },
  { icon: Gauge, label: "Optimized & Server Friendly" },
  { icon: ShieldCheck, label: "Detailed & High Quality" },
];

export default function CustomBuildsCTA() {
  return (
    <section className="container-page py-10 sm:py-14">
      <div className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr_auto]">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-700 shadow-glow">
            <Gem className="h-8 w-8 text-white" />
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              CUSTOM BUILDS,{" "}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
                TAILORED TO YOUR VISION
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
              Need something unique? We create custom builds, maps, and
              server environments specifically for your community or
              project.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {BENEFITS.map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-sm text-white/70">
                  <b.icon className="h-4 w-4 text-accent-400" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 lg:items-end">
            <Button href="/custom-builds" showArrow>
              Order a Custom Build
            </Button>
            <span className="text-xs text-white/40">Let&apos;s bring your ideas to life.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
