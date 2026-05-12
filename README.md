# 📘 BTS CIEL — Fiche de Révision Physique

Fiche de révision complète et interactive pour la **partie physique** du BTS CIEL (Cybersécurité, Informatique et réseaux, Électronique). Couvre **les deux options** : A (Informatique & Réseaux) et B (Électronique & Réseaux).

> Document HTML autonome — aucun build, aucune dépendance locale. Ouvre `index.html` dans un navigateur, c'est tout.

## 🎯 Contenu

La fiche couvre l'intégralité du référentiel officiel (Repère pour la formation V2), organisée en 9 sections :

| Section | Thème | Compétences |
|---|---|---|
| 00 | Repères, cadre du programme, niveaux taxonomiques | — |
| 01 | **Acquérir l'information** — capteurs, sensibilité, plage de mesure | C4, C6, C9, C10/C11 |
| 02 | **Traiter l'information** — chaîne de mesure, amplification, CAN, Shannon | C4, C5 |
| 03 | **Transporter l'information** — ondes, lignes, fibre, antennes, modulations (ASK, PSK, QAM, FSK, GMSK) | C4, C5, C6, C9, C10/C11 |
| 04 | **Utiliser l'information** — chaîne d'action, PWM, asservissement, PID | C4, C5 |
| 05 | Lois générales de l'électricité (continu + sinusoïdal) | Transversal |
| 06 | Caractérisation des signaux (temporelle, fréquentielle, bruit) | Transversal |
| 07 | Fonction filtrage (analogique + numérique, RIF/RII) | Transversal |
| 08 | Mesures et incertitudes (types A et B) | Transversal |
| 09 | **Formulaire express** — toutes les formules par cœur | — |

## ✨ Caractéristiques

- 📐 **Formules mathématiques rendues avec KaTeX** (chargement depuis CDN)
- 🎨 **Design éditorial original** — typographie Fraunces + Inter Tight + JetBrains Mono
- 📱 **Responsive** — fonctionne sur mobile, tablette, desktop
- 🖨️ **Imprimable** — styles d'impression intégrés (CSS `@media print`)
- 🧭 **Navigation collante** — sommaire toujours accessible en haut
- 🔍 **Tableaux et schémas** pour chaînes de mesure, chaînes d'action, asservissement
- 📊 **Tous les standards** : RS-232, RS-485, I²C, SPI, UART, CAN, Ethernet, Wi-Fi, Bluetooth, LoRa…

## 🚀 Utilisation

### Localement

```bash
git clone https://github.com/<ton-pseudo>/bts-ciel-revision.git
cd bts-ciel-revision
# ouvre index.html dans ton navigateur
```

Ou simplement double-clique sur `index.html`.

### En ligne (GitHub Pages)

1. Fork ou clone ce dépôt
2. Settings → Pages → Source : `Deploy from a branch` → `main` → `/ (root)`
3. La fiche sera publiée à `https://<ton-pseudo>.github.io/bts-ciel-revision/`

## 📝 Comment publier ce dépôt sur GitHub

```bash
cd bts-ciel-revision
git init
git add .
git commit -m "Initial commit: fiche révision BTS CIEL physique"
git branch -M main

# Crée un dépôt public sur github.com (sans README, sans .gitignore, sans license — déjà inclus)
# Récupère son URL, puis :

git remote add origin https://github.com/<ton-pseudo>/bts-ciel-revision.git
git push -u origin main
```

Puis active **GitHub Pages** dans les Settings du dépôt pour le rendre accessible en ligne.

## 🛠️ Personnalisation

Tout est dans un seul fichier `index.html` :

- **Couleurs** : variables CSS au début (`:root { --accent: #c2410c ... }`)
- **Police** : chargée depuis Google Fonts
- **Sections** : balises `<section id="...">` repérables dans la nav

## 📚 Source du référentiel

Le contenu est issu du document officiel **« Repère pour la formation — partie physique »** (RPF BTS CIEL V2), publié par le Ministère de l'Éducation Nationale pour le BTS CIEL.

## 📄 Licence

MIT — fais-en ce que tu veux. Si tu trouves ça utile, une étoile ⭐ sur le dépôt fait toujours plaisir.

---

**Bon courage pour l'examen !** 🎓
