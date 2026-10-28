import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Contact from "@/components/accompagnements/Contact";
import Tarifs from "@/components/accompagnements/Tarifs";
import { Ateliers, BappoumBloc, Coaching, Evenements, Intro } from "@/components/accompagnements/Sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Accompagnements parentaux – coaching individuel, ateliers parents-enfants et animation événementielle",
  description:
    "Coaching parental individuel avec Maëva Abadie en visio ou en présentiel, ateliers parents-enfants, animations enfants pour vos événements et plateforme Bappoum. Séance découverte offerte.",
};

const FAQ = [
  { q: "Pourquoi une PME a-t-elle besoin d'un site internet professionnel ?", a: "Bavardons Parentalité intervient aussi auprès des entreprises : webinaires, conférences, animations enfants et accès Bappoum pour soutenir les collaborateurs parents. Contacte-nous pour construire une offre adaptée à ta structure." },
  { q: "Les ateliers parents-enfants sont-ils adaptés à tous les âges ?", a: "Oui : chaque atelier est pensé pour une tranche d'âge précise, de la petite enfance à l'adolescence. Cuisine, activités manuelles, escape games ou chasses au trésor s'adaptent au rythme de chaque famille." },
  { q: "Comment se déroule une séance découverte offerte ?", a: "C'est un premier échange avec Maëva, en visio ou en présentiel, pour faire le point sur ta situation et voir ensemble l'accompagnement qui te correspond. Sans engagement." },
  { q: "Quels types d'événements familiaux anime Bavardons Parentalité ?", a: "Mariages, baptêmes, anniversaires, fêtes de famille ou événements d'entreprise : nous proposons des animations enfants clés en main, personnalisées selon le thème. Plus de 35 événements ont déjà été animés." },
  { q: "Comment Bappoum peut-il aider dans la gestion des écrans ?", a: "Les écrans font partie des thématiques abordées sur Bappoum : lives, podcasts et ressources de professionnels t'aident à poser des règles claires et adaptées à l'âge de ton enfant." },
  { q: "Comment puis-je accéder aux podcasts de Bappoum ?", a: "Une fois inscrit·e, tous les podcasts sont disponibles sur la plateforme, depuis ton téléphone, ta tablette ou ton ordinateur, et restent accessibles en replay à vie." },
  { q: "Quels sont les avantages du coaching parental en ligne ?", a: "Tu es accompagné·e où que tu sois en France, sans déplacement, avec des séances qui s'adaptent à ton emploi du temps et un récapitulatif écrit après chaque séance." },
  { q: "Le coaching parental est-il remboursé par les assurances ?", a: "Le coaching parental n'est pas pris en charge par l'Assurance maladie, mais certaines mutuelles ou certains employeurs peuvent le financer en partie. Renseigne-toi auprès de ta mutuelle." },
  { q: "Comment gérer les crises de colère de mon enfant ?", a: "Accueillir l'émotion, rester calme et poser un cadre bienveillant sont les premières clés. La gestion des crises est l'une des thématiques travaillées en coaching individuel et sur Bappoum." },
];

export default function Page() {
  return (
    <div className={styles.page}>
      <Intro />
      <Coaching />
      <Ateliers />
      <Evenements />
      <BappoumBloc />
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
      <CtaBand contentWidth={880}
        title="Rejoindre Bavardons Parentalité : coaching parental, ateliers parents-enfants et plateforme Bappoum"
        text="Rejoins les 250 familles qui avancent chaque mois avec Bavardons Parentalité : un accompagnement parental bienveillant, concret et adapté à ta réalité."
      />
    </div>
  );
}
