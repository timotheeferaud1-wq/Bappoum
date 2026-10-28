import { Button, CtaButton, LINKS } from "@/components/ui";
import { Avatars } from "@/components/accueil/Hero";
import s from "./bappoum.module.css";

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <section className={s.hero}>
      <div className={`container ${s.heroInner}`}>
        <img
          className={s.heroImg}
          src="/img/bappoum/hero.jpg"
          alt="Une petite fille et ses parents échangent en souriant sur le canapé"
          width={792}
          height={736}
        />
        <div className={s.heroText}>
          <div className={s.heroHead}>
            <p className={`pill ${s.heroPill}`}>
              250 familles accompagnées · Replay à vie · Contenus créés par des professionnels
              <Avatars />
            </p>
            <h1 className="h1">
              <span className={s.rose}>Bappoum</span> - la plateforme d&apos;accompagnement parental mensuel créée par
              Bavardons Parentalité
            </h1>
          </div>
          <p className="p">
            Un espace numérique pour comprendre ton enfant, mieux vivre ton quotidien de parent et avancer avec plus de
            douceur. Chaque mois, une thématique est abordée en profondeur par des professionnels. Lives, podcasts,
            ressources pratiques et communauté de parents, tout ceci accessibles 24h/24, chaque contenu est disponible en
            replay.
          </p>
          <CtaButton href={LINKS.signup} variant="rose" paw note="Profiter des 15 premiers jours offerts - sans carte bancaire">
            Démarrer mon 1er mois
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

/* ---------- Commencer Bappoum gratuitement ---------- */
const GRATUIT = [
  "Lives parentalité avec des psychologues et éducateurs — en direct et replay à vie",
  "Podcasts parentalité créés par des professionnels de l'enfance  - à écouter partout",
  "Ressources pratiques parentalité - ebooks, cahiers d'activités et outils du quotidien",
];

