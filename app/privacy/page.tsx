import type { Metadata } from "next";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
};

const h2 = "mt-10 font-display text-xl font-semibold text-white";
const p = "mt-3 text-sm leading-relaxed text-white/60";
const ul = "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/60";

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-2xl pb-28 pt-36 sm:pt-40">
      <h1 className="font-display text-3xl font-bold text-white">Politique de Confidentialité</h1>
      <p className="mt-3 text-xs text-white/40">Dernière mise à jour : 30 août 2026</p>

      <p className={p}>
        Cette page explique quelles données {SITE.name} collecte via ce
        site, comment elles sont utilisées, et comment tu peux en demander
        la suppression.
      </p>

      <h2 className={h2}>1. Données collectées</h2>
      <p className={p}>Nous collectons uniquement les informations que tu nous transmets volontairement :</p>
      <ul className={ul}>
        <li>
          <strong className="text-white/80">Formulaire de contact / devis :</strong> nom, email,
          pseudo Discord, et les détails de ton projet (type, taille, budget, description, etc.).
        </li>
        <li>
          <strong className="text-white/80">Formulaire d&apos;avis :</strong> nom, rôle, note, et le
          contenu de ton avis.
        </li>
      </ul>
      <p className={p}>
        Nous n&apos;utilisons aucun outil d&apos;analyse ou de suivi
        (Google Analytics ou équivalent) sur ce site.
      </p>

      <h2 className={h2}>2. Comment ces données sont utilisées</h2>
      <p className={p}>
        Les soumissions de ces formulaires sont envoyées directement sur
        notre serveur Discord privé, pour que nous puissions te répondre
        ou évaluer ta demande. Elles ne sont stockées dans aucune base de
        données, et ne sont ni vendues, ni partagées avec des tiers à des
        fins commerciales. Un avis n&apos;est jamais publié automatiquement
        sur le site — nous te recontactons si nous souhaitons le mettre en
        avant.
      </p>

      <h2 className={h2}>3. Stockage local (navigateur)</h2>
      <p className={p}>
        La fonctionnalité de favoris sur la page Portfolio utilise le
        stockage local de ton navigateur (localStorage) pour se souvenir
        des projets que tu as marqués. Cette information reste uniquement
        sur ton appareil — elle ne nous est jamais transmise et nous
        n&apos;y avons pas accès.
      </p>

      <h2 className={h2}>4. Services tiers</h2>
      <p className={p}>
        Les achats de ressources (schematics, maps, packs) se font via{" "}
        <strong className="text-white/80">BuiltByBit</strong>, qui gère le
        paiement et la livraison des fichiers selon sa propre politique de
        confidentialité. Nous n&apos;avons pas accès à tes informations de
        paiement.
      </p>

      <h2 className={h2}>5. Tes droits</h2>
      <p className={p}>
        Tu peux à tout moment nous demander de supprimer les informations
        que tu nous as transmises, ou de nous préciser ce que nous
        détenons à ton sujet. Il te suffit de nous écrire à l&apos;adresse
        ci-dessous.
      </p>

      <h2 className={h2}>6. Sécurité</h2>
      <p className={p}>
        Aucune donnée sensible (mot de passe, coordonnées bancaires) n&apos;est
        collectée ou stockée par ce site. Les formulaires transitent en
        HTTPS jusqu&apos;à notre Discord.
      </p>

      <h2 className={h2}>7. Modifications de cette politique</h2>
      <p className={p}>
        Cette politique peut évoluer si nos pratiques changent (par
        exemple si nous ajoutons un outil d&apos;analyse à l&apos;avenir).
        La date de dernière mise à jour en haut de page reflète la version
        en vigueur.
      </p>

      <h2 className={h2}>8. Nous contacter</h2>
      <p className={p}>
        Pour toute question ou demande liée à tes données, écris-nous à{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent-300 hover:text-accent-200">
          {SITE.email}
        </a>{" "}
        ou sur{" "}
        <a
          href={SITE.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-300 hover:text-accent-200"
        >
          Discord
        </a>
        .
      </p>
    </div>
  );
}
