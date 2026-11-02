/* =========================================================
   NutriVita - Base de donnees partagee
   Vitamines + 50 fruits et legumes (donnees educatives)
========================================================= */
const vitamins = {

            "A": {
                name: "Vitamine A",
                icon: "👁️",
                description:
                    "La vitamine A contribue au maintien d'une vision normale, " +
                    "au fonctionnement du système immunitaire et à la santé " +
                    "de la peau et des muqueuses."
            },

            "B1": {
                name: "Vitamine B1 (Thiamine)",
                icon: "⚡",
                description:
                    "La vitamine B1 contribue au métabolisme énergétique " +
                    "normal et au fonctionnement normal du système nerveux " +
                    "et du cœur."
            },

            "B2": {
                name: "Vitamine B2 (Riboflavine)",
                icon: "🔋",
                description:
                    "La vitamine B2 participe au métabolisme énergétique, " +
                    "à la protection des cellules contre le stress oxydatif " +
                    "et au maintien d'une vision normale."
            },

            "B3": {
                name: "Vitamine B3 (Niacine)",
                icon: "🧠",
                description:
                    "La vitamine B3 contribue au fonctionnement normal " +
                    "du système nerveux, au métabolisme énergétique " +
                    "et au maintien d'une peau normale."
            },

            "B5": {
                name: "Vitamine B5 (Acide pantothénique)",
                icon: "🔬",
                description:
                    "La vitamine B5 contribue à la synthèse normale " +
                    "et au métabolisme normal des hormones stéroïdes, " +
                    "de la vitamine D et de certains neurotransmetteurs."
            },

            "B6": {
                name: "Vitamine B6",
                icon: "🧬",
                description:
                    "La vitamine B6 contribue au métabolisme normal " +
                    "des protéines, au fonctionnement du système nerveux " +
                    "et à la formation normale des globules rouges."
            },

            "B9": {
                name: "Vitamine B9 (Folates)",
                icon: "🌱",
                description:
                    "Les folates contribuent à la formation normale " +
                    "du sang, au fonctionnement du système immunitaire " +
                    "et à la croissance des tissus maternels pendant " +
                    "la grossesse."
            },

            "B12": {
                name: "Vitamine B12",
                icon: "🩸",
                description:
                    "La vitamine B12 contribue à la formation normale " +
                    "des globules rouges, au fonctionnement du système " +
                    "nerveux et au métabolisme énergétique. Elle est " +
                    "naturellement présente principalement dans les " +
                    "aliments d'origine animale."
            },

            "C": {
                name: "Vitamine C",
                icon: "🍊",
                description:
                    "La vitamine C contribue au fonctionnement normal " +
                    "du système immunitaire, à la formation normale " +
                    "du collagène, à la protection des cellules contre " +
                    "le stress oxydatif et à l'absorption du fer."
            },

            "D": {
                name: "Vitamine D",
                icon: "☀️",
                description:
                    "La vitamine D contribue à l'absorption et à " +
                    "l'utilisation normales du calcium et du phosphore, " +
                    "au maintien d'une ossature normale et au fonctionnement " +
                    "normal du système immunitaire."
            },

            "E": {
                name: "Vitamine E",
                icon: "🛡️",
                description:
                    "La vitamine E contribue à protéger les cellules " +
                    "contre le stress oxydatif. Elle joue un rôle " +
                    "antioxydant dans l'organisme."
            },

            "K": {
                name: "Vitamine K",
                icon: "🩹",
                description:
                    "La vitamine K contribue à une coagulation sanguine " +
                    "normale et au maintien d'une ossature normale."
            }

        };


        /* =========================================
           2. BASE DE DONNEES DES ALIMENTS
        ========================================= */

        /*
            Les vitamines listées correspondent aux principales
            vitamines que l'on peut retrouver dans ces aliments.

            Les quantités exactes varient selon les aliments,
            leur maturité et leur préparation.
        */

        const foods = [

            /* ---------- FRUITS (1 à 25) ---------- */

            {
                id: 1,
                name: "Orange",
                emoji: "🍊",
                category: "Fruit",
                vitamins: ["C", "B1", "B9"],
                description:
                    "L'orange est un agrume riche en vitamine C. " +
                    "Elle apporte également des fibres et de l'eau.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine C favorise l'absorption du fer d'origine végétale.",
                    "Les fibres participent au fonctionnement normal du transit intestinal.",
                    "L'orange contribue à l'hydratation grâce à sa forte teneur en eau."
                ]
            },

            {
                id: 2,
                name: "Pomme",
                emoji: "🍎",
                category: "Fruit",
                vitamins: ["C", "B1", "B2", "B6"],
                description:
                    "La pomme est un fruit riche en eau et en fibres, " +
                    "notamment lorsqu'elle est consommée avec sa peau.",
                benefits: [
                    "Les fibres contribuent à la satiété.",
                    "La pomme participe au bon fonctionnement du transit intestinal.",
                    "Elle contient des composés végétaux antioxydants.",
                    "Elle constitue une collation pratique et peu énergétique."
                ]
            },

            {
                id: 3,
                name: "Banane",
                emoji: "🍌",
                category: "Fruit",
                vitamins: ["B6", "C", "B9"],
                description:
                    "La banane apporte des glucides, du potassium " +
                    "et plusieurs vitamines du groupe B.",
                benefits: [
                    "La vitamine B6 contribue au métabolisme énergétique normal.",
                    "Le potassium contribue au fonctionnement normal des muscles.",
                    "La banane fournit de l'énergie grâce à ses glucides.",
                    "Elle peut constituer une collation intéressante avant une activité physique."
                ]
            },

            {
                id: 4,
                name: "Kiwi",
                emoji: "🥝",
                category: "Fruit",
                vitamins: ["C", "K", "E", "B9"],
                description:
                    "Le kiwi est particulièrement intéressant pour son apport " +
                    "en vitamine C et en fibres alimentaires.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "Les fibres contribuent au fonctionnement normal du transit.",
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "Le kiwi contient des composés végétaux antioxydants."
                ]
            },

            {
                id: 5,
                name: "Fraise",
                emoji: "🍓",
                category: "Fruit",
                vitamins: ["C", "B9", "K"],
                description:
                    "La fraise est un fruit riche en vitamine C, " +
                    "en eau et en composés végétaux.",
                benefits: [
                    "La vitamine C contribue à la formation normale du collagène.",
                    "Les folates contribuent à la formation normale du sang.",
                    "Les fraises apportent des fibres alimentaires.",
                    "Elles contiennent des polyphénols."
                ]
            },

            {
                id: 6,
                name: "Mangue",
                emoji: "🥭",
                category: "Fruit",
                vitamins: ["A", "C", "E", "B6"],
                description:
                    "La mangue est un fruit tropical qui apporte " +
                    "du bêta-carotène, précurseur de la vitamine A.",
                benefits: [
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La vitamine C participe à la formation normale du collagène.",
                    "La mangue apporte des fibres.",
                    "Elle contient des caroténoïdes."
                ]
            },

            {
                id: 7,
                name: "Papaye",
                emoji: "🍈",
                category: "Fruit",
                vitamins: ["A", "C", "E", "B9"],
                description:
                    "La papaye est un fruit tropical riche en vitamine C " +
                    "et en caroténoïdes.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La papaye contient des fibres alimentaires.",
                    "Elle apporte des composés végétaux antioxydants."
                ]
            },

            {
                id: 8,
                name: "Avocat",
                emoji: "🥑",
                category: "Fruit",
                vitamins: ["E", "K", "B5", "B6", "B9", "C"],
                description:
                    "L'avocat est un fruit riche en acides gras mono-insaturés, " +
                    "en fibres et en plusieurs vitamines.",
                benefits: [
                    "La vitamine E contribue à protéger les cellules contre le stress oxydatif.",
                    "Les folates participent à la formation normale du sang.",
                    "Les fibres contribuent au fonctionnement normal du transit.",
                    "Les acides gras mono-insaturés contribuent à une alimentation équilibrée."
                ]
            },

            {
                id: 9,
                name: "Citron",
                emoji: "🍋",
                category: "Fruit",
                vitamins: ["C", "B6", "B9"],
                description:
                    "Le citron est un agrume apprécié pour son apport " +
                    "en vitamine C et son goût acidulé.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine C favorise l'absorption du fer végétal.",
                    "Le citron permet de parfumer les aliments sans ajouter de sel.",
                    "Il contient des composés végétaux."
                ]
            },

            {
                id: 10,
                name: "Raisin",
                emoji: "🍇",
                category: "Fruit",
                vitamins: ["C", "K", "B1", "B6"],
                description:
                    "Le raisin contient des glucides, de l'eau " +
                    "et des composés végétaux comme les polyphénols.",
                benefits: [
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "Le raisin fournit de l'énergie grâce à ses glucides.",
                    "Il contient des polyphénols.",
                    "Il participe à l'hydratation."
                ]
            },

            {
                id: 11,
                name: "Ananas",
                emoji: "🍍",
                category: "Fruit",
                vitamins: ["C", "B1", "B6"],
                description:
                    "L'ananas est un fruit tropical juteux, reconnu pour " +
                    "sa teneur en vitamine C et en manganèse.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine C participe à la protection des cellules contre le stress oxydatif.",
                    "L'ananas apporte des fibres alimentaires.",
                    "Il contribue à l'hydratation grâce à sa forte teneur en eau."
                ]
            },

            {
                id: 12,
                name: "Pastèque",
                emoji: "🍉",
                category: "Fruit",
                vitamins: ["A", "C", "B6"],
                description:
                    "La pastèque est très riche en eau et apporte " +
                    "du lycopène, un caroténoïde antioxydant.",
                benefits: [
                    "La pastèque contribue à l'hydratation grâce à sa teneur en eau.",
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La vitamine C participe au fonctionnement normal du système immunitaire.",
                    "Elle contient du lycopène."
                ]
            },

            {
                id: 13,
                name: "Melon",
                emoji: "🍈",
                category: "Fruit",
                vitamins: ["A", "C", "B9"],
                description:
                    "Le melon, notamment le melon cantaloup, est une bonne " +
                    "source de bêta-carotène et de vitamine C.",
                benefits: [
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "Les folates participent à la formation normale du sang.",
                    "Le melon participe à l'hydratation."
                ]
            },

            {
                id: 14,
                name: "Pamplemousse",
                emoji: "🍊",
                category: "Fruit",
                vitamins: ["C", "A", "B5"],
                description:
                    "Le pamplemousse est un agrume riche en vitamine C " +
                    "et en composés végétaux comme les flavonoïdes.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine C favorise l'absorption du fer végétal.",
                    "Il contient des flavonoïdes antioxydants.",
                    "Il apporte des fibres avec peu de calories."
                ]
            },

            {
                id: 15,
                name: "Myrtille",
                emoji: "🫐",
                category: "Fruit",
                vitamins: ["C", "K", "E"],
                description:
                    "La myrtille est un petit fruit réputé pour sa richesse " +
                    "en anthocyanes, des pigments antioxydants.",
                benefits: [
                    "La vitamine C contribue à la protection des cellules contre le stress oxydatif.",
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "La vitamine E joue un rôle antioxydant dans l'organisme.",
                    "La myrtille contient des anthocyanes."
                ]
            },

            {
                id: 16,
                name: "Framboise",
                emoji: "🍓",
                category: "Fruit",
                vitamins: ["C", "B9", "E"],
                description:
                    "La framboise est un fruit rouge riche en fibres " +
                    "et en vitamine C.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "Les framboises sont riches en fibres alimentaires.",
                    "Les folates participent à la formation normale du sang.",
                    "Elles contiennent des polyphénols antioxydants."
                ]
            },

            {
                id: 17,
                name: "Cerise",
                emoji: "🍒",
                category: "Fruit",
                vitamins: ["C", "B6", "K"],
                description:
                    "La cerise apporte des anthocyanes, de la vitamine C " +
                    "et du potassium.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "Le potassium contribue au fonctionnement normal des muscles.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "La cerise contient des composés antioxydants."
                ]
            },

            {
                id: 18,
                name: "Pêche",
                emoji: "🍑",
                category: "Fruit",
                vitamins: ["A", "C", "E", "B3"],
                description:
                    "La pêche est un fruit juteux qui apporte du bêta-carotène, " +
                    "de la vitamine C et de l'eau.",
                benefits: [
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La vitamine C participe à la formation normale du collagène.",
                    "La vitamine E contribue à protéger les cellules contre le stress oxydatif.",
                    "La pêche participe à l'hydratation."
                ]
            },

            {
                id: 19,
                name: "Poire",
                emoji: "🍐",
                category: "Fruit",
                vitamins: ["C", "K", "B6"],
                description:
                    "La poire est un fruit désaltérant, riche en fibres, " +
                    "notamment lorsqu'elle est consommée avec sa peau.",
                benefits: [
                    "Les fibres contribuent au fonctionnement normal du transit.",
                    "La vitamine C contribue à la protection des cellules contre le stress oxydatif.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "La poire constitue une collation peu énergétique."
                ]
            },

            {
                id: 20,
                name: "Abricot",
                emoji: "🍑",
                category: "Fruit",
                vitamins: ["A", "C", "E"],
                description:
                    "L'abricot est riche en bêta-carotène, précurseur " +
                    "de la vitamine A, et en potassium.",
                benefits: [
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La vitamine A participe au fonctionnement normal du système immunitaire.",
                    "La vitamine E joue un rôle antioxydant.",
                    "L'abricot apporte du potassium et des fibres."
                ]
            },

            {
                id: 21,
                name: "Prune",
                emoji: "🫐",
                category: "Fruit",
                vitamins: ["C", "K", "B6"],
                description:
                    "La prune est un fruit à noyau qui apporte des fibres, " +
                    "de la vitamine K et des composés antioxydants.",
                benefits: [
                    "Les fibres contribuent au fonctionnement normal du transit.",
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "La vitamine C participe à la protection des cellules contre le stress oxydatif.",
                    "La prune contient des anthocyanes."
                ]
            },

            {
                id: 22,
                name: "Grenade",
                emoji: "🍎",
                category: "Fruit",
                vitamins: ["C", "K", "B9"],
                description:
                    "La grenade est reconnue pour sa richesse en polyphénols " +
                    "et en vitamine C.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "Les folates contribuent à la formation normale du sang.",
                    "La grenade contient des polyphénols antioxydants."
                ]
            },

            {
                id: 23,
                name: "Fruit de la passion",
                emoji: "🫐",
                category: "Fruit",
                vitamins: ["A", "C", "B2", "B6"],
                description:
                    "Le fruit de la passion est riche en vitamine C, en fibres " +
                    "et en minéraux comme le potassium.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La vitamine B2 participe au métabolisme énergétique.",
                    "Il apporte des fibres alimentaires."
                ]
            },

            {
                id: 24,
                name: "Figue",
                emoji: "🍇",
                category: "Fruit",
                vitamins: ["B6", "K", "B5"],
                description:
                    "La figue est un fruit doux qui apporte des fibres, " +
                    "des minéraux et plusieurs vitamines du groupe B.",
                benefits: [
                    "Les fibres contribuent au fonctionnement normal du transit.",
                    "La vitamine B6 contribue au métabolisme énergétique normal.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "La figue apporte des minéraux comme le potassium et le calcium."
                ]
            },

            {
                id: 25,
                name: "Litchi",
                emoji: "🍈",
                category: "Fruit",
                vitamins: ["C", "B9", "B6"],
                description:
                    "Le litchi est un fruit tropical juteux, riche " +
                    "en vitamine C et en eau.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine C participe à la formation normale du collagène.",
                    "Les folates contribuent à la formation normale du sang.",
                    "Le litchi participe à l'hydratation."
                ]
            },

            /* ---------- LEGUMES (26 à 50) ---------- */

            {
                id: 26,
                name: "Carotte",
                emoji: "🥕",
                category: "Légume",
                vitamins: ["A", "K", "C", "B6"],
                description:
                    "La carotte est une excellente source de bêta-carotène, " +
                    "que l'organisme peut convertir en vitamine A.",
                benefits: [
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La vitamine A participe au fonctionnement normal du système immunitaire.",
                    "Les fibres contribuent au fonctionnement normal du transit.",
                    "La carotte apporte des caroténoïdes."
                ]
            },

            {
                id: 27,
                name: "Épinards",
                emoji: "🥬",
                category: "Légume",
                vitamins: ["A", "C", "E", "K", "B9"],
                description:
                    "Les épinards sont des légumes à feuilles vertes " +
                    "riches en vitamine K et en folates.",
                benefits: [
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "Les folates contribuent à la formation normale du sang.",
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "Les épinards apportent des fibres et des minéraux."
                ]
            },

            {
                id: 28,
                name: "Brocoli",
                emoji: "🥦",
                category: "Légume",
                vitamins: ["C", "K", "A", "B9"],
                description:
                    "Le brocoli est un légume crucifère riche en vitamine C, " +
                    "en vitamine K et en fibres.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "Les folates contribuent à la formation normale du sang.",
                    "Le brocoli apporte des fibres alimentaires."
                ]
            },

            {
                id: 29,
                name: "Poivron rouge",
                emoji: "🫑",
                category: "Légume",
                vitamins: ["C", "A", "B6", "E"],
                description:
                    "Le poivron rouge est particulièrement riche en vitamine C " +
                    "et en caroténoïdes.",
                benefits: [
                    "La vitamine C contribue à la formation normale du collagène.",
                    "La vitamine C favorise l'absorption du fer.",
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "Le poivron apporte des fibres alimentaires."
                ]
            },

            {
                id: 30,
                name: "Tomate",
                emoji: "🍅",
                category: "Légume",
                vitamins: ["C", "A", "K", "B9"],
                description:
                    "La tomate apporte de la vitamine C, du potassium " +
                    "et du lycopène, un caroténoïde.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La tomate apporte des fibres alimentaires.",
                    "Elle contient du lycopène.",
                    "Elle contribue à l'hydratation grâce à sa forte teneur en eau."
                ]
            },

            {
                id: 31,
                name: "Patate douce",
                emoji: "🍠",
                category: "Légume",
                vitamins: ["A", "C", "B6", "B5"],
                description:
                    "La patate douce est riche en bêta-carotène, " +
                    "en glucides complexes et en fibres.",
                benefits: [
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "Les glucides constituent une source d'énergie.",
                    "La vitamine B6 contribue au métabolisme énergétique normal.",
                    "Les fibres participent au fonctionnement normal du transit."
                ]
            },

            {
                id: 32,
                name: "Chou-fleur",
                emoji: "🥬",
                category: "Légume",
                vitamins: ["C", "K", "B9", "B5"],
                description:
                    "Le chou-fleur est un légume crucifère apprécié pour " +
                    "sa teneur en vitamine C et son faible apport calorique.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "Les folates participent à la formation normale du sang.",
                    "La vitamine B5 participe au métabolisme énergétique normal."
                ]
            },

            {
                id: 33,
                name: "Chou",
                emoji: "🥬",
                category: "Légume",
                vitamins: ["C", "K", "B9", "B6"],
                description:
                    "Le chou est un légume crucifère riche en vitamine C " +
                    "et en composés végétaux soufrés.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "Les folates contribuent à la formation normale du sang.",
                    "Le chou apporte des fibres alimentaires."
                ]
            },

            {
                id: 34,
                name: "Courgette",
                emoji: "🥒",
                category: "Légume",
                vitamins: ["C", "A", "B9"],
                description:
                    "La courgette est un légume doux, très riche en eau " +
                    "et peu énergétique.",
                benefits: [
                    "La vitamine C participe au fonctionnement normal du système immunitaire.",
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La courgette contribue à l'hydratation grâce à sa forte teneur en eau.",
                    "Les folates participent à la formation normale du sang."
                ]
            },

            {
                id: 35,
                name: "Aubergine",
                emoji: "🍆",
                category: "Légume",
                vitamins: ["K", "B1", "B5"],
                description:
                    "L'aubergine est un légume-fruit à la peau violette, " +
                    "riche en fibres et en antioxydants.",
                benefits: [
                    "Les fibres contribuent au fonctionnement normal du transit.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "La vitamine B1 contribue au métabolisme énergétique normal.",
                    "L'aubergine contient des composés antioxydants."
                ]
            },

            {
                id: 36,
                name: "Concombre",
                emoji: "🥒",
                category: "Légume",
                vitamins: ["C", "K", "B5"],
                description:
                    "Le concombre est composé à plus de 95 % d'eau, " +
                    "idéal pour l'hydratation.",
                benefits: [
                    "Le concombre contribue à l'hydratation.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "La vitamine C contribue à la protection des cellules contre le stress oxydatif.",
                    "Il constitue une collation peu calorique."
                ]
            },

            {
                id: 37,
                name: "Oignon",
                emoji: "🧅",
                category: "Légume",
                vitamins: ["C", "B6", "B9"],
                description:
                    "L'oignon est un condiment-légume riche en composés soufrés " +
                    "et en vitamine C.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine B6 contribue au métabolisme énergétique normal.",
                    "Les folates participent à la formation normale du sang.",
                    "L'oignon permet de parfumer sans ajouter de sel."
                ]
            },

            {
                id: 38,
                name: "Ail",
                emoji: "🧄",
                category: "Légume",
                vitamins: ["C", "B6", "B1"],
                description:
                    "L'ail est reconnu pour ses composés soufrés, " +
                    "notamment l'allicine, et son apport en vitamine C.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine B6 participe au fonctionnement normal du système nerveux.",
                    "L'ail contient des composés soufrés.",
                    "Il permet de relever les plats en petite quantité."
                ]
            },

            {
                id: 39,
                name: "Poireau",
                emoji: "🥬",
                category: "Légume",
                vitamins: ["K", "B9", "B6"],
                description:
                    "Le poireau appartient à la famille des alliacées, " +
                    "comme l'oignon et l'ail.",
                benefits: [
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "Les folates participent à la formation normale du sang.",
                    "La vitamine B6 contribue au métabolisme énergétique normal.",
                    "Le poireau apporte des fibres et des prébiotiques."
                ]
            },

            {
                id: 40,
                name: "Champignon",
                emoji: "🍄",
                category: "Légume",
                vitamins: ["B2", "B5", "B3", "D"],
                description:
                    "Le champignon de Paris est l'un des rares végétaux " +
                    "à apporter de la vitamine D, surtout exposé aux UV.",
                benefits: [
                    "La vitamine D contribue au maintien d'une ossature normale.",
                    "La vitamine B5 participe au métabolisme énergétique normal.",
                    "La vitamine B2 contribue à la protection des cellules contre le stress oxydatif.",
                    "Le champignon est peu énergétique et apporte des fibres."
                ]
            },

            {
                id: 41,
                name: "Laitue",
                emoji: "🥬",
                category: "Légume",
                vitamins: ["K", "A", "B9"],
                description:
                    "La laitue est une salade feuillue très riche en eau " +
                    "et pauvre en calories.",
                benefits: [
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "Les folates participent à la formation normale du sang.",
                    "La laitue contribue à l'hydratation."
                ]
            },

            {
                id: 42,
                name: "Céleri",
                emoji: "🌿",
                category: "Légume",
                vitamins: ["K", "C", "B6"],
                description:
                    "Le céleri est très riche en eau et apporte " +
                    "de la vitamine K en quantité notable.",
                benefits: [
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "La vitamine C participe au fonctionnement normal du système immunitaire.",
                    "Le céleri contribue à l'hydratation grâce à sa teneur en eau.",
                    "Il apporte des fibres avec très peu de calories."
                ]
            },

            {
                id: 43,
                name: "Asperge",
                emoji: "🌱",
                category: "Légume",
                vitamins: ["K", "B9", "C", "B1"],
                description:
                    "L'asperge est une excellente source de folates " +
                    "et de vitamine K.",
                benefits: [
                    "Les folates contribuent à la formation normale du sang.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine B1 contribue au métabolisme énergétique normal."
                ]
            },

            {
                id: 44,
                name: "Artichaut",
                emoji: "🌿",
                category: "Légume",
                vitamins: ["B9", "C", "K", "B3"],
                description:
                    "L'artichaut est riche en fibres et reconnu pour " +
                    "sa teneur en inuline, une fibre prébiotique.",
                benefits: [
                    "Les folates contribuent à la formation normale du sang.",
                    "La vitamine C participe au fonctionnement normal du système immunitaire.",
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "L'artichaut apporte des fibres prébiotiques."
                ]
            },

            {
                id: 45,
                name: "Navet",
                emoji: "🥔",
                category: "Légume",
                vitamins: ["C", "B6", "K"],
                description:
                    "Le navet est un légume racine peu calorique, " +
                    "membre de la famille des crucifères.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine B6 participe au métabolisme normal des protéines.",
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "Le navet apporte des fibres alimentaires."
                ]
            },

            {
                id: 46,
                name: "Radis",
                emoji: "🌶️",
                category: "Légume",
                vitamins: ["C", "B6", "B9"],
                description:
                    "Le radis est un légume croquant à la saveur légèrement " +
                    "piquante, riche en eau.",
                benefits: [
                    "La vitamine C contribue à la protection des cellules contre le stress oxydatif.",
                    "Les folates participent à la formation normale du sang.",
                    "La vitamine B6 contribue au métabolisme énergétique normal.",
                    "Le radis est peu énergétique et apporte des fibres."
                ]
            },

            {
                id: 47,
                name: "Betterave",
                emoji: "🍠",
                category: "Légume",
                vitamins: ["B9", "K", "C"],
                description:
                    "La betterave est une racine colorée riche en folates " +
                    "et en pigments antioxydants.",
                benefits: [
                    "Les folates contribuent à la formation normale du sang.",
                    "La vitamine K participe à une coagulation sanguine normale.",
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La betterave contient des bétalaïnes, des pigments antioxydants."
                ]
            },

            {
                id: 48,
                name: "Haricots verts",
                emoji: "🌱",
                category: "Légume",
                vitamins: ["K", "C", "B9", "A"],
                description:
                    "Les haricots verts sont des légumineuses consommées " +
                    "immatures, riches en vitamine K.",
                benefits: [
                    "La vitamine K contribue à une coagulation sanguine normale.",
                    "La vitamine C participe au fonctionnement normal du système immunitaire.",
                    "Les folates contribuent à la formation normale du sang.",
                    "Les haricots verts apportent des fibres."
                ]
            },

            {
                id: 49,
                name: "Petits pois",
                emoji: "🫛",
                category: "Légume",
                vitamins: ["C", "B1", "K", "B9"],
                description:
                    "Les petits pois sont riches en vitamine C, en fibres " +
                    "et en protéines végétales.",
                benefits: [
                    "La vitamine C contribue au fonctionnement normal du système immunitaire.",
                    "La vitamine B1 participe au métabolisme énergétique normal.",
                    "Les fibres contribuent à la satiété et au transit.",
                    "Les folates participent à la formation normale du sang."
                ]
            },

            {
                id: 50,
                name: "Courge",
                emoji: "🎃",
                category: "Légume",
                vitamins: ["A", "C", "E", "B6"],
                description:
                    "La courge, comme le potiron, est riche en bêta-carotène " +
                    "qui donne à sa chair sa couleur orangée.",
                benefits: [
                    "La vitamine A contribue au maintien d'une vision normale.",
                    "La vitamine A participe au fonctionnement normal du système immunitaire.",
                    "La vitamine E contribue à protéger les cellules contre le stress oxydatif.",
                    "La courge apporte des fibres et du potassium."
                ]
            }

        ];


        

