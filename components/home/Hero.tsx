"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Package, Sparkles } from "lucide-react";
import Button from "@/components/shared/Button";

/**
 * Signature scroll rig: the section is 220vh tall, the visual scene is
 * `sticky` inside it, and scroll progress across that range drives a light
 * zoom + per-layer parallax (each layer moves at its own rate) plus a fade
 * on the hero copy — the "walking into the world" effect from the brief.
 */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const islandsY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const islandsScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const castleY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const castleScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const fogOpacity = useTransform(scrollYProgress, [0, 0.7], [0.25, 0.75]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);

  const textOpacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.32], [0, -90]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-ink-950">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0818] via-[#160e2b] to-ink-950" />

        {/* Layer 1 — sky, stars, moon (slowest) */}
        <motion.div style={{ scale: skyScale }} className="absolute inset-0">
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            <defs>
              <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e9d9ff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e9d9ff" stopOpacity="0" />
              </radialGradient>
            </defs>
            {Array.from({ length: 60 }).map((_, i) => {
              const x = (i * 137) % 1600;
              const y = (i * 73) % 420;
              const r = 0.6 + ((i * 17) % 10) / 10;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={r}
                  fill="white"
                  className="animate-twinkle"
                  style={{ animationDelay: `${i % 5}s` }}
                />
              );
            })}
            <circle cx="1220" cy="180" r="150" fill="url(#moonGlow)" />
            <circle cx="1220" cy="180" r="58" fill="#f3ecff" />
          </svg>
        </motion.div>

        {/* Layer 2 — floating islands (mid-back) */}
        <motion.div
          style={{ y: islandsY, scale: islandsScale }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
            {[
              { x: 180, y: 190, s: 1 },
              { x: 430, y: 120, s: 0.7 },
              { x: 1000, y: 260, s: 0.8 },
              { x: 1380, y: 350, s: 0.6 },
            ].map((isl, i) => (
              <g key={i} opacity="0.75" transform={`translate(${isl.x} ${isl.y}) scale(${isl.s})`}>
                <polygon points="0,0 90,0 70,34 20,34" fill="#241a3d" />
                <rect x="30" y="34" width="12" height="26" fill="#241a3d" opacity="0.6" />
                <polygon points="26,-26 44,-26 40,0 30,0" fill="#2f2350" />
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Layer 3 — castle skyline (main focal layer) */}
        <motion.div
          style={{ y: castleY, scale: castleScale }}
          className="absolute inset-0"
        >
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="absolute bottom-0 h-[80%] w-full"
          >
            <g fill="#0c0816">
              {Array.from({ length: 22 }).map((_, i) => {
                const x = i * 76;
                const h = 120 + ((i * 53) % 5) * 40;
                const tower = i % 3 === 0;
                return (
                  <g key={i}>
                    <rect x={x} y={480 - h} width="60" height={h} />
                    {tower && (
                      <polygon
                        points={`${x - 4},${480 - h} ${x + 30},${480 - h - 50} ${x + 64},${480 - h}`}
                      />
                    )}
                    {tower && (
                      <rect x={x + 28} y={480 - h - 66} width="3" height="18" fill="#a78bfa" opacity="0.7" />
                    )}
                  </g>
                );
              })}
            </g>
            {/* window glow */}
            <g fill="#c4b5fd">
              {Array.from({ length: 40 }).map((_, i) => (
                <rect
                  key={i}
                  x={40 + ((i * 71) % 1500)}
                  y={330 + ((i * 47) % 130)}
                  width="4"
                  height="6"
                  opacity={0.5 + ((i * 13) % 5) / 10}
                />
              ))}
            </g>
          </svg>
        </motion.div>

        {/* Layer 4 — foreground cliffs + fog (fastest) */}
        <motion.div style={{ y: fgY }} className="absolute inset-0">
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="absolute bottom-0 h-[45%] w-full"
          >
            <polygon points="0,900 0,700 260,760 520,650 900,780 1250,660 1600,760 1600,900" fill="#050308" />
          </svg>
          <motion.div
            style={{ opacity: fogOpacity }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent-600/40 via-accent-500/10 to-transparent"
          />
        </motion.div>

        {/* Vignette for depth */}
        <motion.div
          style={{ opacity: vignetteOpacity }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#050308_100%)]"
        />
        <div className="pointer-events-none absolute inset-0 bg-grid-glow bg-[size:48px_48px] opacity-[0.15]" />

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
