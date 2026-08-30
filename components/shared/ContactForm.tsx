"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-accent-500/60 focus:bg-white/[0.05]";
const labelClasses = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/50";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
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
        <h3 className="font-display text-xl font-semibold text-white">
          Demande envoyée
        </h3>
        <p className="max-w-sm text-sm text-white/60">
          Merci de nous avoir contactés. On répond généralement sous 24
          heures — n&apos;hésite pas à rejoindre notre Discord en attendant.
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
          <label className={labelClasses} htmlFor="discord">
            Discord
          </label>
          <input id="discord" name="discord" className={inputClasses} placeholder="pseudo" />
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
            placeholder="toi@email.com"
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="projectType">
            Type de Projet
          </label>
          <select id="projectType" name="projectType" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Choisis un type
            </option>
            <option>Spawn</option>
            <option>Hub</option>
            <option>Map Sur Mesure</option>
            <option>Bâtiments</option>
            <option>Environnement de Serveur Complet</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className={labelClasses} htmlFor="version">
            Version Minecraft
          </label>
          <input id="version" name="version" className={inputClasses} placeholder="ex. 1.20.4" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="size">
            Taille Approximative
          </label>
          <input id="size" name="size" className={inputClasses} placeholder="ex. 200x200 blocs" />
        </div>

        <div>
          <label className={labelClasses} htmlFor="style">
            Style
          </label>
          <input id="style" name="style" className={inputClasses} placeholder="ex. Fantasy médiéval" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="budget">
            Budget
          </label>
          <select id="budget" name="budget" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Choisis une fourchette
            </option>
            <option>Moins de 50 €</option>
            <option>50 € – 100 €</option>
            <option>100 € – 250 €</option>
            <option>250 € – 500 €</option>
            <option>500 €+</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="deadline">
            Délai
          </label>
          <input id="deadline" name="deadline" className={inputClasses} placeholder="ex. Flexible, ou une date cible" />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="description">
            Description du Projet
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className={inputClasses}
            placeholder="Parle-nous de ta vision..."
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="references">
            Références / Inspirations
          </label>
          <textarea
            id="references"
            name="references"
            rows={2}
            className={inputClasses}
            placeholder="Liens vers des serveurs, builds ou images qui inspirent ce projet"
          />
        </div>
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
            Envoyer la Demande
          </>
        )}
      </button>
    </form>
  );
}
