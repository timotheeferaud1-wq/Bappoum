import Link from "next/link";
import type { ReactNode } from "react";

/** Liens utilisés par les boutons d'appel à l'action (à remplacer par les vraies URL). */
export const LINKS = {
  bappoum: "/bappoum",
  signup: "/bappoum#tarifs",
  contact: "/#contact",
  booking: "/#contact",
};

type Variant = "rose" | "rose-outline" | "jaune" | "jaune-outline" | "blanc" | "title";

export function Paw({ className = "" }: { className?: string }) {
  return <span className={`paw ${className}`} aria-hidden />;
}

/** Bouton de la maquette. `paw` ajoute l'icône patte à droite (boutons « Découvrir Bappoum »). */
export function Button({
  href,
  variant = "rose",
  paw = false,
  large = false,
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  paw?: boolean;
  large?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn btn--${variant}${large ? " btn--lg" : ""} ${className}`}>
      {children}
      {paw && <Paw />}
    </Link>
  );
}

/** Bouton + petite mention dessous (« 15j offerts - Sans engagement… »). */
export function CtaButton({ note, noteColor = "var(--rose)", ...props }: Parameters<typeof Button>[0] & { note?: string; noteColor?: string }) {
  return (
    <div className="btn-wrap">
      <Button {...props} />
      {note && (
        <p className="label" style={{ color: noteColor }}>
          {note}
        </p>
      )}
    </div>
  );
}

/** Patte décorative (positionnée par le parent via style). */
export function DecoPaw({ variant = "corner", style }: { variant?: "corner" | "1" | "2"; style: React.CSSProperties }) {
  const src = `/img/common/paw-deco-${variant}.png`;
  return <span className="deco" aria-hidden style={{ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`, ...style }} />;
}

/** Titre de section avec morceaux colorés : <Title>Questions <em>fréquentes</em></Title> → em en rose. */
export function Title({
  as: Tag = "h2",
  children,
  className = "",
  accent = "rose",
  style,
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  accent?: "rose" | "orange";
  style?: React.CSSProperties;
}) {
  return (
    <Tag className={`h1 title-accent-${accent} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
