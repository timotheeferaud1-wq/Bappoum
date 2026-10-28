import { CtaButton, LINKS } from "./ui";
import styles from "./CtaBand.module.css";

/** Bandeau rose final (présent en bas de chaque page, juste avant le footer). */
export default function CtaBand({
  title = "Commence ton accompagnement avec Bavardons Parentalité.",
  text = "+250 familles accompagnées · Accompagnements individuels · Cafés des parents · Talks parentalité · Ateliers parents-enfants · Ebooks",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className={styles.band}>
      <img className={styles.bear} src="/img/common/cta-bear.png" alt="" aria-hidden />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className="row" style={{ alignItems: "flex-start" }}>
          <CtaButton href={LINKS.booking} variant="jaune">Réserver ma séance découverte offerte</CtaButton>
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
