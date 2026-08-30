import type { Metadata } from "next";
import {
  MessageSquare,
  FileText,
  Hammer,
  RefreshCw,
  PackageCheck,
  Landmark,
  Globe2,
  Building2,
  Server,
  Compass,
} from "lucide-react";
import Button from "@/components/shared/Button";
import PageBanner from "@/components/shared/PageBanner";

export const metadata: Metadata = {
  title: "Custom Builds",
  description:
    "Commission a fully custom Minecraft build — spawns, hubs, maps, and full server environments, tailored to your vision.",
};

const PROCESS = [
  { icon: MessageSquare, title: "Tell us your vision", desc: "Share your ideas, references, and goals for the build." },
  { icon: FileText, title: "Quote & planning", desc: "We scope the project and agree on price, style, and timeline." },
  { icon: Hammer, title: "Building", desc: "Your build takes shape, with progress updates along the way." },
  { icon: RefreshCw, title: "Revisions", desc: "We fine-tune details until it matches your vision exactly." },
  { icon: PackageCheck, title: "Delivery", desc: "You receive the finished world or schematic, ready to use." },
];

const SERVICES = [
  { icon: Compass, title: "Spawn", desc: "A striking first impression for new players." },
  { icon: Landmark, title: "Hub", desc: "A central, navigable core for your network." },
  { icon: Globe2, title: "Custom Map", desc: "Hand-sculpted terrain built around your theme." },
  { icon: Building2, title: "Buildings", desc: "Individual structures, interiors included." },
  { icon: Server, title: "Full Server Environment", desc: "A complete world built end-to-end." },
];

const TIERS = [
  { range: "$50 – $150", label: "Small build", desc: "A single structure or small spawn area." },
  { range: "$150 – $400", label: "Mid-scale project", desc: "A detailed hub, town, or medium map." },
  { range: "$400+", label: "Full environment", desc: "Large maps, full server worlds, or ongoing work." },
];

export default function CustomBuildsPage() {
  return (
    <div className="pb-28">
      <PageBanner
        image="/images/banner-custom-builds.png"
        eyebrow="Custom Builds"
        title="Built entirely around your vision."
        subtitle="Every server is different. We design and build custom Minecraft environments from scratch — no templates, no shortcuts — matched to your theme, scale, and gameplay."
      >
        <div className="mt-8">
          <Button href="/contact" showArrow>
            Request a Custom Build
          </Button>
        </div>
      </PageBanner>

      {/* Services */}
      <div className="container-page mt-24">
        <h2 className="font-display text-2xl font-bold text-white">What we build</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="glass-card p-5">
              <s.icon className="h-5 w-5 text-accent-400" />
              <h3 className="mt-3 font-display text-sm font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="container-page mt-24">
        <h2 className="font-display text-2xl font-bold text-white">Our process</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step, i) => (
            <div key={step.title} className="glass-card relative p-5">
              <span className="font-display text-xs font-bold text-accent-500/60">
                0{i + 1}
              </span>
              <step.icon className="mt-3 h-5 w-5 text-accent-400" />
              <h3 className="mt-3 font-display text-sm font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/50">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="container-page mt-24">
        <h2 className="font-display text-2xl font-bold text-white">Indicative pricing</h2>
        <p className="mt-2 max-w-xl text-sm text-white/50">
          Every project is quoted individually — these ranges give a rough
          sense of scale before we talk specifics.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TIERS.map((tier) => (
            <div key={tier.label} className="glass-card p-6">
              <p className="font-display text-2xl font-bold text-accent-300">{tier.range}</p>
              <p className="mt-2 text-sm font-semibold text-white">{tier.label}</p>
              <p className="mt-1 text-xs text-white/50">{tier.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="container-page mt-24">
        <div className="glass-panel flex flex-col items-start gap-5 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Ready to bring your idea to life?
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <Button href="/contact" showArrow>
            Request a Custom Build
          </Button>
        </div>
      </div>
    </div>
  );
}
