import Link from "next/link";
import {
  Gem,
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
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Resources" },
  { href: "/custom-builds", label: "Custom Builds" },
  { href: "/about", label: "About" },
];

const SHOP_LINKS = [
  { href: "/resources", label: "Schematics" },
  { href: "/resources", label: "Building Packs" },
  { href: "/resources", label: "Maps" },
  { href: "/resources", label: "All Products" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="container-page grid grid-cols-1 gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-700">
              <Gem className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold text-white">
              ALYSIUM BUILDS
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Premium Minecraft builds and custom maps for servers,
            communities, and creators.
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
            Quick Links
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
            Shop
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
            Get In Touch
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
                discord.gg/alysiumbuilds
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
              Typically replies within 24h
            </li>
          </ul>

          <div className="relative mt-6 hidden h-24 w-full overflow-hidden rounded-xl sm:block">
            <PlaceholderScene seed={42} className="h-full w-full opacity-80" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Alysium Builds. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white/70">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white/70">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
