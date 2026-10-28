import Link from "next/link";
import { Button, CtaButton, LINKS } from "@/components/ui";
import { Avatars } from "@/components/accueil/Hero";
import s from "./entreprises.module.css";

const IMG = "/img/entreprises";

/* ---------- Petits éléments réutilisés ---------- */

/** Infos « Durée / Format / … » : pastille orange + libellé, valeur dessous. */
function Infos({ items }: { items: [string, string][] }) {
  return (
    <dl className={s.infos}>
      {items.map(([k, v]) => (
        <div key={k} className={s.info}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Liste de thématiques (icône « zZ » orange). */
function Topics({ items, center = false }: { items: string[]; center?: boolean }) {
  return (
    <ul className={`${s.topics}${center ? ` ${s.topicsCenter}` : ""}`} role="list">
      {items.map((t) => (
        <li key={t}>
          <span className={s.zz} aria-hidden />
          {t}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Bascule Entreprise / Petite enfance + Hero ---------- */
export function Hero() {
  return (
    <>
      <nav className={s.switch} aria-label="Choisir votre structure">
        <Link href="/entreprises" className={s.switchActive} aria-current="page">
          Entreprise
        </Link>
        <Link href="/petite-enfance">Petite enfance</Link>
      </nav>
      <section className={`container ${s.hero}`}>
        <div className={s.heroText}>
          <div className={s.heroHead}>
            <p className={s.heroPill}>
              <span>250+ familles accompagnées · 35+ événements animés · Interventions en visio et en présentiel</span>
              <Avatars />
            </p>
            <h1 className="h1">
              Accompagnement parental en entreprise - webinaires, conférences et ateliers parentalité pour vos
              collaborateurs.
            </h1>
          </div>
          <p className="p">
            Bavardons Parentalité propose des solutions clés en main pour les entreprises, crèches, écoles et associations
            qui souhaitent soutenir leurs collaborateurs parents. Webinaires thématiques, ateliers parents-enfants,
            conférences parentalité et accès collectif à la plateforme Bappoum, des interventions pensées pour le
            bien-être des familles en milieu professionnel.
          </p>
          <div className={s.ctaRow}>
            <Button href="#interventions" variant="jaune-outline" className={s.btnLight}>
              Voir nos interventions
            </Button>
            <CtaButton href={LINKS.contact} variant="jaune" note="Profiter des 15 premiers jours offerts - sans carte bancaire">
              Discutons de votre projet
            </CtaButton>
          </div>
        </div>
        <img
          className={s.heroImg}
          src={`${IMG}/hero.jpg`}
          alt="Une mère, son mari et leur fille échangent en souriant"
          width={792}
          height={736}
        />
      </section>
    </>
  );
}

/* ---------- Parentalité et vie professionnelle ---------- */
export function Pourquoi() {
  return (
    <section className={`container section ${s.pourquoi}`}>
      <img
        className={s.pourquoiImg}
        src={`${IMG}/famille.jpg`}
        alt="Une famille rit, serrée sur un hamac"
        width={729}
        height={826}
        loading="lazy"
      />
      <div className={s.pourquoiCard}>
        <h2 className="h1">
          Parentalité et vie professionnelle- Pourquoi soutenir vos collaborateurs parents améliore la rétention et
          réduit l&apos;absentéisme
        </h2>
        <div className={s.pourquoiText}>
          <p className="p">
            À l&apos;origine, je voulais être la main tendue que je n&apos;avais pas eue enfant, en travaillant dans la
            protection de l&apos;enfance.
          </p>
          <p className="p">
            Mais au fil de mes recherches et de mes stages, j&apos;ai compris quelque chose d&apos;essentiel : si je
            voulais réellement aider les enfants à grandir dans un environnement bienveillant et rempli d&apos;amour,
            c&apos;était d&apos;abord les parents que je devais accompagner.
          </p>
          <p className="p">
            On ne naît pas parent, on le devient. Et comme tout, ça s&apos;apprend. Sauf qu&apos;en réalité, on est
            souvent influencés par notre éducation, par la société, par des schémas qu&apos;on reproduit sans même
            s&apos;en rendre compte. Certains parents pensent bien faire sans mesurer l&apos;impact de leurs actions.
            D&apos;autres veulent bien faire mais ne savent pas comment.
          </p>
          <p className="p">
            Et d&apos;autres encore ressentent simplement le besoin de mieux comprendre le développement de leur enfant.
            Avec Bavardons Parentalité, j&apos;ai voulu créer un espace où chaque parent peut trouver du soutien, des
            clés concrètes et surtout une écoute sans jugement. Un endroit où l&apos;on peut poser ses questions, partager
            ses doutes et avancer, pas à pas, vers une parentalité plus sereine et plus alignée
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Les interventions pour vos équipes ---------- */
const FORMATS = [
  { img: "format-presentiel", t: "Présentiel", d: "Fêtes de Noël, séminaires, journées famille. Des animations parents-enfants clés en main, partout en Maine-et-Loire et alentours." },
  { img: "format-visio", t: "Visio", d: "lives thématiques, replay inclus. Vos collaborateurs participent depuis chez eux, sans contrainte d'agenda." },
  { img: "format-equipe", t: "Equipe de toutes tailles", d: "De 10 à 500 participants. On adapte le format à votre structure, votre budget et vos objectifs RH." },
];

export function Interventions() {
  return (
    <section id="interventions" className={`container section ${s.interv}`} style={{ scrollMarginTop: 140 }}>
      <div className={s.intervText}>
        <h2 className="h1">Les interventions Bavardons Parentalité pour vos équipes</h2>
        <div className={s.intervBody}>
          <h3 className={s.numbered}>
            <span className={s.num}>1</span>
            <span> Des formats adaptés à chaque structure et chaque budget </span>
          </h3>
          <p className="p">
            Bavardons Parentalité propose des solutions clés en main pour accompagner vos collaborateurs parents :
            adaptées à votre contexte, votre budget et vos objectifs RH. Des formats souples, en présentiel ou en visio,
            pour des équipes de toutes tailles.
          </p>
        </div>
      </div>
      <ul className={s.formats} role="list">
        {FORMATS.map((f) => (
          <li key={f.t} className={s.format}>
            <img src={`${IMG}/${f.img}.jpg`} alt="" width={391} height={117} loading="lazy" />
            <div>
              <h3 className={s.formatTitle}>
                <span className={s.ours} aria-hidden />
                {f.t}
              </h3>
              <p className="p">{f.d}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Accès collectif à Bappoum ---------- */
const STATS = [
  { n: "24h/24h", d: "Accès replay illimité" },
  { n: "1 thème/mois", d: "Nouveau contenu chaque mois" },
  { n: "Sur devis", d: "Tarif selon le nombre de salariés" },
];

export function Collectif() {
  return (
    <section className="container section">
      <div className={s.collectif}>
        <div className={s.collectifMain}>
          <div className={s.collectifHead}>
            <p className={s.tagLine}>Abonnement collectif · Tarif sur devis selon le nombre de salariés</p>
            <h2 className={`h1 ${s.rose}`}>
              Accès collectif à Bappoum pour vos salariés : plateforme d&apos;accompagnement parental mensuel
            </h2>
          </div>
          <p className="p">
            Offrez à vos collaborateurs parents un accès à Bappoum, la plateforme d&apos;accompagnement parental mensuel.
            Lives avec des professionnels, podcasts, ressources pratiques, cafés des parents en visio : accessibles en
            replay 24h/24, partout, à leur rythme.
          </p>
          <CtaButton href={LINKS.signup} variant="rose" paw note="Devis gratuit sous 48h - Sur mesure">
            Démarrer Bappoum gratuitement
          </CtaButton>
        </div>
        <ul className={s.stats} role="list">
          {STATS.map((x) => (
            <li key={x.n}>
              <p className={s.statN}>
                <span className={s.paw16} aria-hidden />
                {x.n}
              </p>
              <p className="p">{x.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Webinaires ---------- */
export function Webinaires() {
  return (
    <section className={`container section ${s.duo}`}>
      <div className={s.duoSide}>
        <div className={s.topicsBlock}>
          <h3 className={`${s.h3txt} center`}>Thématiques abordées</h3>
          <Topics center items={["Sommeil", "Émotions", "Adolescence", "parentalité positive", "Écrans", "Et bien d’autres..."]} />
        </div>
        <img className={s.sideImg} src={`${IMG}/thematiques.jpg`} alt="Un petit garçon blotti dans les bras de son parent" width={812} height={300} loading="lazy" />
      </div>
      <div className={s.duoMain}>
        <h2 className="h1">Webinaires parentalité en entreprise, lives thématiques avec des professionnels</h2>
        <p className="p">
          Des interventions en visio sur les grandes thématiques de la parentalité (sommeil, émotions, écrans,
          adolescence, parentalité positive…). Chaque webinaire inclut un temps d&apos;échange et de questions avec vos
          collaborateurs. Disponible en replay pour les absents.
        </p>
        <div>
          <Infos items={[["Durée", "2h – 4h."], ["Format", "En visio."], ["Inclus", "Replay."], ["Participants", "De 10 à 500."]]} />
          <p className={s.callout}>
            Temps d&apos;échange inclus. Vos collaborateurs posent leurs questions en direct. Ce n&apos;est pas un cours
            magistral, c&apos;est une vraie interaction avec le professionnel.
          </p>
        </div>
        <div className={s.btnRow}>
          <Button href={LINKS.signup} variant="jaune-outline" className={s.btnLight}>Voir les tarifs</Button>
          <Button href={LINKS.booking} variant="jaune">Réserver ma séance découverte offerte</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Animation événements d'entreprise ---------- */
export function Evenements() {
  return (
    <section className={`container section ${s.events}`}>
      <div className={s.eventsMain}>
        <div className={s.eventsHead}>
          <p className={s.eventPill}>
            <span>Plus de 35 événements animés depuis 2024.</span>
            <Avatars />
          </p>
          <h2 className="h1">
            Animation parents-enfants pour vos événements d&apos;entreprise : fêtes, séminaires et journées famille
          </h2>
        </div>
        <p className="p">
          Des animations clés en main pour vos événements d&apos;équipe : fêtes de Noël, séminaires, journées famille,
          team building. Les activités ludiques et créatives sont pensées pour les enfants de 0 à 18 ans et animées par
          Maëva Abadie. Pour ce type d’intervention en présentiel, prévoyez une durée minimale de 2 heures.
        </p>
        <div className={s.eventsTypes}>
          <p className={s.eventsLabel}>Types d&apos;événements : fêtes de Noël, séminaires, journées famille, team building</p>
          <ul className={s.eventsGallery} role="list">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i}>
                <img src={`${IMG}/event-${i}.jpg`} alt="" width={185} height={193} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.eventsSide}>
        <img src={`${IMG}/event-main.jpg`} alt="Atelier parents-enfants lors d'un événement d'entreprise" width={605} height={326} loading="lazy" />
        <p className={s.eventsQ}>
          Vous organisez un événement professionnel et cherchez une animation enfants pour vos collaborateurs parents ?
        </p>
        <div className={s.eventsBtns}>
          <Button href="#interventions" variant="jaune-outline" className={s.btnLight}>Découvrir nos interventions en entreprise</Button>
          <Button href={LINKS.contact} variant="jaune">Demander un devis gratuit</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Conférences ---------- */
export function Conferences() {
  return (
    <section className={`container section ${s.duo} ${s.duoConf}`}>
      <div className={s.duoSide}>
        <div className={s.topicsBlock}>
          <h3 className={s.h3txt}>Thématiques adaptées à vos enjeux RH</h3>
          <Topics items={["charge mentale parentale", "communication familiale", "équilibre vie pro/vie perso"]} />
        </div>
        <img className={`${s.sideImg} ${s.sideImgLow}`} src={`${IMG}/rh.jpg`} alt="" width={764} height={197} loading="lazy" />
      </div>
      <div className={s.duoMain}>
        <div className={s.confHead}>
          <h2 className="h1">Conférences parentalité animées par Maëva Abadie, en présentiel ou visio</h2>
          <img src={`${IMG}/maeva.jpg`} alt="Portrait de Maëva Abadie" width={162} height={162} loading="lazy" />
        </div>
        <p className="p">
          Une conférence sur mesure animée par Maëva Abadie, diplômée en psychologie spécialisée dans le développement
          de l&apos;enfant et de l&apos;adolescent.
        </p>
        <Infos items={[["Durée", "2h – 4h."], ["Format", "En visio."]]} />
        <div className={s.btnRow}>
          <Button href={LINKS.signup} variant="jaune-outline" className={s.btnLight}>Voir les tarifs</Button>
          <Button href={LINKS.booking} variant="jaune">Réserver ma séance découverte offerte</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- À qui s'adressent les interventions ---------- */
const CIBLES = [
  { img: "cible-rh", label: "Réduire l'absentéisme parental et fidéliser vos talents.", t: "Responsables RH et QVT", d: "Vous cherchez à réduire l'absentéisme lié à la parentalité, améliorer la qualité de vie au travail et fidéliser vos talents parents. Les interventions Bavardons Parentalité s'intègrent directement dans votre politique QVCT : sous forme de webinaires, conférences ou accès collectif à Bappoum." },
  { img: "cible-cse", label: "Proposer Bappoum comme avantage salarié", t: "CSE et représentants du personnel", d: "Vous souhaitez proposer un avantage différenciant aux salariés parents de votre entreprise. Bavardons Parentalité propose des tarifs CSE négociés pour un accès collectif à Bappoum ou des ateliers thématiques réservés à vos membres." },
  { img: "cible-ecoles", label: "Former les équipes sur les thématiques parentales", t: "Écoles, crèches et structures petite enfance", d: "Vous accompagnez des familles au quotidien et souhaitez renforcer les compétences de vos équipes sur les thématiques parentales : émotions, communication, développement de l'enfant. Bavardons Parentalité auprès de vos équipes et des parents que vous accompagnez." },
  { img: "cible-associations", label: "Pour les familles en situation de vulnérabilité", t: "Associations et institutions, interventions parentalité", d: "Vous œuvrez pour des familles qui ont besoin d'un soutien parental accessible et bienveillant. Bavardons Parentalité propose des interventions adaptées à vos publics et à vos contraintes budgétaires." },
];

export function Cibles() {
  return (
    <section className="container section">
      <div className={s.ciblesHead}>
        <h2 className="h1">
          Accompagnement parental en entreprise : à qui s&apos;adressent les interventions de Bavardons Parentalité
        </h2>
        <p className="p">
          Bavardons Parentalité intervient auprès de tout type de structure souhaitant soutenir ses collaborateurs ou
          membres dans leur vie de famille, entreprises privées, institutions publiques, structures éducatives et
          associations.
        </p>
      </div>
      <ul className={s.cibles} role="list">
        {CIBLES.map((c) => (
          <li key={c.t} className={s.cible}>
            <div className={s.cibleMedia}>
              <img src={`${IMG}/${c.img}.jpg`} alt="" width={410} height={250} loading="lazy" />
              <p className={s.cibleLabel}>{c.label}</p>
            </div>
            <div className={s.cibleBody}>
              <h3>
                <span className={s.paw16} aria-hidden />
                {c.t}
              </h3>
              <span className={s.cibleChip}>Webinaires · Accès Bappoum · Conférences</span>
              <p className="p">{c.d}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Mise en place en 3 étapes ---------- */
const INFO_ETAPE: [string, string][] = [["Durée", "2h – 4h."], ["Format", "En visio. ou en présentiel"]];

export function Etapes() {
  return (
    <section className="container section">
      <div className={s.etapesHead}>
        <h2 className="h1">Comment mettre en place un accompagnement parental en entreprise avec Bavardons Parentalité</h2>
        <p className="p">
          De la première prise de contact à l&apos;intervention, nous faisons en sorte que le processus soit simple,
          rapide et sans friction pour les équipes RH. Un interlocuteur unique, un devis clair, une intervention clés en
          main.
        </p>
      </div>
      <ol className={s.etapes}>
        <li className={s.etape}>
          <div className={s.etapeTop}>
            <h3 className={s.etapeTitle}>
              <span className={s.numRose}>1</span>
              <span>Étape 1 - Appel découverte offert de 30 minutes : comprendre vos besoins</span>
            </h3>
            <p className="p">
              Un premier échange en visio pour comprendre votre contexte, vos enjeux RH et les besoins spécifiques de vos
              collaborateurs parents. Aucun engagement : juste une conversation pour voir si et comment Bavardons
              Parentalité peut vous accompagner Durée : 30 min · En visio · Gratuit et sans engagement
              <br />
              Réserver mon appel découverte
            </p>
          </div>
          <div className={s.etapeBottom}>
            <Infos items={INFO_ETAPE} />
            <Button href={LINKS.booking} variant="jaune">Réserver mon appel découverte</Button>
          </div>
        </li>
        <li className={s.etape}>
          <div className={s.etapeTop}>
            <h3 className={s.etapeTitle}>
              <span className={s.numRose}>2</span>
              <span>Devis personnalisé sous 48h, adapté à votre structure et vos objectifs</span>
            </h3>
            <p className="p">
              Sur la base de notre échange, nous vous proposons un programme d&apos;intervention adapté à votre structure,
              vos thématiques et votre calendrier — tout est pensé pour s&apos;intégrer facilement dans votre organisation.
            </p>
          </div>
          <div className={s.etapeBottom}>
            <Button href={LINKS.booking} variant="jaune">Réserver ma séance découverte offerte</Button>
          </div>
        </li>
        <li className={s.etape}>
          <div className={s.etapeTop}>
            <h3 className={`${s.etapeTitle} ${s.etapeTitleShort}`}>
              <span className={s.numRose}>3</span>
              <span>Etape 3 - Intervention clés en main, en présentiel ou en visio</span>
            </h3>
            <p className="p">
              Bavardons Parentalité prend en charge l&apos;intégralité de l&apos;intervention : préparation, animation,
              supports et compte-rendu. Vous n&apos;avez qu&apos;à accueillir vos équipes et vos familles. En présentiel
              (Sud Ouest, Paris, Hauts de France) ou en visio
            </p>
          </div>
          <div className={s.etapeBottom}>
            <Infos items={INFO_ETAPE} />
            <Button href={LINKS.booking} variant="jaune" className={s.btnFull}>Réserver ma séance découverte offerte</Button>
          </div>
        </li>
      </ol>
      <div className={s.etapesCta}>
        <CtaButton href={LINKS.signup} variant="rose" paw note="Profiter des 15 premiers jours offerts - sans carte bancaire">
          Créer un compte gratuit
        </CtaButton>
      </div>
    </section>
  );
}
