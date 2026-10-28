"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import s from "./LoginModal.module.css";

export default function LoginModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (email: string, password: string, firstname?: string) => Promise<void>;
}) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const first = useRef<HTMLInputElement>(null);

  useEffect(() => {
    first.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, mode]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") || "").trim();
    const password = String(f.get("password") || "");
    const firstname = String(f.get("firstname") || "");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Entre une adresse email valide.");
    if (password.length < 6) return setError("Le mot de passe doit faire au moins 6 caractères.");
    setError("");
    setBusy(true);
    try {
      await onSubmit(email, password, mode === "signup" ? firstname : undefined);
    } catch {
      setError("Connexion impossible pour le moment. Réessaie dans un instant.");
      setBusy(false);
    }
  }

  const signup = mode === "signup";

  return (
    <div className={s.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={s.modal} role="dialog" aria-modal="true" aria-labelledby="login-title">
        <button className={s.close} onClick={onClose} aria-label="Fermer">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>

        <img className={s.logo} src="/img/common/logo.png" alt="" width={64} height={64} />
        <h2 id="login-title" className={s.title}>
          {signup ? "Crée ton compte Bappoum" : "Connecte-toi pour commencer"}
        </h2>
        <p className={s.sub}>15 jours offerts · Sans engagement · Sans carte bancaire</p>

        <div className={s.notice} role="note">
          <span className={`paw ${s.noticePaw}`} aria-hidden />
          <p>
            Une fois connecté·e, tu seras <b>directement connecté·e à Bappoum</b> : tu restes connecté·e sur cet appareil
            et on t&apos;emmène tout de suite à ton essai gratuit.
          </p>
        </div>

        <form className={s.form} onSubmit={submit} noValidate>
          {signup && (
            <label className={s.field}>
              Prénom
              <input ref={first} name="firstname" autoComplete="given-name" placeholder="Ton prénom" />
            </label>
          )}
          <label className={s.field}>
            Email
            <input
              ref={signup ? undefined : first}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="toi@exemple.fr"
              required
            />
          </label>
          <label className={s.field}>
            Mot de passe
            <input
              name="password"
              type="password"
              autoComplete={signup ? "new-password" : "current-password"}
              placeholder="6 caractères minimum"
              required
            />
          </label>
          {error && (
            <p className={s.error} role="alert">
              {error}
            </p>
          )}
          <button className="btn btn--rose" type="submit" disabled={busy}>
            {busy ? "Connexion…" : signup ? "Créer mon compte et commencer" : "Se connecter et commencer"}
          </button>
        </form>

        <p className={s.switch}>
          {signup ? "Déjà un compte ?" : "Pas encore de compte ?"}{" "}
          <button type="button" onClick={() => { setMode(signup ? "login" : "signup"); setError(""); }}>
            {signup ? "Se connecter" : "Créer un compte gratuit"}
          </button>
        </p>
      </div>
    </div>
  );
}
