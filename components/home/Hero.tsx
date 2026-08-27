"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Package, Sparkles } from "lucide-react";
import Button from "@/components/shared/Button";

/**
 * Signature scroll rig: the section is 220vh tall, the visual scene is
 * `sticky` inside it, and scroll progress across that range drives a light
 * zoom + pan on the hero image plus a fade on the hero copy — the "walking
 * into the world" effect from the brief.
 *
 * Swap /public/images/hero.png for a different shot any time — no code
 * changes needed, the effect is driven entirely by the transforms below.
 */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const fogOpacity = useTransform(scrollYProgress, [0, 0.7], [0.15, 0.6]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.65]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.32], [0, -90]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink-950">
        {/* Hero image — zoom + pan on scroll */}
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero.png"
            alt="Alysium Builds — a fantasy Minecraft castle at sunset, surrounded by floating islands"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* Violet fog, for depth + brand continuity */}
        <motion.div
          style={{ opacity: fogOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent-600/50 via-accent-500/10 to-transparent"
        />

        {/* Vignette for readability + depth */}
        <motion.div
          style={{ opacity: vignetteOpacity }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050308_105%)]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="container-page relative flex h-full flex-col justify-center"
        >
          <div className="eyebrow mb-6 w-fit rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Premium. Professional. Immersive.
          </div>

          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            PREMIUM
            <br />
            <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-600 bg-clip-text text-transparent">
              MINECRAFT
            </span>
            <br />
            BUILDS
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
            Custom maps, extraordinary worlds, and premium Minecraft
            creations built to elevate your server and community.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/portfolio" showArrow>
              View Portfolio
            </Button>
            <Button href="/custom-builds" variant="secondary" icon={<Package className="h-4 w-4" />}>
              Order a Custom Build
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Signature badge, bottom-right */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="glass-panel absolute bottom-28 right-6 hidden max-w-[190px] animate-float rounded-2xl p-4 sm:right-10 lg:block"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Built for</p>
          <p className="font-display text-sm font-semibold leading-tight text-white">
            Passion
            <br />
            Performance
            <br />
            People
          </p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40">
            Scroll to Explore
          </span>
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-400" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
