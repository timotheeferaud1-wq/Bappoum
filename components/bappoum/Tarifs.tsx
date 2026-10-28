"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, LINKS } from "@/components/ui";
import { Avatars } from "@/components/accueil/Hero";
import s from "./bappoum.module.css";

const CATEGORIES = [
  { t: "Tous", href: "/accompagnements" },
  { t: "Coaching individuel", href: "/accompagnements" },
  { t: "Ateliers", href: "/accompagnements" },
  { t: "Evènements", href: "/accompagnements" },
  { t: "Bappoum", href: "/bappoum#tarifs", active: true },
];

type Formule = {
  nom: string;
  mensuel: number;
  features: string[];
  style: "classique" | "premium" | "plus";
};

const FEATURE = "Accès complet à la plateforme";
const FORMULES: Formule[] = [
  { nom: "Classique", mensuel: 16, features: Array(6).fill(FEATURE), style: "classique" },
  { nom: "Premium", mensuel: 16, features: Array(4).fill(FEATURE), style: "premium" },
  { nom: "Premium ++", mensuel: 16, features: Array(6).fill(FEATURE), style: "plus" },
];

type Periode = "mensuel" | "annuel";

/** Formules d'abonnement avec sélecteur Mensuel / Annuel (annuel = 10 mois payés, 2 offerts). */
export default function Tarifs() {
  const [periode, setPeriode] = useState<Periode>("mensuel");
  const annuel = periode === "annuel";

  return (
    <section id="tarifs" className={`container section ${s.anchor}`}>
      <div className={s.tarifsHead}>
        <p className={`pill ${s.tarifsPill}`}>
          + 250 familles accompagnées  · Séance découverte offerte
          <Avatars />
        </p>
        <h2 className="h1">Les formules d&apos;abonnement Bappoum</h2>
        <p className="p">
          Je vous propose des accompagnements parentaux adaptés à chaque situation et à chaque famille. Que vous
          traversiez un défi parental précis, que vous cherchiez à renforcer les liens familiaux ou que vous organisiez
          un événement nous avons un accompagnement pensé pour ta réalité de parent.
        </p>
      </div>

      <nav className={s.segWrap} aria-label="Types d'accompagnement">
        <div className={s.seg}>
          {CATEGORIES.map((c) => (
            <Link key={c.t} href={c.href} className={c.active ? s.segActive : undefined} aria-current={c.active ? "page" : undefined}>
              {c.t}
            </Link>
          ))}
        </div>
      </nav>

      <div className={s.tarifsPanel}>
        <div className={s.segWrap}>
          <div className={s.seg} role="radiogroup" aria-label="Période de facturation">
            {(["mensuel", "annuel"] as const).map((p) => (
              <button
                key={p}
                type="button"
                role="radio"
                aria-checked={periode === p}
                className={periode === p ? s.segActive : undefined}
                onClick={() => setPeriode(p)}
              >
                {p === "mensuel" ? "Mensuel" : "Annuel - 2 mois offerts"}
              </button>
            ))}
          </div>
        </div>

        <ul className={s.plans} role="list">
          {FORMULES.map((f) => (
            <li key={f.nom} className={`${s.plan} ${s[`plan_${f.style}`]}`}>
              <div className={s.planHead}>
                <h3>{f.nom}</h3>
                <div>
                  <p className={s.price}>
                    {annuel ? f.mensuel * 10 : f.mensuel}€ <span>{annuel ? "/an" : "/mois"}</span>
                  </p>
                  <p className={s.priceNote}>{annuel ? "2 mois offerts" : "sans engagement"}</p>
                </div>
              </div>
              <ul className={s.planFeatures} role="list">
                {f.features.map((t, i) => (
                  <li key={i}><span className={s.icon16} aria-hidden />{t}</li>
                ))}
              </ul>
              <Button
                href={LINKS.signup}
                variant={f.style === "classique" ? "rose" : f.style === "premium" ? "rose-outline" : "blanc"}
                className={s.planCta}
              >
                Voir les prochaines dates
              </Button>
            </li>
          ))}
        </ul>

        <div className={s.choisir}>
          <p className="p">Tu ne sais pas par où commencer ?</p>
          <Button href={LINKS.contact} variant="rose">On t&apos;aide à choisir</Button>
        </div>
      </div>
    </section>
  );
}
