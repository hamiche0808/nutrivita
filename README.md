# 🌿 NutriVita

**Guide éducatif des vitamines des fruits et légumes** — 50 aliments, 12 vitamines.

Site web statique 100 % gratuit, hébergé sur **GitHub Pages**.

Conçu et réalisé par **BEN MESLI Hamiche**.

## 🔗 Adresse du site

https://hamiche0808.github.io/nutrivita/

## 📄 Pages

| Page | Description |
|---|---|
| `index.html` | Accueil : recherche, filtres, 58 aliments, guide des associations |
| `vitamines.html` | Guide des 12 vitamines + filtrage des aliments |
| `a-propos.html` | Mission du projet + contact |
| `mentions-legales.html` | Mentions légales (éditeur, hébergement, RGPD) |
| `404.html` | Page d'erreur personnalisée |

## 🗂️ Structure

```
nutrivita/
├── index.html            # Accueil
├── vitamines.html        # Guide des vitamines
├── a-propos.html         # À propos + contact
├── mentions-legales.html # Mentions légales
├── 404.html              # Page introuvable
├── robots.txt            # Directives d'indexation
├── sitemap.xml           # Plan du site (SEO)
├── .nojekyll             # Désactive Jekyll (GitHub Pages)
├── css/
│   ├── style.css         # Styles partagés
│   └── associations.css  # Style du guide des associations
├── js/
│   ├── data.js           # Base de données (50 aliments, 12 vitamines)
│   ├── data-legumes-secs.js  # Légumes secs (8 aliments) - v1.1
│   ├── associations.js   # Synergies ✅ et incompatibilités ⚠️ - v1.1
│   └── main.js           # Logique partagée (filtres, modale, rendu)
└── assets/
    ├── favicon.svg       # Favicon vectoriel
    ├── og-image.jpg      # Image de partage réseaux sociaux
    └── legumes-secs/     # Photos libres de droits des 8 legumes secs - v1.1.4
        ├── lentilles-vertes.webp   # Pexels 6086414 - Eva Bronzini
        ├── lentilles-corail.webp   # Pexels 34940649 - Anshu Kumar
        ├── pois-chiches.webp       # Pexels 34949284 - Mustafa Akin
        ├── haricots-rouges.webp    # Pexels 6316675 - Arina Krasnikova
        ├── pois-casses.jpg         # StockSnap CC0 - Tim Sullivan
        ├── flageolets.jpg          # Wikimedia Commons CC0 - Oreo Priest
        ├── feves.webp              # Pexels 7792149 - Ilaria M
        └── haricots-blancs.webp    # Pexels 36498028 - Mustafa Akin
```

## 🛠️ Technologies

- **HTML5 sémantique** — accessibilité (ARIA, contrastes, clavier)
- **CSS3** — variables, grille flexible, responsive (mobile → desktop)
- **JavaScript vanilla** — aucune dépendance, aucune donnée collectée
- **SEO** — Open Graph, Twitter Cards, sitemap, JSON-LD
- **Hébergement** — GitHub Pages (gratuit, HTTPS inclus)

## 🔄 Mettre à jour le site

Modifier les fichiers puis :

```bash
git add .
git commit -m "Description de la modification"
git push origin main
```

Le site se met à jour automatiquement en 1 à 2 minutes.

## ⚖️ Avertissement

Contenu éducatif — ne remplace pas un avis médical ou nutritionnel personnalisé.
