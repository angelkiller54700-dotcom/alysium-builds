import type { Metadata } from "next";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Conditions Générales",
};

const h2 = "mt-10 font-display text-xl font-semibold text-white";
const p = "mt-3 text-sm leading-relaxed text-white/60";
const ul = "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/60";

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl pb-28 pt-36 sm:pt-40">
      <h1 className="font-display text-3xl font-bold text-white">Conditions Générales</h1>
      <p className="mt-3 text-xs text-white/40">Dernière mise à jour : 30 août 2026</p>

      <p className={p}>
        Ces conditions régissent ton utilisation du site {SITE.name} ainsi
        que toute commande de build sur mesure ou tout achat de ressource
        numérique effectué auprès de nous. En commandant un build, en
        achetant une ressource, ou en utilisant nos services de toute
        autre manière, tu acceptes les conditions ci-dessous.
      </p>

      <h2 className={h2}>1. Nos Services</h2>
      <p className={p}>
        {SITE.name} propose deux types de services : des builds Minecraft
        et Hytale sur mesure commandés directement auprès de nous (spawns,
        hubs, maps et environnements de serveur complets), et des
        ressources numériques prêtes à l&apos;emploi (schematics, mondes,
        packs de construction) vendues via notre boutique BuiltByBit.
      </p>

      <h2 className={h2}>2. Commandes de Builds Sur Mesure</h2>
      <ul className={ul}>
        <li>
          Chaque commande commence par un devis basé sur l&apos;ampleur, la
          taille et le style que tu décris. Les devis sont des estimations
          — un changement de périmètre en cours de route peut affecter le
          prix ou le délai.
        </li>
        <li>
          Un acompte (généralement 50% du prix convenu) est demandé avant
          le début du travail, le solde étant dû à la livraison. Les
          acomptes ne sont pas remboursables une fois la construction
          commencée, car ils couvrent le temps déjà consacré à ton projet.
        </li>
        <li>
          Les délais sont des estimations, pas des garanties. On te tient
          informé en cas de changement.
        </li>
      </ul>

      <h2 className={h2}>3. Révisions</h2>
      <p className={p}>
        Un nombre raisonnable de révisions est inclus dans chaque commande
        pour s&apos;assurer que le build final corresponde à ta vision. Les
        demandes qui dépassent le cahier des charges initial (nouvelles
        zones, changement de style, ajout de périmètre) peuvent faire
        l&apos;objet d&apos;un devis complémentaire.
      </p>

      <h2 className={h2}>4. Paiement & Remboursements</h2>
      <ul className={ul}>
        <li>
          Un remboursement intégral est possible tant qu&apos;aucun travail
          n&apos;a commencé.
        </li>
        <li>
          Une fois la construction commencée, l&apos;acompte n&apos;est pas
          remboursable, mais tu peux annuler et recevoir ce qui a déjà été
          réalisé.
        </li>
        <li>
          Les builds terminés et livrés ne sont pas remboursables,
          conformément à la pratique standard pour un travail numérique
          sur mesure.
        </li>
        <li>
          Les ressources achetées via BuiltByBit sont également soumises
          aux conditions générales et à la politique de remboursement de
          BuiltByBit.
        </li>
      </ul>

      <h2 className={h2}>5. Livraison & Droits d&apos;Usage</h2>
      <p className={p}>
        Une fois livré (ou acheté via notre boutique), tu es libre
        d&apos;utiliser le build sur ton/tes propre(s) serveur(s), y
        compris commerciaux. Nous conservons la propriété du design du
        build ainsi que le droit de le présenter dans notre portfolio et
        nos supports marketing, sauf accord écrit contraire. Revendre,
        redistribuer, ou repackager un build ou une ressource comme étant
        le tien — en partie ou en totalité — n&apos;est pas autorisé sans
        notre accord écrit.
      </p>

      <h2 className={h2}>6. Propriété Intellectuelle & Marques</h2>
      <p className={p}>
        {SITE.name} est un studio créatif indépendant, non affilié, non
        approuvé et non sponsorisé par Mojang Studios, Microsoft, ou
        Hypixel Studios. &laquo;&nbsp;Minecraft&nbsp;&raquo; est une marque
        de Mojang Studios/Microsoft ; &laquo;&nbsp;Hytale&nbsp;&raquo; est
        une marque de Hypixel Studios. Tous les builds sont des créations
        originales conçues par nos soins pour un usage au sein de ces
        jeux.
      </p>

      <h2 className={h2}>7. Limitation de Responsabilité</h2>
      <p className={p}>
        Les builds sont livrés tels quels, pour la version et la
        configuration Minecraft/Hytale discutées au moment de la
        commande. Nous ne pouvons pas garantir la compatibilité avec
        toutes les configurations de serveur, plugins, mods, ou futures
        mises à jour du jeu, et nous ne sommes pas responsables des temps
        d&apos;arrêt de serveur, pertes de données, ou problèmes liés à des
        modifications apportées à un build après sa livraison.
      </p>

      <h2 className={h2}>8. Modifications de ces Conditions</h2>
      <p className={p}>
        Nous pouvons mettre à jour ces conditions de temps à autre, à
        mesure que nos services évoluent. Continuer à utiliser nos
        services après une modification signifie que tu acceptes les
        conditions mises à jour.
      </p>

      <h2 className={h2}>9. Nous Contacter</h2>
      <p className={p}>
        Des questions sur ces conditions ? Écris-nous à{" "}
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
