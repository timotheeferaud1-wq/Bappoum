"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, LINKS, Paw } from "./ui";
import { useAuth } from "./auth/AuthProvider";
import styles from "./Header.module.css";

export const NAV = [
  { href: "/approche", label: "Approche" },
  { href: "/accompagnements", label: "Accompagnements" },
  { href: "/bappoum", label: "Bappoum", paw: true },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/ressources", label: "Ressources" },
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const account = user ? (
    <>
      <Button href={LINKS.bappoum} variant="rose" large>Bonjour {user.firstname}</Button>
      <button className={styles.logout} onClick={signOut}>Se déconnecter</button>
    </>
  ) : null;
  useEffect(() => setOpen(false), [path]);

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Bavardons Parentalité — accueil">
          <img src="/img/common/logo.png" alt="" width={64} height={64} />
        </Link>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`} aria-label="Navigation principale">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link} aria-current={path.startsWith(l.href) ? "page" : undefined}>
              {l.label}
              {l.paw && <Paw className={styles.navPaw} />}
            </Link>
          ))}
          <div className={styles.mobileCtas}>
            <Button href={LINKS.contact} variant="jaune-outline">Nous contacter</Button>
            {account ?? <Button href={LINKS.signup} variant="rose">Commencer gratuitement</Button>}
          </div>
        </nav>

        <div className={styles.ctas}>
          <Button href={LINKS.contact} variant="jaune-outline" large>Nous contacter</Button>
          {account ?? <Button href={LINKS.signup} variant="rose" large>Commencer gratuitement</Button>}
        </div>

        <button className={styles.burger} aria-expanded={open} aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