export function Gratuit() {
  return (
    <section className={`section ${s.gratuit}`}>
      <span className={s.pawHero} aria-hidden />
      <div className={`container ${s.gratuitInner}`}>
        <div className={s.gratuitText}>
          <h2 className="h1">
            Commencer Bappoum gratuitement : lives, podcasts et ressources parentalité en accès libre
          </h2>
          <p className="p">
            Pas encore prêt(e) à t&apos;abonner ?
            <br />
            Commence par explorer Bappoum gratuitement pendant 15 jours.
            <br />
            En créant un compte gratuit, tu accèdes immédiatement à une sélection de contenus : 2 lives, 2 podcasts et 2
            ressources par thématique, disponibles à tout moment.
            <br />
            Sans carte bancaire, sans engagement. À l&apos;issue des 15 jours, choisis la formule qui te correspond à
            partir de 16€/mois.
          </p>
          <div className={s.gratuitCta}>
            <Button href={LINKS.signup} variant="rose" paw>Créer un compte gratuit</Button>
            <span className={s.fleche} aria-hidden />
          </div>
        </div>
        <ul className={s.gratuitList} role="list">
          {GRATUIT.map((t) => (
            <li key={t}>
              <span className={s.zz} aria-hidden />
              <p>{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Comment fonctionne Bappoum ---------- */
const ACCES = ["Lives en direct + replay à vie", "Podcasts", "Ressources pratiques", "Cafés des parents en visio"];
const EXPERTS = Array.from({ length: 24 }, (_, i) => ({ id: i, n: "Marc André", r: "Formateur en pédagogie" }));

export function Comment() {
  return (
    <section id="comment" className={`container section ${s.anchor}`}>
      <h2 className={`h1 ${s.commentTitle}`}>
        Comment fonctionne Bappoum - la plateforme d&apos;accompagnement parental mensuel en ligne
      </h2>
      <div className={s.comment}>
        <ol className={s.steps} role="list">
          <li>
            <h3 className={s.stepTitle}><span className={s.num}>1</span>Une thématique par mois</h3>
            <p className={s.themesLine}>
              Sommeil · Émotions · Écrans · Alimentation · Parentalité positive · Autonomie · Couple · Séparation ·
              Adolescence…
            </p>
          </li>
          <li>
            <h3 className={s.stepTitle}><span className={s.num}>2</span>Des professionnels interviennent</h3>
            <p className="p">
              Psychologues, éducateurs, thérapeutes, professionnels de santé — en live avec temps d&apos;échange et
              questions en direct.
            </p>
          </li>
          <li>
            <h3 className={s.stepTitle}><span className={s.num}>3</span>Tu accèdes à tout, quand tu veux</h3>
            <ul className={s.pawList} role="list">
              {ACCES.map((a) => (
                <li key={a}><span className={s.icon16} aria-hidden />{a}</li>
              ))}
            </ul>
          </li>
        </ol>
        <ul className={s.experts} role="list" aria-label="Les professionnels de Bappoum">
          {EXPERTS.map((e) => (
            <li key={e.id}>
              <img src="/img/bappoum/expert.jpg" alt={`Portrait de ${e.n}`} width={66} height={74} loading="lazy" />
              <h3>{e.n}</h3>
              <p className="p">{e.r}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Les 5 formats ---------- */
const FORMATS = [
  { t: "Podcasts parentalité", d: "Des épisodes audio créés par des experts et enrichis de témoignages de parents. À écouter dans la voiture, pendant la sieste, le ménage ou la poussette — la formation parentale qui s'adapte à ta vie, pas l'inverse." },
  { t: "Lives parentalité", d: "Des interventions en direct avec des professionnels de l'enfance et de la parentalité. Chaque live inclut un temps d'échange et de questions - tu interagis, tu poses tes questions, tu n'es plus seul·e face à tes doutes. Tout est disponible en replay à vie pour regarder à ton rythme" },
  { t: "Ressources pratiques", d: "Des documents numériques directement applicables : ebooks thématiques, cahiers d'activités parents-enfants, articles scientifiques, to-do lists, recettes, supports à utiliser au quotidien avec tes enfants." },
  { t: "Cafés des parents", d: "Des espaces d'échange informels en visio, sans ordre du jour, sans jugement. Pour partager ses doutes, ses réussites, ses questionnements avec d'autres parents qui vivent les mêmes défis. Parce que la parentalité ne devrait pas se vivre seul·e." },
  { t: "Réductions partenaires", d: "Chaque mois, un partenaire soigneusement sélectionné parmi des marques, structures et professionnels alignés avec les valeurs de Bappoum — Quitoque, Fizzup, Namatata… Des réductions exclusives réservées aux membres de la plateforme sur des services utiles au quotidien." },
];

export function Formats() {
  return (
    <section className="container section">
      <div className={s.formatsHead}>
        <h2 className="h1">
          Lives, podcasts, ressources et communauté -  les contenus parentalité créés par des professionnels sur Bappoum
        </h2>
        <p className="p">
          Sur Bappoum, chaque thématique est abordée à travers 5 formats complémentaires, créés et animés par des
          psychologues, éducateurs, thérapeutes et professionnels de santé spécialisés dans l&apos;enfance et la
          parentalité.
        </p>
      </div>
      <ul className={s.formats} role="list">
        {FORMATS.map((f, i) => (
          <li key={f.t} className={s.format}>
            <img src={`/img/bappoum/format-${i + 1}.jpg`} alt="" width={323} height={250} loading="lazy" />
            <div className={s.formatBody}>
              <h3><span className={s.icon16} aria-hidden />{f.t}</h3>
              <p className="p">{f.d}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- Avantages exclusifs des abonnés ---------- */
const AVANTAGES = [
  { t: "Communauté parentalité Bappoum - groupes par région et par âge d'enfant", d: "Rejoins une communauté de parents qui doutent, testent, apprennent et partagent leurs expériences dans un cadre respectueux et sécurisant. Groupes WhatsApp par région et par âge d'enfant - bientôt disponibles." },
  { t: "Ateliers parentalité en petit groupe - 2€ pour les abonnés Bappoum", d: "Des ateliers thématiques en petit groupe, animés par des professionnels de la parentalité, pour approfondir un sujet précis — émotions, harcèlement, cadre, autonomie…" },
  { t: "-10% sur la boutique Ressources Bavardons Parentalité", d: "Les abonnés Bappoum bénéficient de 10% de réduction sur l'ensemble de la boutique Ressources - ebooks, cahiers d'activités, supports parents et enfants." },
  { t: "Formules souples et sans obligation", d: "Tu choisis la formule qui te correspond aujourd'hui et tu ajustes selon ton besoin du moment. Pas de pression, pas de frais cachés, tu es libre." },
];

export function Avantages() {
  return (
    <section className="container section">
      <div className={s.avantages}>
        <img className={s.ours} src="/img/bappoum/ours-rose.png" alt="" aria-hidden width={295} height={272} loading="lazy" />
        <h2 className={`h1 ${s.avantagesTitle}`}>
          Les avantages exclusifs des abonnés Bappoum - ateliers, réductions et accompagnement parental sur mesure
        </h2>
        <ul className={s.avantagesList} role="list">
          {AVANTAGES.map((a) => (
            <li key={a.t}>
              <h3><span className={s.icon16} aria-hidden />{a.t}</h3>
              <p>{a.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
