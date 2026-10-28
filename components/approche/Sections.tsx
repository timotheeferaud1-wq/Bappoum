import Link from "next/link";
import { Button, CtaButton, DecoPaw, LINKS } from "@/components/ui";
import { Avatars } from "@/components/accueil/Hero";
import s from "./approche.module.css";

/* ---------- Hero : Maëva Abadie ---------- */
export function Hero() {
  return (
    <section className={`container ${s.hero}`}>
      <span className={s.deco}>
        <DecoPaw variant="corner" style={{ width: 106, height: 146, left: -40, top: 640, transform: "rotate(19deg)" }} />
      </span>
      <div className={s.heroText}>
        <div className={s.heroHead}>
          <p className={`pill ${s.heroPill}`}>
            <span>+ 250 familles accompagnées</span>
            <Avatars />
          </p>
          <h1 className="h1">
            Maëva Abadie, spécialisée dans le <span className={s.orange}>développement de l&apos;enfant</span>, fondatrice de
            Bavardons Parentalité.
          </h1>
        </div>
        <div className={`p ${s.heroLead}`}>
          <p>Je m&apos;appelle Maëva. Je suis diplômée d’une licence en psychologie depuis juin 2021.</p>
          <p>
            Je me suis spécialisée dans le développement de l&apos;enfant et de l&apos;adolescent, j&apos;ai passé plusieurs
            années au contact des familles : dans les centres de loisirs, les maisons d&apos;accueil, les foyers, les ateliers
            parents-enfants.
          </p>
          <p>
            Et au fil du temps, j&apos;ai réalisé quelque chose : les parents manquent cruellement de soutien.
            <br />
            C&apos;est pour ça que j&apos;ai créé Bavardons Parentalité.
          </p>
        </div>
        <div className={s.ctaRow}>
          <Button href={LINKS.booking} variant="jaune">Réserver ma séance découverte offerte</Button>
          <CtaButton
            href={LINKS.bappoum}
            variant="rose"
            paw
            note="Sans engagement – Accès immédiat  – Contenus créés par des professionnels"
          >
            Découvrir Bappoum
          </CtaButton>
        </div>
      </div>
      <div className={s.heroMedia}>
        <span className={s.heroBlob} aria-hidden />
        <img
          className={s.heroImg}
          src="/img/approche/maeva.jpg"
          alt="Maëva Abadie, fondatrice de Bavardons Parentalité"
          width={766}
          height={540}
        />
      </div>
    </section>
  );
}

