import Link from "next/link";
import { Button, LINKS, Paw } from "@/components/ui";
import { Avatars } from "@/components/accueil/Hero";
import s from "./accompagnements.module.css";

/* ---------- Intro : titre de page + 3 cartes (coaching, ateliers, événements) ---------- */
const CARTES = [
  {
    img: "carte-coaching",
    href: "#coaching",
    t: "Coaching parental individuel en visio ou en présentiel",
    d: "Un accompagnement personnalisé en visio ou en présentiel, adapté à ta situation familiale. Gestion des crises",
  },
  {
    img: "carte-ateliers",
    href: "#ateliers",
    t: "Ateliers parents-enfants : se reconnecter en famille",
    d: "Des ateliers thématiques en présentiel pour sortir du quotidien et se reconnecter en famille. Cuisine, activités manuelles, escape games, chasses au trésor.",
  },
  {
    img: "carte-evenements",
    href: "#evenements",
    t: "Animation d'événements familiaux et interventions en entreprise",
    d: "Animations clés en main pour mariages, baptêmes, anniversaires, événements d'entreprise et interventions en milieu professionnel. Plus de 35 événements animés.",
  },
];

function Arrow() {
  return (
    <svg className={s.arrow} width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <circle cx="18" cy="18" r="18" fill="var(--jaune)" />
      <path d="M12.5 23.5l11-11M14 12.5h9.5V22" stroke="var(--blanc)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Intro() {
  return (
    <section className={`container ${s.intro}`}>
      <div className={s.introHead}>
        <div className={s.introTitle}>
          <p className={`pill ${s.pill}`}>
            + 250 familles accompagnées · Séance découverte offerte
            <Avatars />
          </p>
          <h1 className="h1 center">
            <span className={s.orange}>Accompagnements parentaux </span>- coaching individuel, ateliers parents-enfants et
            animation événementielle
          </h1>
        </div>
        <p className={`p ${s.introLead}`}>
          Je vous propose des accompagnements parentaux adaptés à chaque situation et à chaque famille. Que vous traversiez un
          défi parental précis, que vous cherchiez à renforcer les liens familiaux ou que vous organisiez un événement nous
          avons un accompagnement pensé pour ta réalité de parent.
        </p>
      </div>
      <div className={s.cartes}>
        {CARTES.map((c) => (
          <Link key={c.t} href={c.href} className={s.carte}>
            <img src={`/img/accompagnements/${c.img}.jpg`} alt="" width={493} height={150} />
            <div className={s.carteBody}>
              <div className={s.carteTitle}>
                <h2 className={s.h4}>{c.t}</h2>
                <Arrow />
              </div>
              <p className="p">{c.d}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ---------- Coaching parental individuel + thématiques ---------- */
const THEMES: [string, "rose" | "orange"][] = [
  ["Gestion des crises et des conflits familiaux", "rose"],
  ["Communication parent-enfant", "orange"],
  ["Gestion des émotions de l'enfant", "rose"],
  ["Établissement de limites saines", "orange"],
  ["Transitions familiales (divorce, déménagement, naissance…)", "rose"],
  ["Parentalité en solo", "orange"],
  ["Gestion des écrans", "orange"],
  ["Gestion du stress parental", "rose"],
];

export function Coaching() {
  return (
    <section id="coaching" className={`container section ${s.anchor} ${s.coaching}`}>
      <div className={s.coachCard}>
        <div className={s.coachTop}>
          <h2 className="h1">
            <span className={s.orange}>Coaching parental </span>individuel avec Maëva Abadie, séances en visio sur toute la
            France
          </h2>
          <img className={s.maeva} src="/img/accompagnements/maeva.jpg" alt="Portrait de Maëva Abadie" width={270} height={270} loading="lazy" />
        </div>
        <p className="p">
          L&apos;accompagnement parental individuel s&apos;adresse aux parents qui traversent des difficultés et qui cherchent
          des outils concrets, adaptés à leur situation familiale. Chaque séance dure 45 minutes et se termine par un
          récapitulatif écrit avec des ressources directement applicables.
        </p>
        <div className={s.btns}>
          <Button href="#tarifs" variant="jaune-outline" className={s.btnOutline}>Voir les tarifs</Button>
          <Button href={LINKS.booking} variant="jaune">Réserver ma séance découverte offerte</Button>
        </div>
      </div>
      <div className={s.themes}>
        <h3 className={s.themesTitle}>Thématiques abordées</h3>
        <ul className={s.themeList} role="list">
          {THEMES.map(([t, c]) => (
            <li key={t} className={c === "rose" ? s.themeRose : s.themeOrange}>
              <span className={s.zz} aria-hidden />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Ateliers parents-enfants ---------- */
export function Ateliers() {
  return (
    <section id="ateliers" className={`container section ${s.anchor} ${s.ateliers}`}>
      <div className={s.ateliersImgs}>
        <img className={s.atelierSmall} src="/img/accompagnements/ateliers.jpg" alt="" width={375} height={341} loading="lazy" />
        <img className={s.atelierBig} src="/img/accompagnements/ateliers.jpg" alt="Une famille rit ensemble, assise dans un hamac" width={375} height={438} loading="lazy" />
      </div>
      <div className={s.ateliersText}>
        <h2 className="h1">
          <span className={s.orange}>Ateliers parents-enfants</span> en présentiel, activités ludiques pour renforcer les
          liens familiaux
        </h2>
        <p className="p">
          Les ateliers parents-enfants sont des moments collectifs pensés pour sortir du quotidien, s&apos;éloigner du stress et
          des écrans et se reconnecter en famille autour d&apos;activités ludiques et enrichissantes. Chaque atelier est animé et
          conçu pour créer des souvenirs inoubliables dans une ambiance chaleureuse et conviviale. Les ateliers se terminent
          par un goûter ou un apéritif partagé.
        </p>
        <div className={s.btns}>
          <Button href="#tarifs" variant="jaune-outline" className={s.btnOutline}>Voir les tarifs</Button>
          <Button href={LINKS.contact} variant="jaune">Voir les prochaines dates</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Animation événementielle ---------- */
export function Evenements() {
  return (
    <section id="evenements" className={`container section ${s.anchor} ${s.events}`}>
      <div className={s.eventsMain}>
        <div className={s.eventsHead}>
          <p className={`pill ${s.pill}`}>
            Plus de 35 événements animés depuis 2024.
            <Avatars />
          </p>
          <h2 className="h1">
            <span className={s.orange}>Animation enfants</span> pour mariages, baptêmes, anniversaires et événements
            d&apos;entreprise : sud ouest, Paris, haut de france
          </h2>
        </div>
        <div className={s.eventsBody}>
          <p className="p">
            Bavardons Parentalité propose des animations enfants clés en main, entièrement personnalisées selon le thème de
            votre événement.
            <br />
            Activités ludiques, ateliers créatifs ou sportifs, pochettes surprises remplies de goodies adaptées au thème
            choisi, tout est pensé pour créer une ambiance festive et conviviale et pour que votre événement reste gravé dans
            les mémoires de vos invités, petits et grands.
          </p>
          <div className={s.eventsTypes}>
            <p className={s.types}>
              Types d&apos;événements : Mariages · Baptêmes · Anniversaires · Événements d&apos;entreprise · Fêtes et
              célébrations
            </p>
            <div className={s.eventsGallery}>
              {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} src={`/img/accompagnements/event-${i}.jpg`} alt="" width={186} height={194} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={s.eventsSide}>
        <img className={s.eventsImg} src="/img/accompagnements/evenement-pro.jpg" alt="Des invités se servent au buffet lors d'un événement" width={605} height={402} loading="lazy" />
        <p className={s.h4}>
          Vous organisez un événement professionnel et cherchez une animation enfants pour vos collaborateurs parents ?
        </p>
        <div className={s.eventsBtns}>
          <Button href="/entreprises" variant="jaune-outline" className={s.btnOutline}>Découvrir nos interventions en entreprise</Button>
          <Button href={LINKS.contact} variant="jaune">Demander un devis gratuit</Button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bappoum, la plateforme ---------- */
const CHANGES = [
  "Tu comprends enfin pourquoi ton enfant réagit comme ça, et comment lui répondre",
  "Tu sais gérer les crises sans crier, sans culpabiliser après",
  "Tu te sens soutenu(e) par une communauté de parents qui vivent la même chose",
  "Tu retrouves confiance dans ta façon d'être parent — sans viser la perfection",
];
const INCLUS = ["Lives en direct + replay à vie", "Podcasts à écouter partout", "Ressources téléchargeables", "Cafés des parents en visio"];

export function BappoumBloc() {
  return (
    <section className="container section">
      <div className={s.bappoum}>
        <div className={s.bappoumMain}>
          <h2 className={`h1 ${s.rose}`}>
            Bappoum - la plateforme d&apos;accompagnement parental <br className={s.brWide} />
            mensuel pour avancer à votre rythme
          </h2>
          <div className={s.bappoumBody}>
            <p className="p">
              Tu fais de ton mieux. Les crises, la fatigue, les doutes, la culpabilité, il y a des jours où tu te demandes si
              tu fais bien.
              <br />
              Tu lis des conseils partout, tu entends tout et son contraire. Et au final, tu te retrouves seul(e) face à tout.
            </p>
            <div className={s.changeBox}>
              <blockquote className={`p ${s.quote}`}>
                “Un accompagnement parental mensuel pensé pour la vraie vie, pas pour la vie idéale des livres de
                parentalité.e”
              </blockquote>
              <div className={s.changeList}>
                <h3 className={s.h4}>Ce que ça change concrètement :</h3>
                <ul role="list" className={s.checks}>
                  {CHANGES.map((c) => (
                    <li key={c} className="p">
                      <span className={s.icon16} aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={s.bappoumSide}>
          <img className={s.bappoumImg} src="/img/accompagnements/bappoum.jpg" alt="Des parents réunis autour d'un buffet" width={729} height={366} loading="lazy" />
          <p className="p">
            Chaque mois, une thématique de parentalité travaillée en profondeur — sommeil, émotions, écrans, communication,
            adolescence — avec des professionnels de la psychologie et du développement de l&apos;enfant
          </p>
          <ul role="list" className={s.inclus}>
            {INCLUS.map((c) => (
              <li key={c} className="p">
                <span className={s.icon16} aria-hidden />
                {c}
              </li>
            ))}
          </ul>
          <div className={s.bappoumCta}>
            <Link href={LINKS.signup} className="btn btn--rose">
              Démarrer Bappoum gratuitement
              <Paw />
            </Link>
            <p className={`label ${s.rose}`}>
              À partir de 9,99€/mois 15 jours gratuits, sans carte bancaire Sans engagement · Accès immédiat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
