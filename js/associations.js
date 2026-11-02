/* =========================================================
   NutriVita v1.1 — Guide des associations nutritionnelles
   ✅ Synergies : paires qui améliorent l'absorption
   ⚠️ Incompatibilités : paires à éviter ou espacer

   « matches » : noms d'aliments de la base « foods »
   concernés (pour afficher l'info dans la fiche).
========================================================= */

const synergies = [

    {
        a: "Lentilles vertes",
        b: "Poivron rouge",
        tag: "Fer + Vitamine C",
        why:
            "La vitamine C du poivron rouge multiplie l'absorption du fer " +
            "végétal des lentilles : ajoutez-en cru, en dés, juste avant " +
            "de servir.",
        matches: ["Lentilles vertes", "Poivron rouge"]
    },

    {
        a: "Pois chiches",
        b: "Citron",
        tag: "Fer + Vitamine C",
        why:
            "Un filet de citron sur le houmous ou les pois chiches permet " +
            "à la vitamine C de convertir le fer végétal en une forme " +
            "bien mieux absorbée.",
        matches: ["Pois chiches", "Citron"]
    },

    {
        a: "Épinards",
        b: "Citron",
        tag: "Fer + Vitamine C",
        why:
            "S Presse du citron sur les épinards (cru ou cuits) aide " +
            "l'organisme à capter leur fer en neutralisant partiellement " +
            "les oxalates.",
        matches: ["Épinards", "Citron"]
    },

    {
        a: "Carotte",
        b: "Avocat",
        tag: "Bêta-carotène + Lipides",
        why:
            "Le bêta-carotène (provitamine A) de la carotte est liposoluble : " +
            "quelques tranches d'avocat ou une cuillère d'huile améliorent " +
            "fortement son absorption.",
        matches: ["Carotte", "Avocat"]
    },

    {
        a: "Tomate",
        b: "Huile d'olive",
        tag: "Lycopène + Lipides",
        why:
            "Le lycopène de la tomate, un antioxydant protecteur, se " +
            "libère à la cuisson et s'absorbe plus de deux fois mieux " +
            "avec un peu de matière grasse.",
        matches: ["Tomate"]
    },

    {
        a: "Brocoli",
        b: "Huile d'olive",
        tag: "Vitamines A, E, K + Lipides",
        why:
            "Les vitamines liposolubles du brocoli (K, A, E) passent " +
            "beaucoup mieux dans l'organisme accompagnées d'un filet " +
            "d'huile d'olive.",
        matches: ["Brocoli"]
    },

    {
        a: "Mangue",
        b: "Avocat",
        tag: "Bêta-carotène + Lipides",
        why:
            "En salade ou smoothie, la mangue riche en caroténoïdes " +
            "et l'avocat riche en bons lipides forment un duo gagnant " +
            "pour la vitamine A précurseur.",
        matches: ["Mangue", "Avocat"]
    },

    {
        a: "Champignon",
        b: "Huile d'olive",
        tag: "Vitamine D + Lipides",
        why:
            "La vitamine D du champignon (surtout s'il a été exposé " +
            "aux UV) est liposoluble : cuisez-le avec un peu de matière " +
            "grasse pour optimiser son absorption.",
        matches: ["Champignon"]
    }

];

const warnings = [

    {
        a: "Thé et café",
        b: "Fer végétal",
        tag: "⚠️ Tanins vs Fer",
        why:
            "Les tanins du thé et du café embarrassent l'absorption du fer " +
            "végétal (lentilles, épinards, haricots...). Conseil : attendez " +
            "au moins 1 h après le repas pour boire votre tasse.",
        matches: [
            "Épinards", "Lentilles vertes", "Lentilles corail",
            "Pois chiches", "Haricots rouges", "Haricots blancs",
            "Pois cassés", "Flageolets", "Betterave"
        ]
    },

    {
        a: "Produits laitiers riches en calcium",
        b: "Fer végétal",
        tag: "⚠️ Calcium vs Fer",
        why:
            "Un calcium très concentré au même moment (yaourt, fromage, " +
            "lait) rivalise avec le fer végétal. Conseil : espacez de " +
            "2 h vos apports en calcium de vos plats riches en fer.",
        matches: [
            "Épinards", "Lentilles vertes", "Lentilles corail",
            "Pois chiches", "Haricots rouges", "Haricots blancs",
            "Pois cassés", "Flageolets"
        ]
    },

    {
        a: "Alcool",
        b: "Folates (Vitamine B9)",
        tag: "⚠️ Alcool vs B9",
        why:
            "L'alcool freine nettement l'absorption des folates et " +
            "réduit leurs réserves. A consommer avec grande modération, " +
            "surtout à distance des repas riches en B9.",
        matches: [
            "Épinards", "Asperge", "Betterave", "Oranges",
            "Haricots blancs", "Petits pois", "Artichaut"
        ]
    },

    {
        a: "Repas sans aucune matière grasse",
        b: "Vitamines A, D, E et K",
        tag: "⚠️ Absence de lipides",
        why:
            "Ces vitamines sont liposolubles : dans une salade « sans " +
            "graisses », une grande partie est perdue. Le moindre gras " +
            "sain (huile, avocat, noix) démultiplie leur absorption.",
        matches: [
            "Carotte", "Tomate", "Brocoli", "Champignon",
            "Épinards", "Courge", "Mangue", "Laitue",
            "Asperge", "Haricots verts"
        ]
    },

    {
        a: "Pamplemousse et son jus",
        b: "Certains médicaments",
        tag: "⚠️ Interaction médicamenteuse",
        why:
            "Le furanocoumarine du pamplemousse perturbe l'absorption " +
            "de nombreux médicaments (statines, anticoagulants...). " +
            "Vérifiez la notice ou demandez conseil à un professionnel " +
            "de santé.",
        matches: ["Pamplemousse"]
    },

    {
        a: "Cuissons longues à haute température",
        b: "Vitamines C et B9",
        tag: "⚠️ Chaleur vs vitamines fragiles",
        why:
            "La vitamine C et les folates sont sensibles à la chaleur : " +
            "privilégiez la vapeur rapide, le wok ou le cru pour en " +
            "préserver le maximum.",
        matches: [
            "Poivron rouge", "Fraise", "Citron", "Kiwi",
            "Myrtille", "Framboise", "Épinards", "Asperge",
            "Brocoli", "Pois chiches"
        ]
    },

    {
        a: "Épinards et betterave (oxalates)",
        b: "Calcium concentré",
        tag: "⚠️ Oxalates vs Calcium",
        why:
            "Les oxalates de ces végétaux se fixent sur le calcium et " +
            "réduisent l'absorption des deux. Astuce : une cuisson à " +
            "l'eau baisse énormément leur teneur en oxalates.",
        matches: ["Épinards", "Betterave"]
    }

];
