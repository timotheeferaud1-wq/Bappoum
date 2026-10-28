import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Contact from "@/components/approche/Contact";
import { Experience, Formation, Hero, Methode, Pourquoi } from "@/components/approche/Sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Notre approche – Maëva Abadie, spécialisée dans le développement de l'enfant",
  description:
    "Découvre l'approche de Bavardons Parentalité : Maëva Abadie, diplômée en psychologie et spécialisée dans le développement de l'enfant, accompagne les parents avec une parentalité bienveillante, des outils concrets et 8 ans d'expérience terrain.",
};

const FAQ = [
  { q: "Les ateliers parents-enfants sont-ils adaptés à tous les âges ?", a: "Oui : chaque atelier est pensé pour une tranche d'âge précise, de la petite enfance à l'adolescence. Les activités sont concrètes, ludiques et adaptées au rythme de chaque famille." },
  { q: "Comment se déroule une séance découverte offerte ?", a: "C'est un premier échange avec Maëva, en visio ou en présentiel, pour faire le point sur ta situation et voir ensemble l'accompagnement qui te correspond. Sans engagement." },
  { q: "Quels types d'événements familiaux anime Bavardons Parentalité ?", a: "Mariages, anniversaires, fêtes de famille ou événements d'entreprise : nous proposons des animations clés en main pour les enfants et les parents. Plus de 35 événements ont déjà été animés." },
  { q: "Comment Bappoum peut-il aider dans la gestion des écrans ?", a: "Les écrans font partie des thématiques abordées sur Bappoum : lives, podcasts et ressources de professionnels t'aident à poser des règles claires et adaptées à l'âge de ton enfant." },
  { q: "Comment puis-je accéder aux podcasts de Bappoum ?", a: "Une fois inscrit·e, tous les podcasts sont disponibles sur la plateforme, depuis ton téléphone, ta tablette ou ton ordinateur, et restent accessibles en replay à vie." },
  { q: "Quels sont les avantages du coaching parental en ligne ?", a: "Tu es accompagné·e où que tu sois, sans contrainte de déplacement, avec des séances qui s'adaptent à ton emploi du temps et à ta situation familiale." },
  { q: "Le coaching parental est-il remboursé par les assurances ?", a: "Le coaching parental n'est pas pris en charge par l'Assurance maladie, mais certaines mutuelles ou certains employeurs peuvent le financer en partie. Renseigne-toi auprès de ta mutuelle." },
  { q: "Comment gérer les crises de colère de mon enfant ?", a: "Accueillir l'émotion, rester calme et poser un cadre bienveillant sont les premières clés. Derrière chaque comportement il y a un besoin : le coaching individuel aide à le décoder." },
];

export default function Page() {
  return (
    <div className={styles.page}>
      <Hero />
      <Pourquoi />
      <Formation />
      <Experience />
      <Methode />
      <Faq
        title={
          <>
            <em>Questions fréquentes</em> sur l&apos;accompagnement parental et la plateforme Bappoum
          </>
        }
        items={FAQ}
      />
      <Contact />
      <CtaBand contentWidth={900} primary="title"
        title="Rejoindre Bavardons Parentalité : coaching parental, ateliers parents-enfants et plateforme Bappoum"
        text="Rejoins les 250 familles qui avancent chaque mois avec Bavardons Parentalité : un accompagnement parental bienveillant, concret et adapté à ta réalité."
      />
    </div>
  );
}
