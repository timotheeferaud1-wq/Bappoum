import { Button, CtaButton, LINKS } from "@/components/ui";
import { Avatars } from "./Hero";
import s from "./accueil.module.css";

/* ---------- « Bavardons Parentalité accompagne tous les parents » ---------- */
const PROFILS = [
  { img: "profil-jeunes", t: "Jeunes parents", d: "Tu viens d'accueillir ton enfant et tu navigues à vue. Tu cherches des repères concrets, sans jugement." },
  { img: "profil-epuise", t: "Le parent épuisé", d: "Tu donnes tout, mais tu te sens à bout. Tu as besoin de souffler, de comprendre et de retrouver de la douceur dans ton quotidien." },
  { img: "profil-ados", t: "Parents d'adolescents", d: "La relation avec ton ado se tend et tu ne sais plus comment lui parler. Tu veux renouer sans t'imposer." },
  { img: "profil-questionnement", t: "Le parent en questionnement", d: "Tu remets en question tes façons de faire. Tu veux une parentalité plus consciente, plus apaisée, plus alignée avec tes valeurs." },
  { img: "profil-futurs", t: "Futur parents", d: "Un bébé arrive et tu as envie de bien faire. Tu souhaites vivre une grossesse apaisée, anticiper le post-partum et construire ton projet de parentalité en toute clarté." },
];

