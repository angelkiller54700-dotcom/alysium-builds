import Image from "next/image";
import type { ReactNode } from "react";

type PageBannerProps = {
  image: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
};

/**
 * Shared banner header for interior pages (Resources, Custom Builds, About,
 * Contact) — same visual language as the Portfolio page's hero, just
 * without the stats row. Swap the `image` prop to change the wallpaper.
 */
export default function PageBanner({ image, eyebrow, title, subtitle, children }: PageBannerProps) {
  return (
    <section className="relative h-[360px] w-full overflow-hidden sm:h-[420px] lg:h-[460px]">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/75 to-ink-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

      <div className="container-page relative flex h-full flex-col justify-center pt-24">
        <div className="eyebrow w-fit rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
          {eyebrow}
        </div>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-lg text-white/60">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
