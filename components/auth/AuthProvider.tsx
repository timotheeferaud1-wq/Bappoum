"use client";
/**
 * Connexion « Commencer gratuitement ».
 *
 * - Si la personne n'est pas connectée et clique sur un bouton « Commencer gratuitement »
 *   (ou tout lien marqué data-auth-gate), on bloque la navigation et on ouvre la popup de connexion.
 * - Après connexion, elle reste connectée (session gardée dans ce navigateur) et on l'emmène
 *   directement là où le bouton menait.
 *
 * ⚠️ Pas encore de vrai serveur d'authentification : `signIn` simule la connexion et garde la
 * session dans le navigateur. Pour brancher la vraie plateforme Bappoum (Supabase, Auth0, API maison…),
 * remplace uniquement le contenu de `signIn` / `signOut` ci-dessous.
 */
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "./LoginModal";

export type User = { email: string; firstname: string };

type AuthCtx = {
  user: User | null;
  ready: boolean;
  /** ouvre la popup ; `next` = page où aller après la connexion */
  openLogin: (next?: string) => void;
  signOut: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "bappoum:session";
const GATE_TEXT = /commencer gratuitement/i;

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth doit être utilisé dans <AuthProvider>");
  return c;
}

/* ---------- À remplacer par le vrai service d'authentification ---------- */
async function signInRequest(email: string, _password: string, firstname?: string): Promise<User> {
  await new Promise((r) => setTimeout(r, 500)); // latence simulée
  return { email, firstname: firstname?.trim() || email.split("@")[0] };
}
/* ----------------------------------------------------------------------- */

export default function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [modal, setModal] = useState<{ next?: string } | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  const openLogin = useCallback((next?: string) => setModal({ next }), []);

  // Intercepte les clics sur « Commencer gratuitement » tant qu'on n'est pas connecté.
  useEffect(() => {
    if (user) return;
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const gated = a.hasAttribute("data-auth-gate") || GATE_TEXT.test(a.textContent || "");
      if (!gated) return;
      e.preventDefault(); // empêche aussi la navigation de next/link
      e.stopPropagation();
      setModal({ next: a.getAttribute("href") || undefined });
    };
    document.addEventListener("click", onClick, true); // phase de capture : avant next/link
    return () => document.removeEventListener("click", onClick, true);
  }, [user]);

  const signIn = useCallback(
    async (email: string, password: string, firstname?: string) => {
      const u = await signInRequest(email, password, firstname);
      setUser(u);
      try {
        localStorage.setItem(KEY, JSON.stringify(u));
      } catch {}
      const next = modal?.next;
      setModal(null);
      if (next) router.push(next);
    },
    [modal, router],
  );

  const signOut = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(KEY);
    } catch {}
  }, []);

  return (
    <Ctx.Provider value={{ user, ready, openLogin, signOut }}>
      {children}
      {modal && <LoginModal onClose={() => setModal(null)} onSubmit={signIn} />}
    </Ctx.Provider>
  );
}
