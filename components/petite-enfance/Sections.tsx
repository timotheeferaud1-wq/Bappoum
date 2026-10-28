import type { ReactNode } from "react";
import { Button, CtaButton, LINKS } from "@/components/ui";
import { Avatars } from "@/components/accueil/Hero";
import s from "./petite-enfance.module.css";

/* ---------- Petites briques ---------- */
function Meta({ items, className = "" }: { items: { k: string; v: ReactNode }[]; className?: string }) {
  return (
    <dl className={`${s.meta} ${className}`}>
      {items.map((m) => (
        <div key={m.k} className={s.metaItem}>
          <dt>{m.k}</dt>
          <dd>{m.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Tags({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`${s.tags} ${className}`} role="list">
      {items.map((t) => (
        <li key={t} className={s.zz}>{t}</li>
      ))}
    </ul>
  );
}

const DUREE_FORMAT = [
  { k: "Durée", v: "2h – 4h." },
  { k: "Format", v: "En visio." },
];

/* ---------- Professionnels de la petite enfance ---------- */
export function Pourquoi() {
  return (
    <section className={`container section ${s.pourquoi}`}>
      <img
        className={s.pourquoiImg}
        src="/img/petite-enfance/professionnels.jpg"
        alt="Une famille rit, serrée dans un hamac"
        width={730}
        height={578}
        loading="lazy"
      />
      <div className={s.pourquoiCard}>
        <h2 className="h1">Professionnels de la petite enfance : pourquoi renforcer les compétences de vos équipes ?</h2>
        <div className={s.paras}>
          <p className="p">
            Les professionnels de la petite enfance sont en première ligne face aux familles. Mais accompagner un enfant de 0
            à 6 ans, c&apos;est aussi accompagner ses parents et ça ne s&apos;improvise pas.
          </p>
          <p className="p">
            Une équipe formée au développement de l&apos;enfant, c&apos;est une structure qui prévient l&apos;épuisement
            professionnel, harmonise ses pratiques et renforce la confiance des familles qu&apos;elle accueille.
          </p>
          <p className="p">
            Bavardons Parentalité intervient auprès des crèches, micro-crèches, MAM, RPE, écoles maternelles et centres
            sociaux pour apporter des connaissances concrètes, des outils directement applicables et un meilleur dialogue
            entre professionnels et parents.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Les interventions pour vos structures ---------- */
const INTERVENTIONS = [
  { t: "Formation des professionnels", d: "Crèches, micro-crèches, MAM, RPE, écoles maternelles, centres sociaux" },
  { t: "Conférences et ateliers", d: "Pour vos équipes ou vos familles, en présentiel ou à distance" },
];

export function Interventions() {
  return (
    <section id="interventions" className={`container section ${s.interventions}`}>
      <h2 className={`h1 ${s.interventionsTitle}`}>Les interventions Bavardons Parentalité pour vos structures</h2>
      <ol className={s.numList} role="list">
        {INTERVENTIONS.map((it, i) => (
          <li key={it.t}>
            <h3>
              <span className={s.num} aria-hidden>{i + 1}</span>
              {it.t}
            </h3>
            <p className="p">{it.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- Offrez Bappoum à vos familles ---------- */
const STATS = [
  { b: "24h/24h", t: "Accès replay illimité" },
  { b: "1 thème/mois", t: "Nouveau contenu chaque mois" },
  { b: "Sur devis", t: "Tarif selon le nombre de salariés" },
];

export function Offrez() {
  return (
    <section className="container section">
      <div className={s.offrez}>
        <div className={s.offrezMain}>
          <div className={s.offrezHead}>
            <p className={s.flag}>Abonnement collectif · Tarif sur devis selon le nombre de salariés</p>
            <h2 className={`h1 ${s.rose}`}>Offrez Bappoum à vos familles : le prolongement de votre accompagnement</h2>
          </div>
          <p className="p">
            Vos familles bénéficient d&apos;un accès à Bappoum comprenant des lives avec des professionnels, des podcasts, des
            ressources pratiques et des cafés des parents en visio : accessibles en replay 24h/24, partout, à leur rythme.
            <br />
            Une nouvelle thématique chaque mois. Une façon simple de continuer à accompagner les parents, même une fois rentrés
            à la maison.
          </p>
          <CtaButton href={LINKS.signup} variant="rose" paw note="Devis gratuit sous 48h - Sur mesure">
            Démarrer Bappoum gratuitement
          </CtaButton>
        </div>
        <ul className={s.offrezStats} role="list">
          {STATS.map((st) => (
            <li key={st.b}>
              <p className={s.statBig}>
                <span className={s.icon16} aria-hidden />
                {st.b}
              </p>
              <p className="p">{st.t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Thématiques abordées + Conférences ---------- */
export function Conferences() {
  return (
    <section className={`container section ${s.duo}`}>
      <div className={s.duoSide}>
        <div className={s.themesBox}>
          <h3 className={`${s.h3txt} center`}>Thématiques abordées</h3>
          <Tags className={s.tagsCenter} items={["Sommeil", "Émotions", "Alimentation", "parentalité positive", "Écrans", "Et bien d’autres..."]} />
        </div>
        <img className={s.duoImg} src="/img/petite-enfance/thematiques.jpg" alt="Un petit garçon blotti dans les bras de son parent" width={812} height={326} loading="lazy" />
      </div>
      <div className={s.duoMain}>
        <h2 className="h1">Conférences petite enfance, formations thématiques avec des professionnels</h2>
        <div className={s.duoBody}>
          <p className="p">
            Des interventions en présentiel ou en visio sur les grandes thématiques du développement de l&apos;enfant
            (émotions, écrans, sommeil, alimentation, parentalité positive…). Chaque conférence inclut un temps d&apos;échange
            et de questions avec vos équipes ou vos familles. Disponible en replay pour les absents.
          </p>
          <div className={s.metaWrap}>
            <Meta
              items={[...DUREE_FORMAT, { k: "Inclus", v: "Replay." }, { k: "Participants", v: "De 10 à 500." }]}
            />
            <p className={s.notice}>
              Temps d&apos;échange inclus.&nbsp;Vos collaborateurs posent leurs questions en direct. Ce n&apos;est pas un cours
              magistral, c&apos;est une vraie interaction avec le professionnel.
            </p>
          </div>
        </div>
        <div className={s.btnRow}>
          <Button href={LINKS.signup} variant="jaune-outline">Voir les tarifs</Button>
          <Button href="#contact" variant="jaune">Réserver ma séance découverte offerte</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Ateliers et animations ---------- */
export function Ateliers() {
  return (
    <section className={`container section ${s.ateliers}`}>
      <div className={s.ateliersMain}>
        <div className={s.heroHead}>
          <p className={`${s.statPill} ${s.statPillDark}`}>
            <span>Plus de 35 événements animés depuis 2024.</span>
            <Avatars />
          </p>
          <h2 className="h1">
            Ateliers et animations pour vos structures petite enfance : journées pédagogiques, ateliers parents et activités
            enfants
          </h2>
        </div>
        <div className={s.ateliersBody}>
          <p className="p">
            Des interventions clés en main pour vos équipes et vos familles : journées pédagogiques, ateliers participatifs,
            animations enfants. Les activités sont pensées pour les enfants de 0 à 6 ans et animées par Maëva Abadie. Pour ce
            type d&apos;intervention en présentiel, prévoyez une durée minimale de 2 heures.
          </p>
          <div className={s.ateliersTypes}>
            <p className={s.types}>
              Types d&apos;événements : Journées pédagogiques · Ateliers parents · Animations enfants · Temps d&apos;échanges
              professionnels
            </p>
            <ul className={s.photos} role="list">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i}>
                  <img src={`/img/petite-enfance/atelier-${i}.jpg`} alt="" width={185} height={194} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={s.ateliersSide}>
        <img src="/img/petite-enfance/ateliers.jpg" alt="Des participants découvrent les activités d'un atelier" width={605} height={360} loading="lazy" />
        <p className={s.lead}>
          Vous gérez une crèche, une école maternelle ou un centre social et cherchez une intervention adaptée à vos équipes
          ou vos familles ?
        </p>
        <div className={s.stackBtns}>
          <Button href="#interventions" variant="jaune-outline">Découvrir nos interventions en petite enfance</Button>
          <Button href="#contact" variant="jaune">Demander un devis gratuit</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Thématiques RH + conférences par Maëva ---------- */
export function Maeva() {
  return (
    <section className={`container section ${s.duo} ${s.duoAlt}`}>
      <div className={s.duoSide}>
        <div className={s.themesBox}>
          <h3 className={s.h3txt}>Thématiques adaptées à vos enjeux RH</h3>
          <Tags items={["charge mentale parentale", "communication familiale", "équilibre vie pro/vie perso"]} />
        </div>
        <img className={`${s.duoImg} ${s.duoImgLow}`} src="/img/petite-enfance/enjeux.jpg" alt="" width={764} height={197} loading="lazy" />
      </div>
      <div className={s.duoMain}>
        <div className={s.maevaHead}>
          <h2 className="h1">Conférences petite enfance animées par Maëva Abadie, en présentiel ou visio</h2>
          <img src="/img/petite-enfance/maeva.jpg" alt="Portrait de Maëva Abadie" width={162} height={162} loading="lazy" />
        </div>
        <div className={s.duoBody}>
          <p className="p">
            Une conférence sur mesure animée par Maëva Abadie, diplômée en psychologie spécialisée dans le développement de
            l&apos;enfant et de l&apos;adolescent.
          </p>
          <Meta items={DUREE_FORMAT} />
        </div>
        <div className={s.btnRow}>
          <Button href={LINKS.signup} variant="jaune-outline">Voir les tarifs</Button>
          <Button href="#contact" variant="jaune">Réserver ma séance découverte offerte</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- À qui s'adressent les interventions ---------- */
const PUBLICS = [
  {
    label: "Accompagner vos équipes et les familles",
    t: "Crèches et micro-crèches",
    chip: "Formations · Conférences · Bappoum",
    d: "Vous accueillez des enfants de 0 à 3 ans et souhaitez renforcer les compétences de vos équipes sur le développement de l'enfant, la gestion des émotions et la communication avec les familles. Bavardons Parentalité intervient directement dans votre structure.",
  },
  {
    label: "Proposer Bappoum à vos familles",
    t: "MAM et Relais Petite Enfance",
    chip: "Formations · Accès Bappoum · Ateliers",
    d: "Vous souhaitez proposer un accompagnement parental à vos familles et harmoniser les pratiques de votre équipe. Bavardons Parentalité propose des tarifs adaptés à chaque structure.",
  },
  {
    label: "Former les équipes sur les thématiques parentales",
    t: "Écoles maternelles et centres sociaux",
    chip: "Webinaires · Conférences · Bappoum",
    d: "Vous accompagnez des familles au quotidien et souhaitez renforcer les compétences de vos équipes sur les thématiques parentales : émotions, communication, développement de l'enfant. Bavardons Parentalité intervient auprès de vos équipes et des parents que vous accompagnez.",
  },
  {
    label: "Pour les familles en situation de vulnérabilité",
    t: "Associations et institutions",
    chip: "Webinaires · Accès Bappoum · Conférences",
    d: "Vous œuvrez pour des familles qui ont besoin d'un soutien parental accessible et bienveillant. Bavardons Parentalité propose des interventions adaptées à vos publics et à vos contraintes budgétaires.",
  },
  {
    label: "Former les futurs pros de l'enfance",
    t: "Écoles de la petite enfance",
    chip: "Conférences · Cours · Ateliers",
    d: "Vous formez les futurs auxiliaires de puériculture, EJE et CAP AEPE. Bavardons Parentalité intervient dans vos cursus pour sensibiliser vos élèves aux enjeux de la parentalité et du développement de l'enfant.",
  },
];

export function Publics() {
  return (
    <section className="container section">
      <div className={s.publicsHead}>
        <h2 className="h1">Accompagnement petite enfance : à qui s&apos;adressent les interventions de Bavardons Parentalité</h2>
        <p className="p">
          Bavardons Parentalité intervient auprès de toute structure accueillant de jeunes enfants et souhaitant renforcer les
          compétences de ses équipes ou soutenir les familles qu&apos;elle accompagne.
        </p>
      </div>
      <ul className={s.publics} role="list">
        {PUBLICS.map((p) => (
          <li key={p.t} className={s.public}>
            <div className={s.publicMedia}>
              <img src="/img/petite-enfance/thematiques.jpg" alt="" width={323} height={250} loading="lazy" />
              <p className={s.publicLabel}>{p.label}</p>
            </div>
            <div className={s.publicBody}>
              <h3 className={s.publicTitle}>
                <span className={s.icon16} aria-hidden />
                {p.t}
              </h3>
              <span className={s.chipDark}>{p.chip}</span>
              <p className="p">{p.d}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Comment mettre en place un accompagnement ---------- */
export function Etapes() {
  return (
    <section className="container section">
      <div className={s.etapesHead}>
        <h2 className="h1">Comment mettre en place un accompagnement petite enfance avec Bavardons Parentalité</h2>
        <p className="p">
          De la première prise de contact à l&apos;intervention, nous faisons en sorte que le processus soit simple, rapide et
          sans friction pour vos équipes. Un interlocuteur unique, un devis clair, une intervention clés en main.
        </p>
      </div>
      <ol className={s.etapes} role="list">
        <li className={s.etape}>
          <div className={s.etapeText}>
            <h3 className={s.etapeTitle}>
              <span className={`${s.num} ${s.numRose}`} aria-hidden>1</span>
              Étape 1 - Appel découverte offert de 30 minutes : comprendre votre structure
            </h3>
            <p className="p">
              Un premier échange en visio pour comprendre votre contexte, vos équipes et les besoins spécifiques des familles
              que vous accompagnez. Aucun engagement : juste une conversation pour voir si et comment Bavardons Parentalité
              peut intervenir auprès de vous.
            </p>
          </div>
          <div className={s.etapeFoot}>
            <Meta items={DUREE_FORMAT} />
            <CtaButton href="#contact" variant="jaune-outline" note="Gratuit et sans engagement" noteColor="var(--orange)">
              Réserver mon appel découverte
            </CtaButton>
          </div>
        </li>
        <li className={s.etape}>
          <div className={s.etapeText}>
            <h3 className={s.etapeTitle}>
              <span className={`${s.num} ${s.numRose}`} aria-hidden>2</span>
              Etape 2 - Devis personnalisé sous 48h, adapté à votre budget et vos objectifs RH.
            </h3>
            <p className="p">
              Sur la base de notre échange, nous vous proposons un programme d&apos;intervention adapté à votre structure, votre
              budget et vos objectifs. Choix du format, des thématiques, du calendrier — tout est pensé pour s&apos;intégrer
              facilement dans votre organisation. Délai : 48h · Devis gratuit et sans engagement
            </p>
          </div>
          <div className={s.etapeFoot}>
            <p className={s.dotLine}>
              <span>
                Devis <b>gratuit sous 48h</b> et <b>sans engagement</b>
              </span>
            </p>
          </div>
        </li>
        <li className={s.etape}>
          <div className={s.etapeText}>
            <h3 className={s.etapeTitle}>
              <span className={`${s.num} ${s.numRose}`} aria-hidden>3</span>
              Etape 3 - Intervention clés en main, en présentiel ou en visio
            </h3>
            <p className="p">
              Bavardons Parentalité prend en charge l&apos;intégralité de l&apos;intervention : préparation, animation, supports
              et compte-rendu. Vous n&apos;avez qu&apos;à communiquer en interne et accueillir vos collaborateurs. En présentiel
              (Sud Ouest, Paris, Hauts de France) ou en visio.
            </p>
          </div>
          <div className={s.etapeFoot}>
            <Meta className={s.metaSpread} items={[{ k: "Durée", v: "2h – 4h." }, { k: "Format", v: "Présentiel ou en visio." }]} />
            <Button href="#contact" variant="jaune-outline" className={s.full}>Réserver ma séance découverte offerte</Button>
          </div>
        </li>
      </ol>
      <div className={s.etapesCta}>
        <CtaButton href="#contact" variant="jaune" note="Échange gratuit et sans engagement" noteColor="var(--orange)">
          Parlons de votre projet
        </CtaButton>
      </div>
    </section>
  );
}

/* ---------- Témoignages ---------- */
const TEMOS = [
  { img: "temoin-sophie", n: "Sophie Lemaire", q: "“La plateforme Bappoum est une mine d'informations et de conseils. Les lives sont interactifs et les podcasts très pratiques.”", bear: true },
  { img: "temoin-antoine", n: "Antoine Garnier", q: "“Grâce au coaching individuel, j'ai appris à mieux gérer mes émotions et à communiquer avec mes enfants.”", bear: false },
  { img: "temoin-lucas", n: "Lucas Moreau", q: "“Les ateliers ont renforcé notre lien parent-enfant. Une expérience inoubliable et enrichissante pour toute la famille !”", bear: true },
];

function TemoName({ name, bear }: { name: string; bear: boolean }) {
  return (
    <h3 className={s.temoName}>
      <span className={bear ? s.iconBear : s.icon16} aria-hidden />
      {name}
    </h3>
  );
}

export function Temoignages() {
  return (
    <section className={`container section ${s.temoignages}`}>
      <div className={s.temoLeft}>
        <div className={s.temoHead}>
          <h2 className="h1">Ce que les structures petite enfance disent de leurs interventions avec Bavardons Parentalité</h2>
          <div className={s.stats}>
            <p>250+ familles accompagnées · 35+ événements animés · 25+ ateliers organisés · 65 comptes actifs</p>
            <Avatars large />
          </div>
        </div>
        <figure className={`${s.temo} ${s.temoBig}`}>
          <img src="/img/petite-enfance/temoin-chloe.jpg" alt="" width={392} height={407} loading="lazy" />
          <figcaption>
            <TemoName name="Chloé Dubeau" bear={false} />
            <blockquote className="p">
              « Bavardons Parentalité a changé notre vie de famille. Les outils sont pratiques et performants. Bavardons
              Parentalité a changé notre vie de famille. Les outils sont pratiques et performantBavardons Parentalité a changé
              notre vie de famille. Les outils sont pratiques et performantBavardons Parentalité a changé notre vie de famille.
            </blockquote>
          </figcaption>
        </figure>
      </div>
      <div className={s.temoRight}>
        {TEMOS.map((t) => (
          <figure key={t.n} className={`${s.temo} ${t.bear ? s.temoPeach : ""}`}>
            <img src={`/img/petite-enfance/${t.img}.jpg`} alt="" width={250} height={180} loading="lazy" />
            <figcaption>
              <TemoName name={t.n} bear={t.bear} />
              <blockquote className="p">{t.q}</blockquote>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------- Prise de contact ---------- */
export function Contact() {
  return (
    <section id="contact" className={`container section ${s.contactSection}`}>
      <div className={s.contactHead}>
        <h2 className="h1 center">
          Échanger avec Maëva - coaching parental individuel, questions sur Bappoum et demandes d&apos;accompagnement
        </h2>
        <p className="p">
          Que tu cherches un abonnement, un coaching, une animation pour ton événement ou une intervention en entreprise —
          dis-nous ce dont tu as besoin, on revient vers toi sous 48h.
        </p>
      </div>
      <div className={s.contact}>
        <div className={s.contactCol}>
          <h3 className={`${s.h3txt} center`}>Poser une question sur l’accompagnement parental</h3>
          <form className={s.form} action="">
            <div className={s.fields}>
              <label className={s.field}>
                <span>Nom*</span>
                <input type="text" name="nom" placeholder="trucmuche" required autoComplete="family-name" />
              </label>
              <label className={s.field}>
                <span>Prénom*</span>
                <input type="text" name="prenom" placeholder="trucmuche" required autoComplete="given-name" />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                <span>Votre email*</span>
                <input type="email" name="email" placeholder="trucmuche@gmail.com" required autoComplete="email" />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                <span>Téléphone</span>
                <input type="tel" name="telephone" placeholder="trucmuche@gmail.com" autoComplete="tel" />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                <span>Besoins*</span>
                <input type="text" name="besoins" placeholder="trucmuche@gmail.com" required />
              </label>
            </div>
            <button type="button" className={s.submit}>On vous rappelle</button>
          </form>
        </div>
        <div className={s.contactCol}>
          <h3 className={s.h3txt}>Réserver votre séance découverte de coaching parental,&nbsp; 15 minutes offertes</h3>
          <img
            className={s.calendar}
            src="/img/petite-enfance/calendrier.jpg"
            alt="Calendrier de réservation d'une séance découverte"
            width={812}
            height={668}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
