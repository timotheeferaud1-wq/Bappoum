"use client";

import { useState } from "react";
import { Button, LINKS } from "@/components/ui";
import { Avatars } from "@/components/accueil/Hero";
import s from "./accompagnements.module.css";

type Offre = { chip: string; t: string; img: string };

/* La maquette ne montre que l'onglet « Ebook » (5 cartes identiques) : les deux onglets reprennent ces cartes
   en attendant le vrai contenu de chaque offre. */
const SEANCE: Offre = { chip: "1er appel de 15 min offert", t: "Séance d’accompagnement parental - Durée : 1h", img: "seance" };
const ONGLETS: Record<string, Offre[]> = {
  Ebook: Array(5).fill(SEANCE),
  Coaching: Array(5).fill(SEANCE),
};

export default function Tarifs() {
  const [tab, setTab] = useState<keyof typeof ONGLETS>("Ebook");
  return (
    <section id="tarifs" className={`container section ${s.anchor}`}>
      <div className={s.tarifsHead}>
        <div className={s.tarifsTitle}>
          <p className={`pill ${s.pill}`}>
            + 250 familles accompagnées · Séance découverte offerte
            <Avatars />
          </p>
          <h2 className="h1">Tarifs des accompagnements parentaux de Bavardons Parentalité</h2>
        </div>
        <p className="p">
          Je vous propose des accompagnements parentaux adaptés à chaque situation et à chaque famille. Que vous traversiez un
          défi parental précis, que vous cherchiez à renforcer les liens familiaux ou que vous organisiez un événement nous
          avons un accompagnement pensé pour ta réalité de parent.
        </p>
      </div>
      <div className={s.tabs} role="tablist" aria-label="Type d'offre">
        {Object.keys(ONGLETS).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            id={`tab-${k}`}
            aria-selected={tab === k}
            aria-controls="tarifs-panel"
            className={tab === k ? s.tabActive : s.tab}
            onClick={() => setTab(k)}
          >
            {k}
          </button>
        ))}
      </div>
      <div className={s.tarifsPanel} id="tarifs-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
        <ul className={s.tarifsGrid} role="list">
          {ONGLETS[tab].map((o, i) => (
            <li key={i} className={s.tarif}>
              <img src={`/img/accompagnements/${o.img}.jpg`} alt="" width={274} height={230} loading="lazy" />
              <div className={s.tarifBody}>
                <div className={s.tarifInfo}>
                  <span className={s.tarifChip}>{o.chip}</span>
                  <h3 className={s.tarifTitle}>{o.t}</h3>
                </div>
                <Button href={LINKS.booking} variant="jaune" className={s.tarifBtn}>Je réserve ma séance</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
