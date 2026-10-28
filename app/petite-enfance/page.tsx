import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import { HeroBlock, Switch } from "@/components/petite-enfance/Hero";
import {
  Ateliers,
  Conferences,
  Contact,
  Etapes,
  Interventions,
  Maeva,
  Offrez,
  Pourquoi,
  Publics,
  Temoignages,
} from "@/components/petite-enfance/Sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Accompagnement petite enfance : formations, conférences et ateliers",
  description:
    "Crèches, MAM, RPE, écoles maternelles, centres sociaux et associations : Bavardons Parentalité forme vos équipes, anime conférences et ateliers parents-enfants, et propose Bappoum à vos familles. Devis gratuit sous 48h.",
};

const FAQ = [
  { q: "Pourquoi une PME a-t-elle besoin d'un site internet professionnel ?", a: "Bavardons Parentalité intervient aussi auprès des entreprises et des structures petite enfance : formations, conférences et accès Bappoum. Contactez-nous pour construire une offre adaptée à votre structure." },
  { q: "Les ateliers parents-enfants sont-ils adaptés à tous les âges ?", a: "Oui : chaque atelier est pensé pour une tranche d'âge précise. En structure petite enfance, les activités sont conçues pour les enfants de 0 à 6 ans et animées par Maëva Abadie." },
  { q: "Comment se déroule une séance découverte offerte ?", a: "C'est un premier échange en visio pour comprendre votre structure, vos équipes et les besoins des familles que vous accompagnez. Gratuit et sans engagement." },
  { q: "Quels types d'événements familiaux anime Bavardons Parentalité ?", a: "Journées pédagogiques, ateliers parents, animations enfants et temps d'échanges professionnels, ainsi que des événements familiaux. Plus de 35 événements ont déjà été animés depuis 2024." },
  { q: "Comment Bappoum peut-il aider dans la gestion des écrans ?", a: "Les écrans font partie des thématiques abordées sur Bappoum : lives, podcasts et ressources de professionnels aident les familles à poser des règles claires et adaptées à l'âge de l'enfant." },
  { q: "Comment puis-je accéder aux podcasts de Bappoum ?", a: "Une fois l'accès ouvert, tous les podcasts sont disponibles sur la plateforme, depuis un téléphone, une tablette ou un ordinateur, et restent accessibles en replay." },
  { q: "Quels sont les avantages du coaching parental en ligne ?", a: "Les parents sont accompagnés où qu'ils soient, sans contrainte de déplacement, avec des séances qui s'adaptent à leur emploi du temps et à leur situation familiale." },
  { q: "Le coaching parental est-il remboursé par les assurances ?", a: "Le coaching parental n'est pas pris en charge par l'Assurance maladie, mais certaines mutuelles ou certains employeurs peuvent le financer en partie." },
  { q: "Comment gérer les crises de colère de mon enfant ?", a: "Accueillir l'émotion, rester calme et poser un cadre bienveillant sont les premières clés. Les émotions sont l'une des thématiques que nous abordons avec vos équipes et vos familles." },
];

export default function Page() {
  return (
    <div className={styles.page}>
      <Switch />
      <HeroBlock
        first
        as="h1"
        img="hero"
        alt="Une maman sourit à sa fille, le papa à leurs côtés"
        title="Accompagnement petite enfance : formations, conférences et ateliers pour vos équipes et vos familles"
        text="Parce que le développement de l'enfant ne repose pas uniquement sur les connaissances, mais aussi sur la qualité des échanges entre les professionnels, les parents et l'enfant, Bavardons Parentalité accompagne les structures de la petite enfance grâce à des formations, des conférences et des outils concrets."
      />
      <Pourquoi />
      <HeroBlock
        img="creches"
        alt="Une famille complice échange en souriant"
        title="Crèches, écoles, services petites enfances."
        titleMax={691}
        text="Bavardons Parentalité propose des solutions clés en main pour les entreprises, crèches, écoles et associations qui souhaitent soutenir leurs collaborateurs parents. Webinaires thématiques, ateliers parents-enfants, conférences parentalité et accès collectif à la plateforme Bappoum, des interventions pensées pour le bien-être des familles en milieu professionnel."
        note="Profiter des 15 premiers jours offerts - sans carte bancaire"
      />
      <Interventions />
      <Offrez />
      <Conferences />
      <Ateliers />
      <Maeva />
      <Publics />
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
      <CtaBand contentWidth={820}
        title="Rejoindre Bavardons Parentalité : coaching parental, ateliers parents-enfants et plateforme Bappoum"
        text="Rejoins les 250 familles qui avancent chaque mois avec Bavardons Parentalité : un accompagnement parental bienveillant, concret et adapté à ta réalité."
      />
    </div>
  );
}
