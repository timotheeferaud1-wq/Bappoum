import Link from "next/link";
import { CtaButton } from "@/components/ui";
import { Avatars } from "@/components/accueil/Hero";
import s from "./petite-enfance.module.css";

/** Sélecteur « Entreprise | Petite enfance » (deux pages sœurs). */
export function Switch() {
  return (
    <nav className={s.switch} aria-label="Choisir votre structure">
      <Link href="/entreprises" className={s.switchLink}>Entreprise</Link>
      <Link href="/petite-enfance" className={`${s.switchLink} ${s.switchActive}`} aria-current="page">
        Petite enfance
      </Link>
    </nav>
  );
}

/** Bloc « hero » réutilisé deux fois sur la page : pastille, titre, texte, 2 CTA, grande photo à droite. */
export function HeroBlock({
  as: Tag = "h2",
  title,
  text,
  img,
  alt,
  note,
  first = false,
  titleMax,
}: {
  as?: "h1" | "h2";
  title: string;
  text: string;
  img: string;
  alt: string;
  note?: string;
  first?: boolean;
  titleMax?: number;
}) {
  return (
    <section className={`container ${first ? s.heroFirst : "section"} ${s.hero}`}>
      <div className={s.heroText}>
        <div className={s.heroHead}>
          <p className={s.statPill}>
            <span>250+ familles accompagnées · 35+ événements animés · Interventions en visio et en présentiel</span>
            <Avatars />
          </p>
          <Tag className={`h1 ${s.heroTitle}`} style={titleMax ? { maxWidth: titleMax } : undefined}>
            {title}
          </Tag>
        </div>
        <p className="p">{text}</p>
        <div className={s.ctaRow}>
          <CtaButton href="#interventions" variant="jaune-outline">Voir nos interventions</CtaButton>
          <CtaButton href="#contact" variant="jaune" note={note}>Discutons de votre projet</CtaButton>
        </div>
      </div>
      <img className={s.heroImg} src={`/img/petite-enfance/${img}.jpg`} alt={alt} width={792} height={736} {...(first ? {} : { loading: "lazy" as const })} />
    </section>
  );
}
