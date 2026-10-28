import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Hero from "@/components/accueil/Hero";
import Contact from "@/components/accueil/Contact";
import { Deviens, Experts, Offres, Profils, Rejoindre, Rythme, Temoignages, Thematiques } from "@/components/accueil/Sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Bavardons Parentalité – Accompagnement parental bienveillant de 0 à 18 ans" },
  description:
    "Bavardons Parentalité accompagne les parents d'enfants de 0 à 18 ans : Bappoum, la plateforme d'accompagnement parental mensuel (15 jours offerts), coaching individuel, ateliers parents-enfants et interventions en entreprise.",
};

const FAQ = [
  { q: "Pourquoi une PME a-t-elle besoin d'un site internet professionnel ?", a: "Bavardons Parentalité intervient aussi auprès des entreprises : webinaires, conférences et accès Bappoum pour soutenir les collaborateurs parents. Contacte-nous pour construire une offre adaptée à ta structure." },
  { q: "Les ateliers parents-enfants sont-ils adaptés à tous les âges ?", a: "Oui : chaque atelier est pensé pour une tranche d'âge précise, de la petite enfance à l'adolescence. Les activités sont concrètes, ludiques et adaptées au rythme de chaque famille." },
  { q: "Comment se déroule une séance découverte offerte ?", a: "C'est un échange de 40 minutes avec Maëva, en visio ou en présentiel, pour faire le point sur ta situation et voir ensemble l'accompagnement qui te correspond. Sans engagement." },
  { q: "Quels types d'événements familiaux anime Bavardons Parentalité ?", a: "Mariages, anniversaires, fêtes de famille ou événements d'entreprise : nous proposons des animations clés en main pour les enfants et les parents. Plus de 35 événements ont déjà été animés." },
  { q: "Comment Bappoum peut-il aider dans la gestion des écrans ?", a: "Les écrans font partie des thématiques abordées sur Bappoum : lives, podcasts et ressources de professionnels t'aident à poser des règles claires et adaptées à l'âge de ton enfant." },
  { q: "Comment puis-je accéder aux podcasts de Bappoum ?", a: "Une fois inscrit·e, tous les podcasts sont disponibles sur la plateforme, depuis ton téléphone, ta tablette ou ton ordinateur, et restent accessibles en replay à vie." },
  { q: "Quels sont les avantages du coaching parental en ligne ?", a: "Tu es accompagné·e où que tu sois, sans contrainte de déplacement, avec des séances qui s'adaptent à ton emploi du temps et à ta situation familiale." },
  { q: "Le coaching parental est-il remboursé par les assurances ?", a: "Le coaching parental n'est pas pris en charge par l'Assurance maladie, mais certaines mutuelles ou certains employeurs peuvent le financer en partie. Renseigne-toi auprès de ta mutuelle." },
  { q: "Comment gérer les crises de colère de mon enfant ?", a: "Accueillir l'émotion, rester calme et poser un cadre bienveillant sont les premières clés. Les émotions sont une thématique détaillée sur Bappoum, et le coaching individuel permet d'aller plus loin." },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Profils />
      <Deviens />
      <Thematiques />
      <Offres />
      <Experts />
      <Rythme />
      <Rejoindre />
      <Temoignages />
      <Faq
        title={
          <>
            <em>Questions fréquentes</em> sur l&apos;accompagnement parental et la plateforme Bappoum
          </>
        }
        items={FAQ}
      />
      <Contact />
      <CtaBand />
    </div>
  );
}
