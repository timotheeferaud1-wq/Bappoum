# Guide de construction d'une page — site Bavardons Parentalité / Bappoum

Projet : `/home/claude/bappoum` (Next.js 15, App Router, TypeScript, CSS Modules, **pas de Tailwind**).
Maquette Figma : fichier `wQpPaBwsLiyEpHTR6fSHC9` (copie de « Bappoum »), largeur de référence 1920 px.

## Déjà en place (NE PAS MODIFIER — signale dans ton rapport si un changement est nécessaire)
- `app/layout.tsx` : police Baloo 2 (Fontsource), `<Header />` sticky et `<Footer />` sur toutes les pages.
- `app/globals.css` : tokens (`--rose #eb4d94`, `--jaune #f59b3d`, `--orange #f2820d`, `--title #710f3a`,
  `--txt #17030c`, `--blanc #fffaf0` = fond de page, `--label #feefe2`, `--peach #fef4eb`, `--rose-soft #fce8f1`),
  tailles (`--fs-h1` 51/54, `--fs-h3` 32, `--fs-h4` 26, `--fs-p` 20/26, label 15), `--gutter` (100 px en 1920),
  `--section-gap` (144 px en 1920), classes `.container`, `.section`, `.h1 .h3 .h4 .p .label`, `.t-orange .t-rose .t-title`,
  `.btn` + variantes, `.pill`, `.tag`, `.avatars`, `.paw`.
