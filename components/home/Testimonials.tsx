import { Star } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { getTestimonials } from "@/lib/content";

export default function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <section className="container-page py-20 sm:py-28">
      <SectionHeading
        icon={Star}
        eyebrow="Ils Nous Font Confiance"
        viewAllHref="/leave-a-review"
        viewAllLabel="Laisser un avis"
      />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="glass-card p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-accent-700 font-display text-sm font-bold text-white">
                {t.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-white/45">{t.role}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              &ldquo;{t.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
