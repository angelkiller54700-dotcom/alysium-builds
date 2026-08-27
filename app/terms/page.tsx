import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl pb-28 pt-36 sm:pt-40">
      <h1 className="font-display text-3xl font-bold text-white">Terms of Service</h1>
      <p className="mt-6 text-sm leading-relaxed text-white/55">
        Placeholder terms of service. Replace this page with your actual
        terms covering commissions, delivery, revisions, refunds, and usage
        rights for purchased or commissioned builds before launch.
      </p>
    </div>
  );
}
