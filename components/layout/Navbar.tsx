"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Gem, Menu, MessageCircle, X } from "lucide-react";
import { cn, SITE } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Resources" },
  { href: "/custom-builds", label: "Custom Builds" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent-400 to-accent-700 shadow-glow-sm">
            <Gem className="h-5 w-5 text-white" />
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-white">
            ALYSIUM <span className="text-accent-300">BUILDS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium uppercase tracking-wide transition-colors",
                  active ? "text-white" : "text-white/55 hover:text-white/90"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-accent-400 to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={SITE.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !border-accent-500/40"
          >
            <MessageCircle className="h-4 w-4" />
            Join our Discord
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                Join our Discord
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
