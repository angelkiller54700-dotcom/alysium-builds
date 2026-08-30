import { NextResponse } from "next/server";

/**
 * Step 1 of the Decap CMS "github" backend OAuth flow. The CMS opens a
 * popup pointed at this route (see `base_url` + `auth_endpoint` in
 * public/admin/config.yml); we kick off GitHub's OAuth authorize flow and
 * send the user back to /callback once they approve.
 *
 * Requires GITHUB_OAUTH_CLIENT_ID (server-only env var, set on Vercel).
 */
export async function GET(request: Request) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId) {
    return new NextResponse(
      "Missing GITHUB_OAUTH_CLIENT_ID env var — see .env.example.",
      { status: 500 }
    );
  }

  const { origin } = new URL(request.url);

  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", `${origin}/callback`);
  authorizeUrl.searchParams.set("scope", "repo");
  authorizeUrl.searchParams.set("state", Math.random().toString(36).slice(2));

  return NextResponse.redirect(authorizeUrl);
}
