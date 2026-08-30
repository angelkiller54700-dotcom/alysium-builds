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
  title: "Sur Mesure",
  description:
    "Commande un build Minecraft entièrement sur mesure — spawns, hubs, maps et environnements de serveur complets, pensés pour ta vision.",
};

const PROCESS = [
  { icon: MessageSquare, title: "Partage-nous ta vision", desc: "Décris tes idées, tes références et tes objectifs pour le build." },
  { icon: FileText, title: "Devis & planification", desc: "On cadre le projet et on se met d'accord sur le prix, le style et le délai." },
  { icon: Hammer, title: "Construction", desc: "Ton build prend forme, avec des points d'avancement réguliers." },
  { icon: RefreshCw, title: "Révisions", desc: "On affine les détails jusqu'à ce que ça corresponde exactement à ta vision." },
  { icon: PackageCheck, title: "Livraison", desc: "Tu reçois le monde ou le schematic terminé, prêt à l'emploi." },
];

const SERVICES = [
  { icon: Compass, title: "Spawn", desc: "Une première impression marquante pour tes nouveaux joueurs." },
  { icon: Landmark, title: "Hub", desc: "Un cœur central et navigable pour ton réseau." },
  { icon: Globe2, title: "Map Sur Mesure", desc: "Un terrain sculpté à la main autour de ton thème." },
  { icon: Building2, title: "Bâtiments", desc: "Des structures individuelles, intérieurs inclus." },
  { icon: Server, title: "Environnement de Serveur Complet", desc: "Un monde entier construit de A à Z." },
];

const TIERS = [
  { range: "50 € – 150 €", label: "Petit build", desc: "Une structure unique ou une petite zone de spawn." },
  { range: "150 € – 400 €", label: "Projet moyenne échelle", desc: "Un hub détaillé, une ville, ou une map de taille moyenne." },
  { range: "400 €+", label: "Environnement complet", desc: "Grandes maps, mondes de serveur complets, ou travail continu." },
];

export default function CustomBuildsPage() {
  return (
    <div className="pb-28">
      <PageBanner
        image="/images/banner-custom-builds.png"
        eyebrow="Sur Mesure"
        title="Entièrement pensé autour de ta vision."
        subtitle="Chaque serveur est différent. Nous concevons et construisons des environnements Minecraft sur mesure à partir de zéro — sans templates, sans raccourcis — adaptés à ton thème, ton échelle et ton gameplay."
      >
        <div className="mt-8">
          <Button href="/contact" showArrow>
            Commander un Build Sur Mesure
          </Button>
        </div>
      </PageBanner>

      {/* Services */}
      <div className="container-page mt-24">
        <h2 className="font-display text-2xl font-bold text-white">Ce que nous construisons</h2>
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
        <h2 className="font-display text-2xl font-bold text-white">Notre processus</h2>
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
        <h2 className="font-display text-2xl font-bold text-white">Tarifs indicatifs</h2>
        <p className="mt-2 max-w-xl text-sm text-white/50">
          Chaque projet est chiffré individuellement — ces fourchettes
          donnent juste un ordre de grandeur avant qu&apos;on parle des détails.
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
              Prêt à donner vie à ton idée ?
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Parle-nous de ton projet, on te répond sous 24 heures.
            </p>
          </div>
          <Button href="/contact" showArrow>
            Commander un Build Sur Mesure
          </Button>
        </div>
      </div>
    </div>
  );
}
