import type { ReactNode } from "react";
import { DecoPaw } from "./ui";
import styles from "./Faq.module.css";

/** FAQ en accordéon (details/summary : fonctionne sans JavaScript). */
export default function Faq({ title, items }: { title: ReactNode; items: { q: string; a: string }[] }) {
  return (
    <section className={`section ${styles.faq}`}>
      <DecoPaw variant="1" style={{ width: 93, height: 95, right: "4%", top: 0 }} />
      <DecoPaw variant="2" style={{ width: 94, height: 94, left: "4%", bottom: -60 }} />
      <h2 className={`h1 center ${styles.title}`}>{title}</h2>
      <div className={styles.list}>
        {items.map((it) => (
          <details key={it.q} className={styles.item}>
            <summary>
              <span>{it.q}</span>
              <svg className={styles.chev} width="28" height="16" viewBox="0 0 28 16" fill="none" aria-hidden>
                <path d="M2 2l12 12L26 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <p>{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
