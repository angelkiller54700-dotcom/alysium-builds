import type { Metadata } from "next";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
};

const h2 = "mt-10 font-display text-xl font-semibold text-white";
const p = "mt-3 text-sm leading-relaxed text-white/60";
const ul = "mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/60";

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl pb-28 pt-36 sm:pt-40">
      <h1 className="font-display text-3xl font-bold text-white">Terms of Service</h1>
      <p className="mt-3 text-xs text-white/40">Last updated: August 30, 2026</p>

      <p className={p}>
        These terms govern your use of the {SITE.name} website and any
        custom build commission or digital resource purchase made through
        us. By commissioning a build, purchasing a resource, or otherwise
        using our services, you agree to the terms below.
      </p>

      <h2 className={h2}>1. Services We Offer</h2>
      <p className={p}>
        {SITE.name} provides two types of services: custom Minecraft and
        Hytale builds commissioned directly with us (spawns, hubs, maps,
        and full server environments), and pre-made digital resources
        (schematics, worlds, and building packs) sold through our
        BuiltByBit storefront.
      </p>

      <h2 className={h2}>2. Custom Build Commissions</h2>
      <ul className={ul}>
        <li>
          Every commission starts with a quote based on the scope, size,
          and style you describe. Quotes are estimates — final scope
          changes may affect price or timeline.
        </li>
        <li>
          A deposit (typically 50% of the agreed price) is required before
          work begins, with the remainder due on delivery. Deposits are
          non-refundable once building has started, since they cover time
          already committed to your project.
        </li>
        <li>
          Timelines are estimates, not guarantees. We&apos;ll keep you
          updated if something changes.
        </li>
      </ul>

      <h2 className={h2}>3. Revisions</h2>
      <p className={p}>
        A reasonable number of revisions are included in every commission
        to make sure the final build matches your vision. Requests that go
        beyond the original brief (new areas, a different style, added
        scope) may be quoted as additional work.
      </p>

      <h2 className={h2}>4. Payment & Refunds</h2>
      <ul className={ul}>
        <li>Full refunds are available before any work has started.</li>
        <li>
          Once building has begun, the deposit is non-refundable, but you
          may cancel and receive whatever has been completed so far.
        </li>
        <li>
          Completed and delivered builds are non-refundable, in line with
          standard practice for custom digital work.
        </li>
        <li>
          Resources purchased through BuiltByBit are also subject to
          BuiltByBit&apos;s own terms and refund policy.
        </li>
      </ul>

      <h2 className={h2}>5. Delivery & Usage Rights</h2>
      <p className={p}>
        Once delivered (or purchased through our shop), you&apos;re free to use
        the build on your own server(s), including commercial servers. We
        retain ownership of the build&apos;s design and the right to
        showcase it in our portfolio and marketing, unless we&apos;ve
        agreed otherwise in writing. Reselling, redistributing, or
        repackaging a build or resource as your own — in part or in full —
        isn&apos;t permitted without our written permission.
      </p>

      <h2 className={h2}>6. Intellectual Property & Trademarks</h2>
      <p className={p}>
        {SITE.name} is an independent creative studio and is not
        affiliated with, endorsed by, or sponsored by Mojang Studios,
        Microsoft, or Hypixel Studios. &ldquo;Minecraft&rdquo; is a
        trademark of Mojang Studios/Microsoft; &ldquo;Hytale&rdquo; is a
        trademark of Hypixel Studios. All builds are original works created by us for use
        within these games.
      </p>

      <h2 className={h2}>7. Limitation of Liability</h2>
      <p className={p}>
        Builds are delivered as-is for the Minecraft/Hytale version and
        setup discussed at the time of commissioning. We can&apos;t
        guarantee compatibility with every server configuration, plugin,
        mod, or future game update, and we&apos;re not liable for server
        downtime, data loss, or issues arising from changes made to a
        build after delivery.
      </p>

      <h2 className={h2}>8. Changes to These Terms</h2>
      <p className={p}>
        We may update these terms from time to time as our services
        evolve. Continued use of our services after a change means you
        accept the updated terms.
      </p>

      <h2 className={h2}>9. Contact Us</h2>
      <p className={p}>
        Questions about these terms? Reach out at{" "}
        <a href={`mailto:${SITE.email}`} className="text-accent-300 hover:text-accent-200">
          {SITE.email}
        </a>{" "}
        or on{" "}
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
