import s from "./entreprises.module.css";

const FIELDS = [
  { label: "Nom*", name: "nom", type: "text", ph: "trucmuche", ac: "family-name", half: true, req: true },
  { label: "Prénom*", name: "prenom", type: "text", ph: "trucmuche", ac: "given-name", half: true, req: true },
  { label: "Votre email*", name: "email", type: "email", ph: "trucmuche@gmail.com", ac: "email", req: true },
  { label: "Téléphone", name: "telephone", type: "tel", ph: "trucmuche@gmail.com", ac: "tel" },
  { label: "Besoins*", name: "besoins", type: "text", ph: "trucmuche@gmail.com", req: true },
];

/** Prise de contact (formulaire visuel, pas d'envoi) + bloc de réservation (image du calendrier). */
export default function Contact() {
  return (
    <section id="contact" className="container section" style={{ scrollMarginTop: 140 }}>
      <div className={s.contactHead}>
        <h2 className="h1">
          Échanger avec Maëva - coaching parental individuel, questions sur Bappoum et demandes d&apos;accompagnement
        </h2>
        <p className="p">
          Que tu cherches un abonnement, un coaching, une animation pour ton événement ou une intervention en entreprise —
          dis-nous ce dont tu as besoin, on revient vers toi sous 48h.
        </p>
      </div>
      <div className={s.contact}>
        <div className={s.contactCol}>
          <h3 className="center">Poser une question sur l’accompagnement parental</h3>
          <form className={s.form} action="">
            <div className={s.fields}>
              {FIELDS.map((f) => (
                <label key={f.name} className={`${s.field}${f.half ? "" : ` ${s.fieldFull}`}`}>
                  <span>{f.label}</span>
                  <input type={f.type} name={f.name} placeholder={f.ph} required={f.req} autoComplete={f.ac} />
                </label>
              ))}
            </div>
            <button type="button" className={s.submit}>On vous rappelle</button>
          </form>
        </div>
        <div className={s.contactCol}>
          <h3>Réserver votre séance découverte de coaching parental, 15 minutes offertes</h3>
          <img
            className={s.calendar}
            src="/img/entreprises/calendrier.jpg"
            alt="Calendrier de réservation d'une séance découverte"
            width={812}
            height={668}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
