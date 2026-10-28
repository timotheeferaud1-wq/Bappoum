import { CtaButton, LINKS } from "./ui";
import styles from "./CtaBand.module.css";

/** Bandeau rose final (présent en bas de chaque page, juste avant le footer). */
export default function CtaBand({
  title = "Commence ton accompagnement avec Bavardons Parentalité.",
  text = "+250 familles accompagnées · Accompagnements individuels · Cafés des parents · Talks parentalité · Ateliers parents-enfants · Ebooks",
  contentWidth = 1148,
  primary = "jaune",
}: {
  title?: string;
  text?: string;
  /** largeur max du bloc texte en px (la maquette varie de ~860 à 1148 selon les pages) */
  contentWidth?: number;
  /** couleur du premier bouton */
  primary?: "jaune" | "title";
}) {
  return (
    <section className={styles.band}>
      <img className={styles.bear} src="/img/common/cta-bear.png" alt="" aria-hidden />
      <div className={styles.content} style={{ maxWidth: contentWidth }}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className="row" style={{ alignItems: "flex-start" }}>
          <CtaButton href={LINKS.booking} variant={primary}>Réserver ma séance découverte offerte</CtaButton>
          <CtaButton
            href={LINKS.signup}
            variant="blanc"
            paw
            note="Sans engagement – Accès immédiat – Contenus créés par des professionnels"
            noteColor="var(--blanc)"
          >
            Démarrer mon premier mois sur Bappoum
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
