import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Bibliotheque from "@/components/ressources/Bibliotheque";
import Echanger from "@/components/ressources/Echanger";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Ressources : e-books et blog parentalité",
  description:
    "E-books et articles de blog de Bavardons Parentalité pour accompagner les parents d'enfants de 0 à 18 ans, et prise de contact avec Maëva pour un coaching parental individuel.",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <Bibliotheque />
      <Echanger />
      <CtaBand contentWidth={880}
        title="Rejoindre Bavardons Parentalité : coaching parental, ateliers parents-enfants et plateforme Bappoum"
        text="Rejoins les 250 familles qui avancent chaque mois avec Bavardons Parentalité : un accompagnement parental bienveillant, concret et adapté à ta réalité."
      />
    </div>
  );
}
