# BTS CIEL · Physique · Révision Option B

> Ressources de révision complètes pour la partie **physique** du BTS CIEL — **option B (Électronique & Réseaux)**. Conforme au Repère pour la Formation V2.

🔗 **Site en ligne** : [donaldse.github.io/bts-ciel-revision](https://donaldse.github.io/bts-ciel-revision/)

---

## 📚 Contenu (v4.0)

**Six outils complémentaires** pour préparer l'épreuve E4 (option B) :

| № | Fichier | Description |
|---|---------|-------------|
| 01 | `fiche-complete.html` | Cours intégral option B avec formules KaTeX |
| 02 | `fiche-2pages.html` | Synthèse 2 pages imprimable (A4) |
| 03 | `flashcards.html` | 300 cartes question/réponse retournables |
| 04 | `questions-reponses.html` | **NEW** — 300 Q/R libres, 2 modes (libre / révélation) |
| 05 | `quiz-simple.html` | Quiz 300 questions par thème |
| 06 | `quiz.html` | Quiz examen 30 questions niveau BTS avec calculs |

**Le tout :**
- 🎨 Mode clair **et sombre** (toggle persistant)
- 📱 Responsive (mobile + tablette + desktop)
- 🖨️ Imprimable (fiche 2p optimisée A4)
- ✨ Sans framework, autonome
- 🔠 Typo soignée (Fraunces + Inter Tight + JetBrains Mono)

---

## 🎯 Option B — points clés couverts

Ce qui distingue l'option B (par rapport à l'option A) :

- **AOP** : inverseur, non-inverseur, suiveur, intégrateur, dérivateur, comparateur
- **Filtrage actif** (avec AOP)
- **Diagramme de Bode** : transmittance isochrone T(jω), critère du revers
- **Asservissement approfondi** : FTBO/FTBF, marges de phase (> 45°) et de gain (> 6 dB), placement de pôles, correcteur à avance de phase
- **Modulations** : constellation IQ, M-QAM jusqu'à 1024-QAM, efficacité spectrale
- **Lignes de transmission** : Γ = (Z_L − Z_c)/(Z_L + Z_c), ROS, réflectométrie TDR
- **CAN approfondi** : SAR, flash, sigma-delta, SNR ≈ 6,02·N + 1,76 dB
- **Incertitudes** : type A, type B, composée u_C, élargie U (k=2, 95%)

---

## 🚀 Utilisation

### En ligne (recommandé)

Visite [donaldse.github.io/bts-ciel-revision](https://donaldse.github.io/bts-ciel-revision/) directement depuis ton navigateur.

### En local

```bash
git clone https://github.com/DonaldSe/bts-ciel-revision.git
cd bts-ciel-revision
python -m http.server 8000   # ou : npx serve .
```

Puis ouvre `http://localhost:8000` dans ton navigateur.

> ⚠️ Pour `quiz-simple.html`, `flashcards.html` et `questions-reponses.html`, un serveur HTTP est nécessaire (ils chargent `quiz-data.json` via fetch). Les autres pages fonctionnent en ouverture directe (file://).

---

## 🗂 Structure du programme

| Thème | Contenu |
|-------|---------|
| **01 · Acquérir** | Capteurs analogiques et numériques, sensibilité, étendue, calibration |
| **02 · Traiter** | Chaîne de mesure, AOP, CAN, Shannon, anti-repliement |
| **03 · Transporter** | Lignes (Γ, ROS), fibres, antennes, modulations IQ |
| **04 · Utiliser** | Boucle fermée, FTBO/FTBF, Bode, PID, marges de stabilité |
| **05 · Électricité** | Régime sinus, impédance complexe, dB, puissances |
| **06 · Signaux** | Fourier, spectre, DSP, FFT, bruit, SNR |
| **07 · Filtres** | Bode, ordre, actifs (AOP), RIF/RII, gabarits |
| **08 · Mesures** | Incertitudes types A/B, u_C, k=2, conformité |

---

## 🛠 Méthode recommandée

1. **Comprendre** → fiche complète
2. **Mémoriser** → flashcards (300 cartes)
3. **Rédiger** → Q/R libre (entraîne-toi à formuler)
4. **S'entraîner** → quiz simple (300 questions)
5. **Évaluer** → quiz examen (30 questions)
6. **Consolider** → fiche 2 pages (imprime-la !)

---

## 📋 Versions

- **v4.0** : 100% option B, dark mode, nouvelle page Q/R libre
- **v3.0** : ajout quiz 300 questions + flashcards
- **v2.0** : ajout sommaire + fiche 2 pages + quiz 30 questions
- **v1.0** : fiche complète initiale

---

## ⚖️ Licence

MIT. Tu peux réutiliser, modifier, redistribuer librement.

Le contenu pédagogique s'appuie sur le **Repère pour la Formation BTS CIEL V2** (partie physique) — document officiel publié par le Ministère de l'Éducation Nationale.

---

🎓 *Bonne révision et bon courage pour l'examen !*
