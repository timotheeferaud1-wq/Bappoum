import { CtaButton, DecoPaw, LINKS } from "@/components/ui";
import s from "./accueil.module.css";

export const AVATARS = [1, 2, 3, 4, 5].map((i) => `/img/accueil/avatar-${i}.png`);

export function Avatars({ large = false }: { large?: boolean }) {
  return (
    <span className={`avatars${large ? " lg" : ""}`}>
      {AVATARS.map((src) => (
        <img key={src} src={src} alt="" />
      ))}
    </span>
  );
}

/** Hero : pastille, titre, accroche, 2 CTA, photo avec forme pêche derrière. */
export default function Hero() {
  return (
    <section className={s.hero}>
      <span className={s.heroPaw}>
        <DecoPaw variant="corner" style={{ width: 106, height: 146, left: 0, bottom: -80 }} />
      </span>
      <div className={`container ${s.heroInner}`}>
        <div className={s.heroText}>
          <div className={s.heroHead}>
            <p className={`pill ${s.heroPill}`}>
              + 250 familles accompagnées
              <Avatars />
            </p>
            <h1 className="h1">
              <span className={s.orange}>Bavardons Parentalité</span> - Accompagnement parental bienveillant pour les
              parents d&apos;enfants de 0 à 18 ans
            </h1>
          </div>
          <p className={`p ${s.heroLead}`}>
            Parce que devenir parent, ça ne s&apos;apprend pas. Bavardons Parentalité accompagne les familles avec{" "}
            <span className={s.rose}>Bappoum</span>, la plateforme mensuelle créée par Maëva Abadie, spécialisée dans le
            développement de l&apos;enfant.
          </p>
          <div className={s.ctaRow}>
            <CtaButton href={LINKS.signup} variant="rose-outline" note="15j offerts - Sans engagement - sans carte bleu">
              Commencer gratuitement
            </CtaButton>
            <CtaButton
              href={LINKS.bappoum}
              variant="rose"
              paw
              note="Sans engagement – Accès immédiat – Contenus créés par des professionnels"
            >
              Découvrir Bappoum
            </CtaButton>
          </div>
        </div>
        <div className={s.heroMedia}>
          <span className={s.heroBlob} aria-hidden />
          <img
            className={s.heroImg}
            src="/img/accueil/hero.jpg"
            alt="Maëva Abadie, fondatrice de Bavardons Parentalité, souriante"
            width={717}
            height={736}
          />
        </div>
      </div>
    </section>
  );
}
