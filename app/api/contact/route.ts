import { NextResponse } from "next/server";

/**
 * Receives the contact form and posts it as an embed to a Discord webhook.
 * The webhook URL lives in DISCORD_WEBHOOK_URL (server-only env var — see
 * .env.example). Never expose it client-side (no NEXT_PUBLIC_ prefix): it
 * acts as a bearer token for posting into your Discord channel.
 */

type ContactPayload = {
  name?: string;
  discord?: string;
  email?: string;
  projectType?: string;
  version?: string;
  size?: string;
  style?: string;
  budget?: string;
  deadline?: string;
  description?: string;
  references?: string;
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
      { error: "Contact form is not configured yet. Please email or Discord us directly." },
      { status: 500 }
    );
  }

  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field, including hidden ones.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  if (!data.name?.trim() || !data.email?.trim() || !data.description?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and description are required." },
      { status: 400 }
    );
  }

  const embed = {
    title: "New Custom Build Request",
    color: 0x8b5cf6,
    fields: [
      field("Name", data.name),
      field("Email", data.email),
      field("Discord", data.discord),
      field("Project Type", data.projectType),
      field("Minecraft Version", data.version),
      field("Approx. Size", data.size),
      field("Style", data.style),
      field("Budget", data.budget),
      field("Deadline", data.deadline),
      field("Description", data.description, false),
      field("References / Inspiration", data.references, false),
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
    console.error("Contact form submission failed:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
