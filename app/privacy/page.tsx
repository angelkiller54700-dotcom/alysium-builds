import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-2xl pb-28 pt-36 sm:pt-40">
      <h1 className="font-display text-3xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-6 text-sm leading-relaxed text-white/55">
        Placeholder privacy policy. Replace this page with details on what
        data the contact form collects, how it&apos;s stored, and how
        visitors can request its removal before launch.
      </p>
    </div>
  );
}