/* ---------- Pourquoi Bavardons Parentalité existe ---------- */
export function Pourquoi() {
  return (
    <section className={`container section ${s.pourquoi}`}>
      <div className={s.pourquoiMedia}>
        <img src="/img/approche/pourquoi.jpg" alt="Une famille partage un moment complice" width={828} height={700} loading="lazy" />
      </div>
      <div className={s.pourquoiCard}>
        <h2 className="h1">Pourquoi Bavardons Parentalité existe : accompagner les parents pour mieux aider les enfants.</h2>
        <div className={`p ${s.prose}`}>
          <p>
            À l’origine, je voulais être la main tendue que je n’avais pas eue enfant, en travaillant dans la protection de
            l’enfance.
          </p>
          <p>
            Mais au fil de mes recherches et de mes stages, j’ai compris quelque chose d’essentiel : si je voulais réellement
            aider les enfants à grandir dans un environnement bienveillant et rempli d’amour,{" "}
            <strong>c’était d’abord les parents que je devais accompagner</strong>.
          </p>
          <p>
            On ne naît pas parent, on le devient. Et comme tout, ça s’apprend. Sauf qu’en réalité, on est souvent influencés
            par notre éducation, par la société, par des schémas qu’on reproduit sans même s’en rendre compte. Certains parents
            pensent bien faire sans mesurer l’impact de leurs actions. D’autres veulent bien faire mais ne savent pas comment.
          </p>
          <p>
            Et d’autres encore ressentent simplement le besoin de mieux comprendre le développement de leur enfant. Avec
            Bavardons Parentalité, j’ai voulu créer un espace où chaque parent peut trouver du soutien, des clés concrètes et
            surtout une écoute sans jugement. Un endroit où l’on peut poser ses questions, partager ses doutes et avancer, pas
            à pas, vers une parentalité plus sereine et plus alignée
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Formation spécialisée + bandeau de photos ---------- */
export function Formation() {
  return (
    <section className="section">
      <div className={`container ${s.split}`}>
        <div className={s.splitText}>
          <h2 className="h1">Une formation spécialisée dans le développement de l&apos;enfant et de l&apos;adolescent</h2>
          <div className={`p ${s.prose}`}>
            <p>
              Mon approche repose avant tout sur des bases solides en psychologie. Grâce à ma formation centrée sur le
              développement de l’enfant et de l’adolescent, j’ai acquis une compréhension approfondie des besoins
              émotionnels, cognitifs et relationnels à chaque étape de la vie.
            </p>
            <p>
              Ces connaissances me permettent de prendre du recul face aux situations du quotidien, d’analyser les
              comportements des enfants avec justesse et d’apporter des réponses adaptées, loin des injonctions ou des
              conseils culpabilisants.
            </p>
            <p>
              Chez Bavardons Parentalité, l’objectif n’est pas de donner des recettes toutes faites, mais de transmettre des
              repères fiables, issus de recherches et d’observations concrètes. Comprendre pourquoi un enfant agit d’une
              certaine manière, c’est déjà faire un premier pas vers une réponse plus juste et plus apaisée. Cette base
              scientifique est essentielle : elle permet d’accompagner les parents avec sérieux, cohérence et bienveillance,
              en s’appuyant sur des connaissances validées plutôt que sur des opinions ou des tendances.
            </p>
          </div>
        </div>
        <div className={s.formationMedia}>
          <img src="/img/approche/formation.jpg" alt="Maëva accompagne un parent et son enfant" width={798} height={574} loading="lazy" />
        </div>
      </div>
      <ul className={`container ${s.strip}`} role="list">
        {[1, 2, 3].map((i) => (
          <li key={i}>
            <img src={`/img/approche/terrain-${i}.jpg`} alt="" width={541} height={250} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- 8 ans d'expérience terrain ---------- */
const PARCOURS: { t: string; tone?: "jaune" | "rose" }[] = [
  { t: "Animatrice en centre de loisirs" },
  { t: "Auxiliaire de puériculture en crèche" },
  { t: "Fille au pair" },
  { t: "Garde périscolaire" },
  { t: "Éducatrice en maison d'accueil à caractère social" },
  { t: "Organisatrice d'ateliers parents-enfants" },
  { t: "Organisatrice de café des parents" },
  { t: "Création de Bavardons Parentalité", tone: "jaune" },
  { t: "Lancement de Bappoum", tone: "rose" },
];

export function Experience() {
  return (
    <section className={`container section ${s.experience}`}>
      <ol className={s.timeline}>
        {PARCOURS.map((p) => (
          <li key={p.t} className={`${s.step}${p.tone ? ` ${s[`step_${p.tone}`]}` : ""}`}>
            <div className={s.stepHead}>
              <span className={s.year}>2020</span>
              {p.tone === "jaune" && <span className={s.stepIconBear} aria-hidden />}
              {p.tone === "rose" && <span className={s.stepIconPaw} aria-hidden />}
            </div>
            <h3 className={s.stepTitle}>{p.t}</h3>
          </li>
        ))}
      </ol>
      <div className={s.splitText}>
        <h2 className="h1">
          8 ans d&apos;expérience terrain auprès des familles : crèche, MECS, ateliers parents-enfants et coaching parental
        </h2>
        <div className={`p ${s.prose}`}>
          <p>
            Au-delà de la théorie, ce sont surtout mes expériences sur le terrain qui ont façonné mon approche. J’ai travaillé
            dans de nombreux environnements liés à l’enfance et à la parentalité : crèche, périscolaire, centre de loisirs,
            MECS, baby-sitting, aide aux devoirs, ou encore accompagnement de familles au quotidien.
          </p>
          <p>
            Ces expériences m’ont permis de comprendre que chaque enfant est unique, chaque parent fait de son mieux et aucune
            situation ne se ressemble vraiment. Sur le terrain, on est confronté au concret : les crises, la fatigue, les
            doutes, les imprévus… tout ce qu’aucun livre ne peut totalement anticiper.
          </p>
          <p>
            C’est cette immersion dans la vraie vie des familles qui me permet aujourd’hui de proposer un accompagnement
            pragmatique, adapté et réaliste. Je propose des outils applicables au quotidien, pensés pour s’intégrer dans des
            vies déjà bien remplies.
            <br />
            Parce qu’accompagner les parents, ce n’est pas leur dire quoi c’est comprendre leurs enjeux, leurs contraintes,
            leurs émotions… et avancer avec eux, pas à pas.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- La parentalité bienveillante selon Bavardons Parentalité ---------- */
function Arrow() {
  return (
    <svg className={s.arrow} width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Methode() {
  return (
    <section className={`container section ${s.methode}`}>
      <span className={s.deco}>
        <DecoPaw variant="1" style={{ width: 93, height: 95, left: "46%", top: -120 }} />
      </span>
      <div className={s.splitText}>
        <h2 className="h1">
          La parentalité bienveillante selon Bavardons Parentalité : méthode, valeurs et outils concrets
        </h2>
        <div className={`p ${s.prose}`}>
          <p>
            Chez Bavardons Parentalité, je pars d’un principe simple : <strong>il n’existe pas de parent parfait</strong>.
            L’objectif n’est pas de viser la perfection, mais d’aller vers une parentalité plus bienveillante et plus alignée
            avec ses valeurs.
          </p>
          <p>
            Derrière chaque comportement d’un enfant, il y a un besoin. En apprenant à le décoder, on remplace progressivement
            les réactions automatiques. Ainsi, on transforme nos réactions par des réponses plus justes, basées sur la
            bienveillance, l’amour et le respect de chacun.
          </p>
        </div>
        <p className={s.methodeLead}>
          Je propose des accompagnements concrets, avec des outils simples et applicables dès la première semaine.
        </p>
      </div>
      <div className={s.cards}>
        <Link href="/accompagnements" className={s.card}>
          <img src="/img/approche/accompagnements.jpg" alt="" width={387} height={420} loading="lazy" />
          <div className={`${s.cardBody} ${s.cardPeach}`}>
            <div className={s.cardHead}>
              <h3>Accompagnements</h3>
              <Arrow />
            </div>
            <p className="p">
              L’accompagnement individuel se fait sur un maximum de 8 rendez-vous en one-to-one, pour aller à l’essentiel tout
              en créant de vrais déclics.
            </p>
          </div>
        </Link>
        <Link href={LINKS.bappoum} className={s.card}>
          <img src="/img/approche/bappoum.jpg" alt="" width={387} height={420} loading="lazy" />
          <div className={`${s.cardBody} ${s.cardRose}`}>
            <div className={s.cardHead}>
              <h3>Bappoum la plateforme</h3>
              <Arrow />
            </div>
            <p className="p">
              Pour celles et ceux qui souhaitent aller plus loin, Bappoum permet un accompagnement plus approfondi, avec
              l’intervention d’experts sur des thématiques variées (émotions, écrans, santé, développement de l’enfant…).
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
