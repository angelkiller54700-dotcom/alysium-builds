import type { Metadata } from "next";
import ReviewForm from "@/components/shared/ReviewForm";

export const metadata: Metadata = {
  title: "Leave a Review",
  description:
    "Worked with Alysium Builds? Share your experience — we'd love to hear from you.",
};

export default function LeaveAReviewPage() {
  return (
    <div className="container-page max-w-2xl pb-28 pt-36 sm:pt-40">
      <div className="eyebrow w-fit rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
        Leave a Review
      </div>
      <h1 className="mt-5 font-display text-4xl font-bold text-white sm:text-5xl">
        How was your experience?
      </h1>
      <p className="mt-4 text-white/55">
        Commissioned a build or grabbed one of our resources? We&apos;d love
        to hear how it went — your review might be featured on the site.
      </p>

      <div className="mt-10">
        <ReviewForm />
      </div>
    </div>
  );
}
