import type { Metadata } from "next";
import { Gem, Sparkles, ShieldCheck, Clock } from "lucide-react";
import Button from "@/components/shared/Button";
import PageBanner from "@/components/shared/PageBanner";

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Alysium Builds est un studio de création Minecraft spécialisé dans des mondes originaux, de haute qualité, prêts pour le serveur.",
};

const VALUES = [
  { icon: Sparkles, title: "Toujours original", desc: "Chaque build part d'une page blanche — pas de templates, pas d'assets réutilisés." },
  { icon: ShieldCheck, title: "Construit pour durer", desc: "Des builds optimisés et adaptés aux serveurs, qui tiennent la charge en conditions réelles." },
  { icon: Clock, title: "Livraison fiable", desc: "Des délais clairs et une communication transparente, du premier message à la livraison finale." },
];

export default function AboutPage() {
  return (
    <div className="pb-28">
      <PageBanner
        image="/images/banner-about.png"
        eyebrow="À Propos d'Alysium Builds"
        title="On construit des mondes, pas juste des structures."
        subtitle="Alysium Builds est né d'une frustration simple : trop de builds Minecraft ressemblent à de la décoration, pas à un vrai lieu."
      />

      <div className="container-page mt-14 max-w-3xl">
        <p className="text-white/60">
          On voulait construire des espaces pensés depuis le terrain — où
          la lumière, l&apos;échelle et le détail travaillent ensemble au
          lieu d&apos;être ajoutés à la fin.
        </p>
        <p className="mt-4 text-white/60">
          Aujourd&apos;hui, on travaille avec des propriétaires de
          serveurs, des réseaux et des créateurs qui recherchent ce même
          niveau d&apos;exigence — en construisant des spawns, des hubs,
          des mondes survie et des environnements entièrement sur mesure,
          aussi fonctionnels que beaux.
        </p>

        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-accent-500/20 bg-accent-500/5 p-6">
          <Gem className="h-6 w-6 shrink-0 text-accent-400" />
          <p className="font-display text-lg text-white/90">
            &ldquo;La qualité n&apos;est pas une phase du projet. C&apos;est le
            projet tout entier.&rdquo;
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
              Envie de travailler ensemble ?
            </h3>
            <p className="mt-1 text-sm text-white/55">
              Explore notre portfolio ou contacte-nous pour discuter de ton
              projet.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/portfolio" variant="secondary">
              Voir le Portfolio
            </Button>
            <Button href="/contact" showArrow>
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
