import type { Metadata } from "next";
import { MessageCircle, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import PageBanner from "@/components/shared/PageBanner";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacte Alysium Builds pour discuter d'un build Minecraft sur mesure ou pour toute question sur nos ressources.",
};

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        image="/images/banner-contact.png"
        eyebrow="Contact"
        title="Parlons de ton projet."
        subtitle="Remplis le formulaire avec un maximum de détails — ça nous aide à évaluer ton projet précisément et à te répondre plus vite."
      />

      <div className="container-page pb-28 pt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        <ContactForm />

        <div className="space-y-4">
          <div className="glass-panel rounded-2xl p-6">
            <MessageCircle className="h-5 w-5 text-accent-400" />
            <h3 className="mt-3 text-sm font-semibold text-white">Discord</h3>
            <p className="mt-1 text-sm text-white/50">
              Le moyen le plus rapide de nous joindre — rejoins la
              communauté et ouvre un ticket.
            </p>
            <a
              href={SITE.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-3"
            >
              Rejoindre le Discord
            </a>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <Mail className="h-5 w-5 text-accent-400" />
            <h3 className="mt-3 text-sm font-semibold text-white">Email</h3>
            <p className="mt-1 text-sm text-white/50">
              Tu préfères l&apos;email ? Envoie-nous les détails directement.
            </p>
            <a href={`mailto:${SITE.email}`} className="btn-ghost mt-3">
              {SITE.email}
            </a>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <Clock className="h-5 w-5 text-accent-400" />
            <h3 className="mt-3 text-sm font-semibold text-white">Délai de Réponse</h3>
            <p className="mt-1 text-sm text-white/50">
              On répond généralement sous 24 heures, tous les jours de la
              semaine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
