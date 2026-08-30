import { NextResponse } from "next/server";

/**
 * Receives review submissions and posts them as an embed to Discord — same
 * webhook as the contact form (DISCORD_WEBHOOK_URL), just visually
 * distinct (gold, starred title) so it reads as "review to moderate"
 * rather than "build request". Reviews do NOT auto-publish: add them as a
 * testimonial yourself via /admin once you've read and approved one.
 */

type ReviewPayload = {
  name?: string;
  role?: string;
  rating?: string;
  quote?: string;
  /** Honeypot — real users never fill this (it's hidden via CSS). */
  company?: string;
};

function field(name: string, value?: string, inline = true) {
  return { name, value: value?.trim() ? value.trim().slice(0, 1000) : "—", inline };
}

export async function POST(request: Request) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not set — see .env.example");
    return NextResponse.json(
      { error: "Reviews aren't configured yet. Please reach us on Discord instead." },
      { status: 500 }
    );
  }

  let data: ReviewPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field, including hidden ones.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const rating = Number(data.rating);

  if (!data.name?.trim() || !data.quote?.trim() || !Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "Name, a rating (1-5), and a review are required." },
      { status: 400 }
    );
  }

  const embed = {
    title: `⭐ New Review Submitted (${rating}/5)`,
    description: "Not published automatically — add it as a testimonial via /admin if it looks good.",
    color: 0xf5b942,
    fields: [
      field("Name", data.name),
      field("Role", data.role || "—"),
      field("Rating", "★".repeat(rating) + "☆".repeat(5 - rating)),
      field("Review", data.quote, false),
    ],
    timestamp: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Discord webhook error:", res.status, body);
      return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Review submission failed:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
