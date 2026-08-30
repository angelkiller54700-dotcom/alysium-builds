"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send, Star } from "lucide-react";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-500/60 focus:bg-white/[0.05]";
const labelClasses = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/50";

export default function ReviewForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), rating: String(rating) };

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("sent");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-panel flex flex-col items-center gap-3 rounded-2xl px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent-400" />
        <h3 className="font-display text-xl font-semibold text-white">Merci pour ton avis !</h3>
        <p className="max-w-sm text-sm text-white/60">
          On lit chaque avis reçu — s&apos;il colle bien, on le mettra en
          avant sur le site.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 sm:p-8">
      {/* Honeypot — hidden from real visitors, bots tend to fill every field. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="name">
            Nom
          </label>
          <input id="name" name="name" required className={inputClasses} placeholder="Ton nom" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="role">
            Rôle
          </label>
          <input
            id="role"
            name="role"
            className={inputClasses}
            placeholder="ex. Propriétaire de serveur, Propriétaire de réseau"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClasses}>Note</label>
        <div className="flex gap-1" onMouseLeave={() => setHoverRating(0)}>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRating(value)}
              onMouseEnter={() => setHoverRating(value)}
              aria-label={`${value} étoile${value > 1 ? "s" : ""}`}
              className="p-0.5"
            >
              <Star
                className={
                  value <= (hoverRating || rating)
                    ? "h-6 w-6 fill-accent-400 text-accent-400"
                    : "h-6 w-6 text-white/20"
                }
              />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClasses} htmlFor="quote">
          Ton avis
        </label>
        <textarea
          id="quote"
          name="quote"
          required
          rows={4}
          className={inputClasses}
          placeholder="Parle-nous de ton expérience avec nous..."
        />
      </div>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-6 w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Envoi...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Envoyer l&apos;Avis
          </>
        )}
      </button>
    </form>
  );
}
