# 📘 BTS CIEL — Fiches de Révision Physique

Site de révision complet pour la **partie physique** du BTS CIEL (Cybersécurité, Informatique et réseaux, Électronique). Couvre **les deux options** : A (Informatique & Réseaux) et B (Électronique & Réseaux).

> 🌐 **En ligne** : [donaldse.github.io/bts-ciel-revision](https://donaldse.github.io/bts-ciel-revision/)

## ✨ Ce que contient le site

| Page | Description |
|---|---|
| **`index.html`** | 🏠 Page d'accueil avec sommaire et liens vers toutes les ressources |
| **`fiche-complete.html`** | 📖 Fiche complète détaillée (9 sections, ~70 formules, ~30 min de lecture) |
| **`fiche-2pages.html`** | 📄 Résumé express imprimable sur 2 pages |
| **`quiz.html`** | 🎯 Quiz interactif de 30 questions avec correction et explications |

## 🎯 Méthode de révision recommandée

1. **Apprendre** → Lire la fiche complète, comprendre chaque formule
2. **Mémoriser** → Imprimer la fiche 2 pages, la garder sous la main
3. **Tester** → Faire le quiz, viser 25/30 minimum

## 📚 Contenu du programme

### Thèmes principaux
1. **Acquérir l'information** — capteurs, sensibilité, datasheet, capteurs intelligents
2. **Traiter l'information** — chaîne de mesure, amplification, CAN, condition de Shannon
3. **Transporter l'information** — ondes, lignes, fibre optique, antennes, modulations (ASK, PSK, QAM, FSK, GMSK)
4. **Utiliser l'information** — chaîne d'action, PWM, asservissement, PID

### Connaissances transversales
- Lois générales de l'électricité (continu + sinusoïdal)
- Caractérisation des signaux (temporel, fréquentiel, bruit, Fourier)
- Fonction filtrage (analogique + numérique RIF/RII, Bode)
- Mesures et incertitudes (types A et B)

## 🚀 Déploiement avec GitHub CLI

```bash
# 1. Clone le repo localement
gh repo clone DonaldSe/bts-ciel-revision
cd bts-ciel-revision

# 2. Copie tous les nouveaux fichiers dans le dossier
#    (index.html, fiche-complete.html, fiche-2pages.html, quiz.html, README.md)

# 3. Commit et push
git add .
git commit -m "Add sommaire, fiche 2 pages and interactive quiz"
git push origin main

# 4. Active GitHub Pages (une seule fois)
gh repo edit --enable-pages
# Ou via le web : Settings → Pages → Source: main / root → Save
```

## 🛠️ Personnalisation

Tout est dans des fichiers HTML autonomes (pas de build, pas de framework). Pour modifier :

- **Couleurs** : variables CSS au début de chaque fichier (`:root { --accent: ... }`)
- **Polices** : Google Fonts (Fraunces, Inter Tight, JetBrains Mono)
- **Formules** : KaTeX (LaTeX rendu côté client)
- **Quiz** : ajouter des questions dans le tableau `questions` de `quiz.html`

## 📄 Licence

MIT — fais-en ce que tu veux. ⭐ une étoile sur le repo fait toujours plaisir.

## 📚 Source du référentiel

Contenu basé sur le document officiel **« Repère pour la formation — partie physique »** (RPF BTS CIEL V2), publié par le Ministère de l'Éducation Nationale.

---

**Bon courage pour l'examen !** 🎓
