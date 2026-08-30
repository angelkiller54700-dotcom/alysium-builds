import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Mail,
  Instagram,
  Twitter,
  Youtube,
  Clock,
} from "lucide-react";
import PlaceholderScene from "@/components/shared/PlaceholderScene";
import { SITE } from "@/lib/utils";

const QUICK_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Ressources" },
  { href: "/custom-builds", label: "Sur Mesure" },
  { href: "/about", label: "À Propos" },
];

const SHOP_LINKS = [
  { href: "/resources", label: "Schematics" },
  { href: "/resources", label: "Packs de Construction" },
  { href: "/resources", label: "Maps" },
  { href: "/resources", label: "Tous les Produits" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="container-page grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Alysium Builds"
              width={2172}
              height={724}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Builds Minecraft premium et maps sur mesure pour serveurs,
            communautés et créateurs.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={SITE.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={SITE.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-accent-400/60 hover:text-accent-300"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Liens Rapides
          </h4>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-white/60 hover:text-accent-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Boutique
          </h4>
          <ul className="mt-4 space-y-2.5">
            {SHOP_LINKS.map((l, i) => (
              <li key={i}>
                <Link href={l.href} className="text-sm text-white/60 hover:text-accent-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Nous Contacter
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={SITE.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-accent-300"
              >
                <MessageCircle className="h-4 w-4" />
                Rejoindre le Discord
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-accent-300"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-white/40">
              <Clock className="h-4 w-4" />
              Réponse sous 24h en général
            </li>
          </ul>

          <div className="relative mt-6 hidden h-24 w-full overflow-hidden rounded-xl sm:block">
            <PlaceholderScene seed={42} className="h-full w-full opacity-80" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Alysium Builds. Tous droits réservés.</span>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white/70">
              Conditions Générales
            </Link>
            <Link href="/privacy" className="hover:text-white/70">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
