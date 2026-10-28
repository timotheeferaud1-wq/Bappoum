# Bavardons Parentalité — site vitrine

Site Next.js 15 reproduisant la maquette Figma « Bappoum » : Accueil, Approche, Accompagnements, Bappoum,
Entreprises, Petite enfance, Ressources.

```bash
npm install
npm run dev   # http://localhost:3000
```

Déploiement : importer le dépôt sur vercel.com/new (Next.js détecté automatiquement), aucune variable d'environnement.

## Organisation
- `app/<page>/page.tsx` : une page par route ; `components/<page>/` : sections propres à la page.
- `components/` : Header, Footer, CtaBand (bandeau rose final), Faq, `ui.tsx` (boutons, icône patte).
- `app/globals.css` : couleurs, typo (Baloo 2, auto-hébergée), espacements.
- `public/img/` : images découpées dans la maquette.
- `design/` : captures et extraits de la maquette, `scripts/` : outils de découpe et de comparaison.

## À compléter
- Images d'Approche et Ressources : provisoires (quota Figma atteint pendant l'extraction).
- Images en résolution 1× (découpées dans des captures) : à remplacer par les originaux HD.
- Formulaires de contact : visuels uniquement, pas d'envoi branché.
- Textes provisoires de la maquette repris tels quels (« trucmuche », tarifs à 16 € partout, « Marc André » ×24,
  question FAQ « Pourquoi une PME a-t-elle besoin d'un site internet professionnel ? »).
- Liens « Commencer gratuitement », « Se connecter », réservation : à brancher sur les vrais outils.
