import Link from "next/link";
import styles from "./Footer.module.css";

const COLS = [
  {
    title: "Bavardons Parentalité",
    links: [
      ["Approche", "/approche"],
      ["Accompagnements", "/accompagnements"],
      ["Bappoum", "/bappoum"],
      ["Entreprises", "/entreprises"],
      ["Ressources", "/ressources"],
      ["Blog", "/ressources#blog"],
    ],
  },
  {
    title: "Accompagnements",
    links: [
      ["Coaching parental individuel", "/accompagnements#coaching"],
      ["Ateliers parents-enfants", "/accompagnements#ateliers"],
      ["Animation événementielle", "/accompagnements#evenements"],
      ["Interventions en entreprise", "/entreprises"],
    ],
  },
  {
    title: "Bappoum",
    links: [
      ["Comment ça marche", "/bappoum#comment"],
      ["Tarifs et formules", "/bappoum#tarifs"],
      ["Créer un compte gratuit", "/bappoum#tarifs"],
      ["Se connecter", "/bappoum"],
    ],
  },
  {
    title: "Informations",
    links: [
      ["Mentions légales", "#"],
      ["Politique de confidentialité", "#"],
      ["CGU", "#"],
      ["Contact", "/#contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <img className={styles.logo} src="/img/common/logo.png" alt="Bavardons Parentalité" width={186} height={186} />
        <div className={styles.cols}>
          {COLS.map((c) => (
            <div key={c.title} className={styles.col}>
              <p className={styles.title}>{c.title}</p>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.copy}>© 2026 Bavardons Parentalité · Maëva Abadie, spécialiste en développement de l&apos;enfant</p>
    </footer>
  );
}
