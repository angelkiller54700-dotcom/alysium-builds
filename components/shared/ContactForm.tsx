"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-500/60 focus:bg-white/[0.05]";
const labelClasses = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/50";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: wire this up to a real endpoint (Formspree, Getform, or a Next.js
    // API route that forwards to Discord/email) before going live. For now
    // this just simulates a submission so the form is fully testable in V1.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="glass-panel flex flex-col items-center gap-3 rounded-2xl px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-400" />
        <h3 className="font-display text-xl font-semibold text-white">
          Request sent
        </h3>
        <p className="max-w-sm text-sm text-white/60">
          Thanks for reaching out. We typically reply within 24 hours — feel
          free to join our Discord in the meantime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={inputClasses} placeholder="Your name" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="discord">
            Discord
          </label>
          <input id="discord" name="discord" className={inputClasses} placeholder="username" />
        </div>

        <div>
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="projectType">
            Project Type
          </label>
          <select id="projectType" name="projectType" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select a type
            </option>
            <option>Spawn</option>
            <option>Hub</option>
            <option>Custom Map</option>
            <option>Buildings</option>
            <option>Full Server Environment</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className={labelClasses} htmlFor="version">
            Minecraft Version
          </label>
          <input id="version" name="version" className={inputClasses} placeholder="e.g. 1.20.4" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="size">
            Approximate Size
          </label>
          <input id="size" name="size" className={inputClasses} placeholder="e.g. 200x200 blocks" />
        </div>

        <div>
          <label className={labelClasses} htmlFor="style">
            Style
          </label>
          <input id="style" name="style" className={inputClasses} placeholder="e.g. Medieval fantasy" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="budget">
            Budget
          </label>
          <select id="budget" name="budget" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>Under $50</option>
            <option>$50 – $100</option>
            <option>$100 – $250</option>
            <option>$250 – $500</option>
            <option>$500+</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="deadline">
            Deadline
          </label>
          <input id="deadline" name="deadline" className={inputClasses} placeholder="e.g. Flexible, or a target date" />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="description">
            Project Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className={inputClasses}
            placeholder="Tell us about your vision..."
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="references">
            References / Inspiration
          </label>
          <textarea
            id="references"
            name="references"
            rows={2}
            className={inputClasses}
            placeholder="Links to servers, builds, or images that inspire this project"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Request
          </>
        )}
      </button>
    </form>
  );
}
