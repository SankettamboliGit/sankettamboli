import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

const isSafeNext = (value: string | null): value is string =>
  !!value && value.startsWith("/") && !value.startsWith("//");

const Auth = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const nextParam = params.get("next");
  const next = isSafeNext(nextParam) ? nextParam : "/";

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.replace(next);
    });
  }, [next]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}${next}`,
        },
      });
      setBusy(false);
      if (error) return setError(error.message);
      setNotice("Check your inbox to confirm your email, then sign in.");
      setMode("signin");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setError(error.message);
    window.location.replace(next);
  };

  const handleGoogle = async () => {
    setBusy(true);
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: `${window.location.origin}/login?next=${encodeURIComponent(next)}`,
    });
    if (result.error) {
      setBusy(false);
      return setError(result.error.message ?? "Google sign-in failed.");
    }
    if (result.redirected) return;
    window.location.replace(next);
  };

  const inputClass =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-white/20";

  return (
    <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center px-6">
      <div aria-hidden="true" className="noise-overlay" />
      <div className="relative w-full max-w-sm surface rounded-3xl p-8 backdrop-blur-xl">
        <h1 className="font-display text-2xl font-semibold mb-1">
          {mode === "signin" ? "Sign in" : "Create account"}
        </h1>
        <p className="text-white/60 text-sm mb-6">
          Access is required to connect an agent to this portfolio.
        </p>

        <button
          type="button"
          onClick={handleGoogle}
          disabled={busy}
          className="w-full mb-4 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition-colors disabled:opacity-50"
        >
          Continue with Google
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-[10px] uppercase tracking-widest text-white/40">or</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
          <input
            type="password"
            required
            minLength={6}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-xl bg-white text-black px-4 py-3 text-sm font-semibold hover:bg-white/90 transition-colors disabled:opacity-50"
          >
            {mode === "signin" ? "Sign in" : "Sign up"}
          </button>
        </form>

        {error && <p className="mt-4 text-sm text-white/90">{error}</p>}
        {notice && <p className="mt-4 text-sm text-white/70">{notice}</p>}

        <button
          type="button"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
          }}
          className="mt-6 text-xs text-white/60 hover:text-white/90 underline underline-offset-4"
        >
          {mode === "signin"
            ? "Need an account? Sign up"
            : "Already have an account? Sign in"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/")}
          className="mt-4 block text-xs text-white/40 hover:text-white/70"
        >
          Back to portfolio
        </button>
      </div>
    </div>
  );
};

export default Auth;
