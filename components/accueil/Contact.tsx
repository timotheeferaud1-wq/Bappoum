import s from "./accueil.module.css";

/** Prise de contact : formulaire visuel (pas d'envoi) + bloc de réservation (image du calendrier). */
export default function Contact() {
  return (
    <section id="contact" className="container section" style={{ scrollMarginTop: 140 }}>
      <div className={s.contactHead}>
        <h2 className="h1">Prise de contact avec Bavardons Parentalité</h2>
        <p className="p">
          Que tu cherches un abonnement, un coaching, une animation pour ton événement ou une intervention en entreprise —
          dis-nous ce dont tu as besoin, on revient vers toi sous 48h.
        </p>
      </div>
      <div className={s.contact}>
        <div className={s.contactCol}>
          <h3 className={s.center}>Nous envoyer un message</h3>
          <form className={s.form} action="">
            <div className={s.fields}>
              <label className={s.field}>
                <span>Nom*</span>
                <input type="text" name="nom" placeholder="trucmuche" required autoComplete="family-name" />
              </label>
              <label className={s.field}>
                <span>Prénom*</span>
                <input type="text" name="prenom" placeholder="trucmuche" required autoComplete="given-name" />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                <span>Votre email*</span>
                <input type="email" name="email" placeholder="trucmuche@gmail.com" required autoComplete="email" />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                <span>Téléphone</span>
                <input type="tel" name="telephone" placeholder="trucmuche@gmail.com" autoComplete="tel" />
              </label>
              <label className={`${s.field} ${s.fieldFull}`}>
                <span>Besoins*</span>
                <input type="text" name="besoins" placeholder="trucmuche@gmail.com" required />
              </label>
            </div>
            <button type="button" className={s.submit}>On vous rappelle</button>
          </form>
        </div>
        <div className={s.contactCol}>
          <h3>Réserve directement ta séance découverte offerte</h3>
          <img
            className={s.calendar}
            src="/img/accueil/calendrier.jpg"
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
