"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Package, Sparkles } from "lucide-react";
import Button from "@/components/shared/Button";

/** Deterministic PRNG so light positions match between server and client render. */
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Scattered flickering lights over the castle windows (as a % of the hero box),
// plus the visible foreground lanterns pinned to their actual spots in hero.png.
// Tweak the hand-placed lantern coordinates if you swap in a different image.
const rand = mulberry32(1337);
const castleLights = Array.from({ length: 26 }, () => ({
  x: 47 + rand() * 48,
  y: 12 + rand() * 42,
  size: 2 + rand() * 2.5,
  duration: 2 + rand() * 3,
  delay: rand() * 5,
}));
const lanternLights = [
  { x: 11, y: 71, size: 7 },
  { x: 24, y: 79, size: 6 },
  { x: 54, y: 90, size: 6 },
  { x: 63, y: 86, size: 5 },
  { x: 88, y: 74, size: 6 },
].map((l, i) => ({ ...l, duration: 2.6 + (i % 3) * 0.6, delay: i * 0.7 }));
const allLights = [...castleLights, ...lanternLights];

// Floating island cutouts (public/images/island-*.png), each with its own
// float speed/delay so they don't all bob in sync. Tweak x/y/width to
// reposition — they're placed inside the same layer as the hero image so
// they zoom/pan together with it on scroll.
const floatingIslands = [
  { src: "/images/island-1.png", x: 29, y: -2, width: 16, duration: 7, delay: 0 },
  { src: "/images/island-2.png", x: 1, y: 6, width: 13, duration: 8.5, delay: 1.2 },
  // Repositioned to sit near the "U" of "PREMIUM" in the headline, behind the text.
  { src: "/images/island-3.png", x: 27, y: 29, width: 11, duration: 6.5, delay: 0.6 },
  // island-4 (far top-right) removed per feedback — felt redundant/cut off at the edge.
];

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
        {/* Hero image + its overlays — all zoom/pan together on scroll */}
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

          {/* Distant floating islands — gentle up/down float, each at its own pace */}
          {floatingIslands.map((island) => (
            <div
              key={island.src}
              className="animate-float absolute"
              style={{
                left: `${island.x}%`,
                top: `${island.y}%`,
                width: `${island.width}%`,
                animationDuration: `${island.duration}s`,
                animationDelay: `${island.delay}s`,
              }}
            >
              <Image
                src={island.src}
                alt=""
                width={1254}
                height={1254}
                className="h-auto w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.5)]"
              />
            </div>
          ))}

          {/* Zeppelin — gentle levitation in place, same as the islands */}
          <div
            className="animate-float absolute left-0 top-[19%] w-[22%]"
            style={{ animationDuration: "8s", animationDelay: "0.4s" }}
          >
            <Image
              src="/images/zeppelin.png"
              alt="Airship hovering over Alysium Builds"
              width={1254}
              height={1254}
              className="h-auto w-full drop-shadow-[0_14px_24px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Drifting cloud haze — subtle atmospheric motion over the sky */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[2%] top-0 h-[38%] w-[50%] animate-drift rounded-full bg-orange-200/10 blur-3xl" />
            <div className="absolute right-[8%] top-[3%] h-[30%] w-[38%] animate-drift-slow rounded-full bg-violet-200/10 blur-3xl" />
            <div
              className="absolute left-[30%] top-0 h-[24%] w-[32%] animate-drift rounded-full bg-white/5 blur-2xl"
              style={{ animationDelay: "7s" }}
            />
          </div>

          {/* Flickering lights — castle windows + foreground lanterns */}
          <div className="pointer-events-none absolute inset-0">
            {allLights.map((light, i) => (
              <span
                key={i}
                className="absolute animate-twinkle rounded-full bg-amber-300"
                style={{
                  left: `${light.x}%`,
                  top: `${light.y}%`,
                  width: light.size,
                  height: light.size,
                  boxShadow: `0 0 ${light.size * 3}px ${light.size * 0.8}px rgba(251,191,36,0.5)`,
                  animationDuration: `${light.duration}s`,
                  animationDelay: `${light.delay}s`,
                }}
              />
            ))}
          </div>
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
