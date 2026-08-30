import type { Metadata } from "next";
import ReviewForm from "@/components/shared/ReviewForm";

export const metadata: Metadata = {
  title: "Laisser un Avis",
  description:
    "Tu as travaillé avec Alysium Builds ? Partage ton expérience — on aimerait beaucoup avoir ton retour.",
};

export default function LeaveAReviewPage() {
  return (
    <div className="container-page max-w-2xl pb-28 pt-36 sm:pt-40">
      <div className="eyebrow w-fit rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
        Laisser un Avis
      </div>
      <h1 className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">
        Comment s&apos;est passée ton expérience ?
      </h1>
      <p className="mt-4 text-white/55">
        Tu as commandé un build ou récupéré une de nos ressources ? On
        aimerait savoir comment ça s&apos;est passé — ton avis pourrait être
        mis en avant sur le site.
      </p>

      <div className="mt-10">
        <ReviewForm />
      </div>
    </div>
  );
}
