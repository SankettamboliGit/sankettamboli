import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type AuthorizationDetails = {
  client?: { name?: string; client_id?: string; redirect_uri?: string } | null;
  scope?: string | null;
  redirect_url?: string | null;
  redirect_to?: string | null;
};

// The auth.oauth namespace is beta; keep a narrow local typed wrapper.
const oauth = (supabase.auth as unknown as {
  oauth: {
    getAuthorizationDetails: (
      id: string,
    ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
    approveAuthorization: (
      id: string,
    ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
    denyAuthorization: (
      id: string,
    ) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  };
}).oauth;

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<AuthorizationDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id in the request.");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.replace(`/login?next=${encodeURIComponent(next)}`);
        return;
      }
      const { data, error } = await oauth.getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) {
        setError(error.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.replace(immediate);
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  const decide = async (approve: boolean) => {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await oauth.approveAuthorization(authorizationId)
      : await oauth.denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.replace(target);
  };

  const clientName = details?.client?.name ?? "this app";
  const scopes = (details?.scope ?? "").split(/\s+/).filter(Boolean);

  const scopeLabel = (scope: string) => {
    if (scope === "profile" || scope === "openid") return "Share your basic profile";
    if (scope === "email") return "Share your email address";
    return `Additional permission requested: ${scope}`;
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center px-6 py-16">
      <div aria-hidden="true" className="noise-overlay" />
      <div className="relative w-full max-w-md surface rounded-3xl p-8 backdrop-blur-xl">
        {error ? (
          <>
            <h1 className="font-display text-xl font-semibold mb-2">
              Could not load this request
            </h1>
            <p className="text-white/70 text-sm">{error}</p>
          </>
        ) : !details ? (
          <p className="text-white/70 text-sm">Loading authorization request…</p>
        ) : (
          <>
            <h1 className="font-display text-2xl font-semibold mb-2">
              Connect {clientName} to Sanket Tamboli — Portfolio
            </h1>
            <p className="text-white/70 text-sm mb-6">
              This lets {clientName} call this portfolio's tools as you while you are
              signed in.
            </p>

            {details.client?.redirect_uri && (
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                  Redirects to
                </p>
                <p className="text-white/80 text-sm break-all">
                  {details.client.redirect_uri}
                </p>
              </div>
            )}

            {scopes.length > 0 && (
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">
                  Requested access
                </p>
                <ul className="space-y-1">
                  {scopes.map((s) => (
                    <li key={s} className="text-white/80 text-sm">
                      {scopeLabel(s)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-white/60 text-xs mb-6">
              This does not bypass this app's permissions or backend policies.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                disabled={busy}
                onClick={() => decide(true)}
                className="flex-1 rounded-xl bg-white text-black px-4 py-3 text-sm font-semibold hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                Approve
              </button>
              <button
                type="button"
                disabled={busy}
                onClick={() => decide(false)}
                className="flex-1 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition-colors disabled:opacity-50"
              >
                Cancel connection
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OAuthConsent;
