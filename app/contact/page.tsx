import type { Metadata } from "next";
import { MessageCircle, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alysium Builds to discuss a custom Minecraft build or ask about our resources.",
};

export default function ContactPage() {
  return (
    <div className="container-page pb-28 pt-36 sm:pt-40">
      <div className="eyebrow w-fit rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5">
        Contact
      </div>
      <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
        Let&apos;s talk about your project.
      </h1>
      <p className="mt-4 max-w-xl text-white/55">
        Fill out the form with as much detail as you can — it helps us
        scope your project accurately and reply faster.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
        <ContactForm />

        <div className="space-y-4">
          <div className="glass-panel rounded-2xl p-6">
            <MessageCircle className="h-5 w-5 text-accent-400" />
            <h3 className="mt-3 text-sm font-semibold text-white">Discord</h3>
            <p className="mt-1 text-sm text-white/50">
              Fastest way to reach us — join the community and open a ticket.
            </p>
            <a
              href={SITE.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-3"
            >
              Join our Discord
            </a>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <Mail className="h-5 w-5 text-accent-400" />
            <h3 className="mt-3 text-sm font-semibold text-white">Email</h3>
            <p className="mt-1 text-sm text-white/50">
              Prefer email? Send us the details directly.
            </p>
            <a href={`mailto:${SITE.email}`} className="btn-ghost mt-3">
              {SITE.email}
            </a>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <Clock className="h-5 w-5 text-accent-400" />
            <h3 className="mt-3 text-sm font-semibold text-white">Response Time</h3>
            <p className="mt-1 text-sm text-white/50">
              We typically reply within 24 hours, every day of the week.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
