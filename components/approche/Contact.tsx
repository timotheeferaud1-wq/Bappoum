import a from "@/components/accueil/accueil.module.css";
import s from "./approche.module.css";

/** Échanger avec Maëva : formulaire visuel (pas d'envoi) + bloc de réservation (image du calendrier). */
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
      <div className={a.contact}>
        <div className={a.contactCol}>
          <h3 className={a.center}>Poser une question sur l’accompagnement parental</h3>
          <form className={a.form} action="">
            <div className={a.fields}>
              <label className={a.field}>
                <span>Nom*</span>
                <input type="text" name="nom" placeholder="trucmuche" required autoComplete="family-name" />
              </label>
              <label className={a.field}>
                <span>Prénom*</span>
                <input type="text" name="prenom" placeholder="trucmuche" required autoComplete="given-name" />
              </label>
              <label className={`${a.field} ${a.fieldFull}`}>
                <span>Votre email*</span>
                <input type="email" name="email" placeholder="trucmuche@gmail.com" required autoComplete="email" />
              </label>
              <label className={`${a.field} ${a.fieldFull}`}>
                <span>Téléphone</span>
                <input type="tel" name="telephone" placeholder="trucmuche@gmail.com" autoComplete="tel" />
              </label>
              <label className={`${a.field} ${a.fieldFull}`}>
                <span>Besoins*</span>
                <input type="text" name="besoins" placeholder="trucmuche@gmail.com" required />
              </label>
            </div>
            <button type="button" className={a.submit}>On vous rappelle</button>
          </form>
        </div>
        <div className={`${a.contactCol} ${s.bookingCol}`}>
          <h3>Réserver votre séance découverte de coaching parental, 15 minutes offertes</h3>
          <img
            className={s.calendar}
            src="/img/approche/calendrier.jpg"
            alt="Calendrier de réservation d'une séance découverte"
            width={812}
            height={710}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