- `components/ui.tsx` : `Button` (variantes rose | rose-outline | jaune | jaune-outline | blanc, `paw` pour l'icône patte),
  `CtaButton` (bouton + petite mention dessous), `DecoPaw` (pattes décoratives roses), `LINKS`.
- `components/CtaBand.tsx` : bandeau rose final (titre/texte personnalisables) — à mettre en bas de chaque page si la maquette l'a.
- `components/Faq.tsx` : accordéon FAQ (`title` en ReactNode, `<em>` = partie rose ; `items` [{q, a}]).
  Les réponses n'existent pas dans la maquette : écris une réponse courte et plausible (1–2 phrases) à partir du contenu du site.
- Header et Footer sont déjà faits : ne recode pas la navbar ni le footer de la maquette.

## Ton périmètre (pour éviter les conflits entre agents)
Tu ne crées/modifies QUE :
- `app/<ta-route>/page.tsx` (+ `page.module.css`)
- `components/<ta-route>/*` si tu veux découper en sections
- `public/img/<ta-route>/*`
- `design/<ta-route>.xml` et `design/<ta-route>.png` (sources maquette)

### Travaille dans une copie isolée
D'autres agents construisent d'autres pages en même temps. Ne lance PAS `next build`/`next dev` dans `/home/claude/bappoum`.
```bash
mkdir -p /home/claude/work && cp -r /home/claude/bappoum /home/claude/work/<ta-route>   # node_modules inclus
cd /home/claude/work/<ta-route>
npm run build && (npx next start -p <ton-port> > /tmp/<ta-route>.log 2>&1 &)
```
À la fin, recopie UNIQUEMENT tes fichiers vers `/home/claude/bappoum` (app/<route>, components/<route>, public/img/<route>, design/<route>.*).
Pour arrêter ton serveur : `fuser -k <ton-port>/tcp` (n'utilise pas `pkill -f`, ça tue ton propre shell).

## Lire la maquette (appels Figma limités : 6 à 8 appels maximum par page)
Les fichiers d'origine ne sont PAS téléchargeables (figma.com est bloqué depuis le shell) : n'essaie pas `curl` sur les URL d'assets.
1. `mcp__Figma__create_session` (fileKey ci-dessus) puis lis `skill://figma/figma-design-to-code/SKILL.md` via `mcp__Figma__get_figma_skill`.
2. `mcp__Figma__get_design_context` sur le nœud de ta page (excludeScreenshot: true). Le résultat est trop gros → XML « sparse »
   (ids, noms, positions relatives, et le NOM DES NŒUDS TEXTE = le texte exact). Le résultat peut être enregistré dans un fichier
   par l'outil : récupère-le et enregistre le XML brut dans `design/<route>.xml` (une ligne `<frame ...>` en premier).
3. `mcp__Figma__get_screenshot` sur le nœud de ta page avec `maxDimension` = hauteur de la page et `enableBase64Response: true`.
   L'image pleine résolution est enregistrée sous `/root/.claude/projects/.../tool-results/mcp-Figma-blob-*.png` (chemin indiqué
   dans le résultat) : copie-la en `design/<route>.png`. NE l'ouvre PAS en entier avec Read (trop haute) : découpe des bandes
   de ~1100 px avec PIL pour regarder chaque section.
4. Pour les détails de style d'une section complexe (couleurs, rayons, ombres), tu peux appeler `get_design_context` sur
   2 à 4 sous-nœuds au maximum. La page d'accueil a déjà montré : boutons rayon 12, cartes rayon 24, pas d'ombre, texte 20/26.

## Images
Découpe-les dans la capture avec `scripts/figma_crop.py` (lis l'en-tête du script) :
```bash
python3 scripts/figma_crop.py list design/<route>.xml --grep image
python3 scripts/figma_crop.py crop design/<route>.xml design/<route>.png <id>=public/img/<route>/<nom>.jpg ...
python3 scripts/figma_crop.py box  design/<route>.png x,y,w,h public/img/<route>/<nom>.jpg
python3 scripts/figma_crop.py mask design/<route>.png x,y,w,h '#fffaf0' public/img/<route>/<icone>.png   # icône monochrome
```
- Photos : `.jpg`. Les coins arrondis se font en CSS (`border-radius`), donc découpe le rectangle complet. Si l'image a des
  coins arrondis/masque dans la maquette, découpe juste à l'intérieur pour ne pas embarquer le fond (ou applique le même rayon).
- Les pastilles d'avatars (`avatars`) et photos d'experts en forme découpée : découpe le cadre et reproduis la forme en CSS si possible.
- Les vecteurs nommés « Vector » de 250 px de haut au-dessus des cartes sont en fait des photos masquées : découpe-les.
- Les coordonnées du XML sont relatives au parent ; le script les additionne. Vérifie visuellement chaque découpe (Read sur
  quelques fichiers) : si décalée, utilise `box` avec des coordonnées mesurées sur la capture.

## Code
- Server Components par défaut ; `"use client"` seulement si interaction (onglets, carrousel…).
- Mise en page en flex/grid fluides, pas de positionnement absolu sauf décorations. Contenu centré dans `.container`
  (max 1720 px + gouttières). Sections espacées avec `.section` (144 px).
- Responsive obligatoire : 1920 fidèle à la maquette ; ≤ 1280 grilles réduites ; ≤ 720 une colonne, rien ne dépasse
  horizontalement (pas de scroll horizontal), boutons qui passent à la ligne.
- Textes : reprends le texte EXACT de la maquette (noms des nœuds texte), y compris les mots colorés (orange/rose).
- Liens : utilise les routes du site (`/`, `/approche`, `/accompagnements`, `/bappoum`, `/entreprises`, `/petite-enfance`,
  `/ressources`) et `LINKS` de `components/ui.tsx` pour les CTA.
- Formulaires : visuels seulement (pas d'envoi), `action` vide + `onSubmit` absent ; un bloc « calendrier » de réservation
  de la maquette = image découpée.
- `export const metadata = { title: "…" }` avec un titre et une description pertinents.

## Vérification (obligatoire avant de rendre la main)
```bash
python3 scripts/compare.py /<route> design/<route>.png /tmp/cmp-<route>.png --port <ton-port> --from 0 --to 2200
```
Regarde la comparaison côte à côte (gauche maquette, droite site) section par section (`--from/--to` par tranches),
corrige les écarts visibles (tailles, espacements, couleurs, ordre, images mal cadrées), puis vérifie aussi en 390 px :
`python3 scripts/compare.py /<route> x /tmp/m-<route>.png --port <ton-port> --width 390` (capture du site seule) et regarde
le haut, le milieu et le bas (découpe avec PIL). `npx tsc --noEmit` doit passer.

## Rapport final (court)
Route, fichiers créés, sections faites, écarts restants connus, et toute modification souhaitée sur les composants partagés.
