import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Contact from "@/components/bappoum/Contact";
import Tarifs from "@/components/bappoum/Tarifs";
import { Avantages, Comment, Formats, Gratuit, Hero } from "@/components/bappoum/Sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Bappoum – la plateforme d'accompagnement parental mensuel",
  description:
    "Bappoum, la plateforme d'accompagnement parental mensuel de Bavardons Parentalité : une thématique par mois, des lives, podcasts et ressources créés par des professionnels de l'enfance, en replay à vie. 15 jours offerts, à partir de 16€/mois.",
};

const FAQ = [
  { q: "Pourquoi une PME a-t-elle besoin d'un site internet professionnel ?", a: "Bavardons Parentalité intervient aussi auprès des entreprises : webinaires, conférences et accès Bappoum pour soutenir les collaborateurs parents. Contacte-nous pour construire une offre adaptée à ta structure." },
  { q: "Les ateliers parents-enfants sont-ils adaptés à tous les âges ?", a: "Oui : chaque atelier est pensé pour une tranche d'âge précise, de la petite enfance à l'adolescence. Les abonnés Bappoum profitent en plus d'ateliers en petit groupe à 2€." },
  { q: "Comment se déroule une séance découverte offerte ?", a: "C'est un échange avec Maëva, en visio, pour faire le point sur ta situation et voir ensemble l'accompagnement ou la formule Bappoum qui te correspond. Sans engagement." },
  { q: "Quels types d'événements familiaux anime Bavardons Parentalité ?", a: "Mariages, anniversaires, fêtes de famille ou événements d'entreprise : nous proposons des animations clés en main pour les enfants et les parents." },
  { q: "Comment Bappoum peut-il aider dans la gestion des écrans ?", a: "Les écrans font partie des thématiques mensuelles de Bappoum : lives, podcasts et ressources pratiques t'aident à poser des règles claires et adaptées à l'âge de ton enfant." },
  { q: "Comment puis-je accéder aux podcasts de Bappoum ?", a: "Crée ton compte : les podcasts sont disponibles sur la plateforme depuis ton téléphone, ta tablette ou ton ordinateur. Le compte gratuit donne accès à 2 podcasts par thématique pendant 15 jours." },
  { q: "Quels sont les avantages du coaching parental en ligne ?", a: "Tu es accompagné·e où que tu sois, sans contrainte de déplacement, avec des séances qui s'adaptent à ton emploi du temps et à ta situation familiale." },
  { q: "Le coaching parental est-il remboursé par les assurances ?", a: "Le coaching parental n'est pas pris en charge par l'Assurance maladie, mais certaines mutuelles ou certains employeurs peuvent le financer en partie. Renseigne-toi auprès de ta mutuelle." },
  { q: "Comment gérer les crises de colère de mon enfant ?", a: "Accueillir l'émotion, rester calme et poser un cadre bienveillant sont les premières clés. Les émotions sont l'une des thématiques approfondies chaque mois sur Bappoum par des psychologues." },
];

export default function BappoumPage() {
  return (
    <div className={styles.page}>
      <Hero />
      <Gratuit />
      <Comment />
      <Formats />
      <Avantages />
      <Tarifs />
      <Faq
        title={
          <>
            <em>Questions fréquentes</em> sur l&apos;accompagnement parental et la plateforme Bappoum
          </>
        }
        items={FAQ}
      />
      <Contact />
      <CtaBand
        title="Rejoindre Bavardons Parentalité : coaching parental, ateliers parents-enfants et plateforme Bappoum"
        text="Rejoins les 250 familles qui avancent chaque mois avec Bavardons Parentalité : un accompagnement parental bienveillant, concret et adapté à ta réalité."
      />
    </div>
  );
}