export function Profils() {
  return (
    <section className="container section">
      <h2 className={`h1 ${s.sectionTitle} ${s.titleGap}`}>Bavardons Parentalité accompagne tous les parents</h2>
      <div className={s.profils}>
        {PROFILS.map((p) => (
          <article key={p.t} className={s.profil}>
            <img src={`/img/accueil/${p.img}.jpg`} alt="" width={307} height={250} loading="lazy" />
            <div className={s.profilBody}>
              <h3 className={s.cardTitle}>{p.t}</h3>
              <p className="p">{p.d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- « Deviens le parent que tu veux être » ---------- */
export function Deviens() {
  return (
    <section className={`container section ${s.split}`}>
      <div className={s.splitText}>
        <h2 className="h1">Deviens le parent que tu veux être</h2>
        <p className="p">
          Des outils concrets, des professionnels disponibles, une communauté bienveillante — tout ce qu&apos;il te faut
          pour avancer à ton rythme.
        </p>
        <CtaButton href={LINKS.signup} variant="rose" paw note="Profiter des 15 premiers jours offerts - sans carte bancaire">
          Démarrer mon 1er mois
        </CtaButton>
      </div>
      <img className={s.splitImg} src="/img/accueil/deviens.jpg" alt="Famille souriante réunie dans un hamac" width={766} height={625} loading="lazy" />
    </section>
  );
}

/* ---------- Grille des thématiques + Bappoum ---------- */
const THEMES = ["Épuisement", "Émotions", "Confiance", "Alimentation", "Écrans", "Sexualité", "Couple", "Scolarité", "Communication"];

export function Thematiques() {
  return (
    <section className={`container section ${s.themes}`}>
      <ul className={s.themeGrid} role="list" style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {THEMES.map((t) => (
          <li key={t} className={s.tile}>
            <img src="/img/accueil/experts.jpg" alt="" loading="lazy" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className={s.themesText}>
        <div className={s.themesHead}>
          <h2 className="h1">
            <span className={s.rose}>Bappoum</span>, la plateforme d&apos;accompagnement parental mensuel
          </h2>
          <p className="p">
            Chaque mois, une thématique abordée en profondeur par des psychologues et professionnels de l&apos;enfance — en
            lives, podcasts et ressources, accessibles 24h/24.
          </p>
        </div>
        <div className={s.ctaRow}>
          <Button href={LINKS.signup} variant="rose-outline">Commencer gratuitement</Button>
          <CtaButton href={LINKS.signup} variant="rose" paw note="Sans engagement – Accès immédiat – Contenus créés par des professionnels">
            Démarrer mon 1er mois
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Carrousel des accompagnements ---------- */
const OFFRES = [
  { img: "offre-2", t: "Coaching individuel", chip: "Visio · Présentiel · Sur mesure", d: "Un accompagnement personnalisé avec Maëva, adapté à ta situation. Première séance découverte de 40 min offerte.", cta: "En quoi consiste l’accompagnement ?", href: "/accompagnements" },
  { img: "offre-3", t: "Interventions en entreprise", chip: "Webinaires · Conférences · Bappoum", d: "Webinaires, conférences et accès Bappoum pour soutenir vos collaborateurs parents.", cta: "Découvrir les interventions", href: "/entreprises" },
  { img: "offre-2", t: "Secteur petite enfance", chip: "Crèches · Écoles · Associations", d: "Vous accompagnez des familles avec de jeunes enfants. Bavardons Parentalité intervient auprès de vos équipes et des parents que vous soutenez.", cta: "Explorer notre approche petite enfance", href: "/petite-enfance" },
  { img: "offre-3", t: "Ateliers parents-enfants", chip: "Présentiel · En famille · Ludique", d: "Des moments pour se reconnecter en famille autour d'activités concrètes et bienveillantes.", cta: "Quels sont nos ateliers ?", href: "/accompagnements" },
  { img: "offre-2", t: "Animation événementielle", chip: "Mariages · Anniversaires · Entreprises", d: "Des animations clés en main pour vos événements familiaux et professionnels. Plus de 35 événements animés.", cta: "Parlons de votre évènement", href: LINKS.contact },
];

export function Offres() {
  return (
    <section className="section">
      <div className="container">
        <h2 className={`h1 ${s.sectionTitleNarrow} ${s.titleGap}`}>
          Tous les accompagnements Bavardons Parentalité : plateforme, coaching et ateliers.
        </h2>
      </div>
      <div className={s.scroller} tabIndex={0} aria-label="Liste des accompagnements (défilement horizontal)">
        <article className={`${s.offre} ${s.offreFeatured}`}>
          <img src="/img/accueil/offre-1.jpg" alt="" width={543} height={250} loading="lazy" />
          <div className={s.offreBody}>
            <div className={s.offreTitle}>
              <span className={s.icon16} aria-hidden />
              <h3 className={s.cardTitle}>Bappoum, la plateforme</h3>
            </div>
            <div className={s.offreDesc}>
              <span className={s.chip}>Lives · Podcasts · Ressources</span>
              <p className="p">
                L&apos;accompagnement parental mensuel en ligne. Une thématique par mois, des professionnels, un replay à vie.
                À partir de 16€/mois.
              </p>
            </div>
          </div>
          <Button href={LINKS.bappoum} variant="rose-outline" className={s.offreCta}>Découvrir Bappoum</Button>
        </article>
        {OFFRES.map((o) => (
          <article key={o.t} className={s.offre}>
            <img src={`/img/accueil/${o.img}.jpg`} alt="" width={543} height={250} loading="lazy" />
            <div className={s.offreBody}>
              <div className={s.offreTitle}>
                <h3 className={s.cardTitle}>{o.t}</h3>
              </div>
              <div className={s.offreDesc}>
                <span className={s.chip}>{o.chip}</span>
                <p className="p">{o.d}</p>
              </div>
            </div>
            <Button href={o.href} variant="jaune" className={s.offreCta}>{o.cta}</Button>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Experts ---------- */
const DOMAINES = [
  { t: "Psychologues cliniciens", d: "Spécialisés dans le développement de l'enfant et de l'adolescent, ils interviennent chaque mois sur Bappoum en live et en podcast." },
  { t: "Éducateurs spécialisés", d: "Professionnels du terrain, ils partagent des outils concrets et applicables immédiatement dans le quotidien des familles." },
  { t: "Professionnels de santé", d: "Pédiatres, orthophonistes, diététiciens... pour aborder chaque thématique avec une approche globale et bienveillante." },
];
const EQUIPE = [
  { n: "Julien Dubois", r: "Spécialiste petite enfance" },
  { n: "Maeva Reuss", r: "Consultant en éducation spécialisée" },
  { n: "Sophie Lambert", r: "Psychologue pour enfants et adolescents" },
  { n: "Marc André", r: "Formateur en pédagogie Montessori" },
  { n: "Lucie Dupont", r: "Spécialiste en psychologie infantile" },
  { n: "Stéphane Bernard", r: "Consultante en éducation et pédagogie" },
];

export function Experts() {
  return (
    <section className="container section">
      <h2 className={`h1 ${s.expertsTitle} ${s.titleGap}`}>Plus de 40 professionnels experts en développement de l&apos;enfant</h2>
      <div className={s.expertsTop}>
        <div className={s.expertsList}>
          {DOMAINES.map((d) => (
            <div key={d.t}>
              <h3>{d.t}</h3>
              <p className="p">{d.d}</p>
            </div>
          ))}
        </div>
        <img className={s.expertsImg} src="/img/accueil/experts.jpg" alt="Un parent serre son enfant dans ses bras" width={1008} height={517} loading="lazy" />
      </div>
      <ul className={s.team} role="list" style={{ listStyle: "none", padding: 0 }}>
        {EQUIPE.map((m, i) => (
          <li key={m.n} className={s.member}>
            <img src={`/img/accueil/expert-${i + 1}.png`} alt={`Portrait de ${m.n}`} width={198} height={222} loading="lazy" />
            <h3>{m.n}</h3>
            <p className="p">{m.r}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Bappoum — l'accompagnement parental à ton rythme ---------- */
export function Rythme() {
  return (
    <section className={`container section ${s.rythme}`}>
      <img className={s.rythmeImg} src="/img/accueil/rythme.jpg" alt="Une maman porte son fils au bord de la mer" width={1080} height={700} loading="lazy" />
      <div className={s.rythmeCard}>
        <h2 className="h1">
          <span className={s.rose}>Bappoum</span> — l&apos;accompagnement parental à ton rythme
        </h2>
        <p className="p">
          Parce que les doutes d&apos;un parent ne s&apos;arrêtent pas à 18h. Avec Bappoum, accède chaque mois à des lives,
          podcasts et ressources créés par des professionnels, depuis ton canapé, ta voiture ou ta cuisine.
          <br />
          Tous les contenus disponibles en replay à vie.
        </p>
        <CtaButton href={LINKS.signup} variant="rose" paw note="Sans engagement – Accès immédiat – Contenus créés par des professionnels.">
          Démarrer mon 1er mois gratuitement
        </CtaButton>
      </div>
    </section>
  );
}

/* ---------- Rejoindre Bappoum : 15 jours gratuits ---------- */
const FEATURES = [
  { b: "Où que tu sois", t: " — À la maison, en déplacement, entre deux moments de ta journée." },
  { b: "Sur tous les supports", t: " —Téléphone, tablette, ordinateur. Facile, rapide, sans contrainte." },
  { b: "Disponible en replay", t: " — Tu ne peux pas être là en live ? Tous les contenus restent accessibles quand tu veux." },
];

export function Rejoindre() {
  return (
    <section className="container section">
      <div className={s.rejoindre}>
        <div className={s.rejoindreMain}>
          <h2 className="h1">
            Rejoindre Bappoum :<br />
            15 jours gratuits, sans carte bancaire.
          </h2>
          <div className={s.rejoindreBody}>
            <p className={s.rejoindreSub}>
              Profite de l&apos;expérience complète à ton rythme, où que tu sois, quand tu en as besoin.
            </p>
            <ul className={s.features} role="list" style={{ listStyle: "none", margin: 0 }}>
              {FEATURES.map((f) => (
                <li key={f.b} className={s.feature}>
                  <span className={s.icon16} aria-hidden />
                  <p className="p">
                    <b>{f.b}</b>
                    {f.t}
                  </p>
                </li>
              ))}
            </ul>
            <div className={s.rejoindreCta}>
              <Button href={LINKS.signup} variant="rose" paw>Découvrir Bappoum</Button>
              <p className="p">15 premiers jours offerts.</p>
            </div>
          </div>
        </div>
        <div className={s.rejoindreSide}>
          <img src="/img/accueil/rejoindre.jpg" alt="Des parents échangent avec leur fille" loading="lazy" />
          <p className="p">
            Plus qu&apos;une plateforme, un vrai soutien.
            <br />
            Échange avec d&apos;autres parents, partage ce que tu vis. Un groupe bienveillant pour avancer ensemble — WhatsApp,
            Facebook ou sur la plateforme.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Témoignages ---------- */
const TEMOS = [
  { img: "temoin-sophie", n: "Sophie Lemaire", q: "“La plateforme Bappoum est une mine d'informations et de conseils. Les lives sont interactifs et les podcasts très pratiques.”", peach: true },
  { img: "temoin-antoine", n: "Antoine Garnier", q: "“Grâce au coaching individuel, j'ai appris à mieux gérer mes émotions et à communiquer avec mes enfants.”", peach: false },
  { img: "temoin-lucas", n: "Lucas Moreau", q: "“Les ateliers ont renforcé notre lien parent-enfant. Une expérience inoubliable et enrichissante pour toute la famille !”", peach: true },
];

function TemoName({ name, bear }: { name: string; bear: boolean }) {
  return (
    <div className={s.temoName}>
      <span className={bear ? s.iconBear : s.icon16} aria-hidden />
      <h3>{name}</h3>
    </div>
  );
}

export function Temoignages() {
  return (
    <section className={`container section ${s.temoignages}`}>
      <div className={s.temoLeft}>
        <div>
          <h2 className="h1">Ce que les parents disent de leur accompagnement avec Bavardons Parentalité</h2>
          <div className={s.stats}>
            <p>250+ familles accompagnées · 35+ événements animés · 25+ ateliers organisés · 65 comptes actifs</p>
            <Avatars large />
          </div>
        </div>
        <figure className={`${s.temo} ${s.temoBig}`} style={{ margin: 0 }}>
          <img src="/img/accueil/temoin-chloe.jpg" alt="" width={280} height={325} loading="lazy" />
          <figcaption>
            <TemoName name="Chloé Dubeau" bear={false} />
            <blockquote className="p" style={{ margin: 0 }}>
              “Bavardons Parentalité a transformé notre quotidien familial. Les outils sont simples et efficaces.”
            </blockquote>
          </figcaption>
        </figure>
      </div>
      <div className={s.temoRight}>
        {TEMOS.map((t) => (
          <figure key={t.n} className={`${s.temo}${t.peach ? ` ${s.temoPeach}` : ""}`} style={{ margin: 0 }}>
            <img src={`/img/accueil/${t.img}.jpg`} alt="" width={250} height={180} loading="lazy" />
            <figcaption>
              <TemoName name={t.n} bear={t.peach} />
              <blockquote className="p" style={{ margin: 0 }}>{t.q}</blockquote>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
