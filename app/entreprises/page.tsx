import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import { Temoignages } from "@/components/accueil/Sections";
import Contact from "@/components/entreprises/Contact";
import {
  Cibles,
  Collectif,
  Conferences,
  Etapes,
  Evenements,
  Hero,
  Interventions,
  Pourquoi,
  Webinaires,
} from "@/components/entreprises/Sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Accompagnement parental en entreprise – webinaires, conférences et ateliers",
  description:
    "Bavardons Parentalité accompagne vos collaborateurs parents : webinaires thématiques, conférences de Maëva Abadie, animations parents-enfants pour vos événements et accès collectif à Bappoum. Devis gratuit sous 48h.",
};

const FAQ = [
  { q: "Pourquoi une PME a-t-elle besoin d'un site internet professionnel ?", a: "Pour une PME, soutenir ses salariés parents est aussi un levier de fidélisation : Bavardons Parentalité propose des formats adaptés aux petites équipes et aux petits budgets, dès 10 participants." },
  { q: "Les ateliers parents-enfants sont-ils adaptés à tous les âges ?", a: "Oui : les activités sont pensées pour les enfants de 0 à 18 ans et adaptées à chaque tranche d'âge, que ce soit lors d'une journée famille ou d'une fête de Noël d'entreprise." },
  { q: "Comment se déroule une séance découverte offerte ?", a: "C'est un premier échange en visio pour comprendre votre contexte, vos enjeux RH et les besoins de vos collaborateurs parents. Gratuit et sans engagement." },
  { q: "Quels types d'événements familiaux anime Bavardons Parentalité ?", a: "Fêtes de Noël, séminaires, journées famille et team building : des animations clés en main, avec une durée minimale de 2 heures en présentiel. Plus de 35 événements ont déjà été animés." },
  { q: "Comment Bappoum peut-il aider dans la gestion des écrans ?", a: "Les écrans font partie des thématiques abordées chaque mois sur Bappoum et en webinaire : vos collaborateurs repartent avec des repères concrets et adaptés à l'âge de leurs enfants." },
  { q: "Comment puis-je accéder aux podcasts de Bappoum ?", a: "Avec l'accès collectif, chaque collaborateur dispose de son compte : podcasts, lives et ressources sont disponibles 24h/24 sur téléphone, tablette ou ordinateur, en replay." },
  { q: "Quels sont les avantages du coaching parental en ligne ?", a: "Pas de déplacement, des séances qui s'adaptent à l'emploi du temps de chacun et des contenus accessibles en replay : un format idéal pour des salariés parents déjà très sollicités." },
  { q: "Le coaching parental est-il remboursé par les assurances ?", a: "Le coaching parental n'est pas pris en charge par l'Assurance maladie, mais il peut être financé par l'employeur ou le CSE dans le cadre d'une politique QVCT." },
  { q: "Comment gérer les crises de colère de mon enfant ?", a: "Accueillir l'émotion, rester calme et poser un cadre bienveillant sont les premières clés. Les émotions font partie des thématiques proposées en webinaire et sur Bappoum." },
];

export default function Page() {
  return (
    <div className={styles.page}>
      <Hero />
      <Pourquoi />
      <Interventions />
      <Collectif />
      <Webinaires />
      <Evenements />
      <Conferences />
      <Cibles />
      <Etapes />
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
      <CtaBand contentWidth={900}
        title="Rejoindre Bavardons Parentalité : coaching parental, ateliers parents-enfants et plateforme Bappoum"
        text="Rejoins les 250 familles qui avancent chaque mois avec Bavardons Parentalité : un accompagnement parental bienveillant, concret et adapté à ta réalité."
      />
    </div>
  );
}
