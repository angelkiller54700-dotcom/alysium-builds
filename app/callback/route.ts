/**
 * Step 2 of the Decap CMS "github" backend OAuth flow. GitHub redirects
 * here with a `code`; we exchange it server-side for an access token
 * (needs GITHUB_OAUTH_CLIENT_ID + GITHUB_OAUTH_CLIENT_SECRET, both
 * server-only env vars — see .env.example) and hand it back to the CMS
 * popup via postMessage, in the exact format Decap CMS expects.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    return html(renderPopupScript(null, "Missing code or server not configured."));
  }

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const tokenData = await tokenRes.json();

    if (tokenData.error || !tokenData.access_token) {
      return html(
        renderPopupScript(null, tokenData.error_description || "Authorization failed.")
      );
    }

    return html(renderPopupScript(tokenData.access_token, null));
  } catch {
    return html(renderPopupScript(null, "Network error contacting GitHub."));
  }
}

function renderPopupScript(token: string | null, error: string | null) {
  const message = token
    ? `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`
    : `authorization:github:error:${JSON.stringify({ message: error })}`;

  return `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        function receiveMessage(e) {
          window.opener.postMessage(${JSON.stringify(message)}, e.origin);
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
    <p>${token ? "Authenticated — you can close this window." : `Authentication failed: ${error}`}</p>
  </body>
</html>`;
}

function html(body: string) {
  return new Response(body, { headers: { "Content-Type": "text/html" } });
}
