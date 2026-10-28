"use client";

import { useEffect, useState } from "react";
import { Button, LINKS } from "@/components/ui";
import s from "./ressources.module.css";

type Tab = "ebook" | "blog";

type Item = { t: string; chip: string; d: string; img: string; cta: string; href: string };

const EBOOK_TEXT =
  "Parce que le développement de l'enfant ne repose pas uniquement sur les connaissances, mais aussi sur la qualité des échanges entre les professionnels, les parents et l'enfant, Bavardons Parentalité accompagne les structures de la petite enfance grâce à des formations, des conférences et des outils concrets.";

const ITEMS: Record<Tab, Item[]> = {
  ebook: [1, 2, 3].map(() => ({
    t: "E-book 1",
    chip: "Parentalité",
    d: EBOOK_TEXT,
    img: "/img/ressources/ebook.jpg",
    cta: "Commencer gratuitement",
    href: LINKS.signup,
  })),
  /* Variante « Blog » non visible dans la maquette : contenu provisoire dans le même gabarit. */
  blog: [
    { t: "Accueillir les colères", chip: "Émotions", d: "Crises, cris, portes qui claquent : comprendre ce qui se joue derrière la colère de ton enfant et trouver les mots pour l'accompagner sans t'épuiser." },
    { t: "Les écrans en famille", chip: "Écrans", d: "Quel temps d'écran selon l'âge, comment poser des règles claires et les tenir sans conflit : des repères concrets pour toute la famille." },
    { t: "Parler avec son ado", chip: "Communication", d: "Quand la relation se tend, quelques changements simples dans la façon d'écouter et de répondre peuvent rouvrir le dialogue avec ton adolescent." },
  ].map((a) => ({ ...a, img: "/img/ressources/blog.jpg", cta: "Lire l'article", href: LINKS.bappoum })),
};

const TABS: { id: Tab; label: string }[] = [
  { id: "ebook", label: "E-Book" },
  { id: "blog", label: "Blog" },
];

/** Bibliothèque de ressources : onglets E-Book / Blog (filtrage côté client) + cartes. */
export default function Bibliotheque() {
  const [tab, setTab] = useState<Tab>("ebook");

  // Le footer pointe vers /ressources#blog : ouvre directement l'onglet Blog.
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === "#blog") setTab("blog");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <section id="blog" className={`container ${s.biblio}`} aria-labelledby="ressources-titre">
      <span className={s.blob} aria-hidden />
      <h1 id="ressources-titre" className="sr-only">
        Ressources Bavardons Parentalité : e-books et blog sur la parentalité
      </h1>
      <div className={s.tabs} role="tablist" aria-label="Type de ressource">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls="ressources-liste"
            className={`${s.tab}${tab === t.id ? ` ${s.tabActive}` : ""}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div id="ressources-liste" role="tabpanel" aria-labelledby={`tab-${tab}`} className={s.cards}>
        {ITEMS[tab].map((it, i) => (
          <article key={`${tab}-${i}`} className={s.card}>
            <img src={it.img} alt="" width={200} height={282} loading="lazy" />
            <div className={s.cardBody}>
              <div className={s.cardText}>
                <div className={s.cardHead}>
                  <h2 className={s.cardTitle}>{it.t}</h2>
                  <span className={s.chip}>{it.chip}</span>
                </div>
                <hr className={s.rule} />
                <p className={`p ${s.clamp}`}>{it.d}</p>
              </div>
              <Button href={it.href} variant="rose" className={s.cardCta}>
                {it.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
