/* =========================================================
   NutriVita — Logique partagée
   Rendu des aliments, filtres, recherche, modale, guide
========================================================= */

/* ---------- ETAT ---------- */

let currentCategory = "Tous";
let currentVitamin = "Toutes";
let currentSearch = "";

/* ---------- UTILITAIRES ---------- */

function $$(id) {
    return document.getElementById(id);
}

function normalizeText(value) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function foodTextOf(food) {
    return food.name + " " + food.description + " " + food.category;
}

/* ---------- RENDU DE LA GRILLE D'ALIMENTS ---------- */

function getFilteredFoods() {
    const search = normalizeText(currentSearch.trim());

    return foods.filter(food => {
        if (currentCategory !== "Tous" && food.category !== currentCategory) {
            return false;
        }

        if (currentVitamin !== "Toutes" &&
            !food.vitamins.includes(currentVitamin)) {
            return false;
        }

        if (search) {
            const foodText = normalizeText(foodTextOf(food));
            const vitaminText = food.vitamins
                .map(v => normalizeText(vitamins[v].name))
                .join(" ");

            if (!foodText.includes(search) && !vitaminText.includes(search)) {
                return false;
            }
        }

        return true;
    });
}

function foodCardHTML(food) {
    return `
        <div class="food-visual">
            <span class="food-category">${food.category}</span>
            <span class="food-emoji">${food.emoji}</span>
        </div>

        <div class="food-content">
            <h3>${food.name}</h3>

            <p class="food-description">${food.description}</p>

            <div class="vitamin-tags">
                ${food.vitamins.map(v => `
                    <button class="vitamin-tag" data-vitamin="${v}">${v}</button>
                `).join("")}
            </div>

            <button class="food-details-btn" data-id="${food.id}">
                Voir les détails
            </button>
        </div>
    `;
}

function renderFoods() {
    const grid = $$("foodGrid");
    if (!grid) {
        return;
    }

    const filtered = getFilteredFoods();
    grid.innerHTML = "";

    filtered.forEach((food, index) => {
        const card = document.createElement("article");
        card.className = "food-card";
        card.style.animationDelay = (Math.min(index, 12) * 30) + "ms";
        card.innerHTML = foodCardHTML(food);

        card.addEventListener("click", event => {
            if (event.target.classList.contains("vitamin-tag")) {
                return;
            }
            openModal(food.id);
        });

        grid.appendChild(card);
    });

    const emptyState = $$("emptyState");
    if (filtered.length === 0 && emptyState) {
        emptyState.style.display = "block";
        grid.style.display = "none";
    } else {
        if (emptyState) {
            emptyState.style.display = "none";
        }
        grid.style.display = "grid";
    }

    // Compteur
    const count = $$("resultCount");
    if (count) {
        count.textContent = filtered.length + (filtered.length > 1 ? " aliments" : " aliment");
    }
    const totalResults = $$("totalResults");
    if (totalResults) {
        totalResults.textContent = filtered.length;
    }

    // Surligner la vitamine active
    if (currentVitamin !== "Toutes") {
        grid.querySelectorAll(".vitamin-tag").forEach(tag => {
            if (tag.dataset.vitamin === currentVitamin) {
                tag.style.background = "var(--green)";
                tag.style.color = "white";
            }
        });
    }
}

/* ---------- MODALE ---------- */

function openModal(foodId) {
    const food = foods.find(f => f.id === Number(foodId));
    if (!food) {
        return;
    }

    const modal = $$("foodModal");
    if (!modal) {
        return;
    }

    $$("modalEmoji").textContent = food.emoji;
    $$("modalTitle").textContent = food.name;
    $$("modalDescription").textContent = food.description;
    $$("modalBenefits").innerHTML = food.benefits
        .map(b => `<li>${b}</li>`).join("");
    $$("modalVitamins").innerHTML = food.vitamins
        .map(v => `<span class="vitamin-tag">${v}</span>`).join("");

    renderFoodAssociations(food);

    modal.classList.add("open");
}

function closeModal() {
    const modal = $$("foodModal");
    if (modal) {
        modal.classList.remove("open");
    }
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeModal();
    }
});

/* ---------- GUIDE DES VITAMINES ---------- */

function renderVitaminGuide() {
    const grid = $$("vitaminGrid");
    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    Object.keys(vitamins).forEach(key => {
        const v = vitamins[key];
        const list = foods
            .filter(f => f.vitamins.includes(key))
            .map(f => f.name);

        const card = document.createElement("article");
        card.className = "vitamin-card";
        card.dataset.vitamin = key;

        card.innerHTML = `
            <div class="vitamin-card-header">
                <div class="vitamin-icon">${v.icon}</div>
                <h3>${v.name}</h3>
            </div>

            <p>${v.description}</p>

            <p class="vitamin-foods">
                ${list.length > 0
                    ? list.slice(0, 6).join(", ") + (list.length > 6 ? "…" : "")
                    : "Aucun aliment référencé"}
            </p>

            <button class="vitamin-select-btn" data-vitamin="${key}">
                Voir les aliments
            </button>
        `;

        card.addEventListener("click", event => {
            if (event.target.classList.contains("vitamin-select-btn")) {
                return;
            }
            card.classList.toggle("active");
        });

        grid.appendChild(card);
    });
}

/* ---------- GUIDE DES ASSOCIATIONS ---------- */

function getFoodAssociations(foodName) {

    const good = (typeof synergies !== "undefined")
        ? synergies.filter(s => s.matches.includes(foodName))
        : [];

    const warn = (typeof warnings !== "undefined")
        ? warnings.filter(w => w.matches.includes(foodName))
        : [];

    return { good, warn };
}

function assocCardHTML(item, type) {

    const badge = type === "good" ? "✓" : "!";
    const cls = type === "good" ? "good" : "warn";

    return `
        <div class="assoc-badge">${badge}</div>

        <div class="assoc-content">
            <div class="assoc-pair">
                ${item.a} + ${item.b}
            </div>

            <p class="assoc-why">${item.why}</p>

            <span class="assoc-chip">
                ${type === "good" ? "✅" : "⚠️"} ${item.tag}
            </span>
        </div>
    `;
}

function renderAssociations() {

    const goodGrid = $$("assocGoodGrid");
    const warnGrid = $$("assocWarnGrid");

    if (!goodGrid && !warnGrid) {
        return;
    }

    if (goodGrid && typeof synergies !== "undefined") {
        goodGrid.innerHTML = "";
        synergies.forEach(item => {
            const card = document.createElement("article");
            card.className = "assoc-card good";
            card.innerHTML = assocCardHTML(item, "good");
            goodGrid.appendChild(card);
        });
    }

    if (warnGrid && typeof warnings !== "undefined") {
        warnGrid.innerHTML = "";
        warnings.forEach(item => {
            const card = document.createElement("article");
            card.className = "assoc-card warn";
            card.innerHTML = assocCardHTML(item, "warn");
            warnGrid.appendChild(card);
        });
    }
}

function renderFoodAssociations(food) {

    const box = $$("modalAssociations");
    if (!box) {
        return;
    }

    const { good, warn } = getFoodAssociations(food.name);

    let html = "";

    if (good.length > 0) {
        html += `<h4>✅ Associations qui améliorent l'absorption</h4>`;
        html += good.map(a => `
            <div class="modal-association-item good">
                <span class="icon">✓</span>
                <div>
                    <strong>${a.a} + ${a.b}</strong><br>
                    ${a.why}
                </div>
            </div>
        `).join("");
    }

    if (warn.length > 0) {
        html += `<h4>⚠️ Gênes d'absorption à surveiller</h4>`;
        html += warn.map(a => `
            <div class="modal-association-item warn">
                <span class="icon">!</span>
                <div>
                    <strong>${a.a} + ${a.b}</strong><br>
                    ${a.why}
                </div>
            </div>
        `).join("");
    }

    box.innerHTML = html;
    box.style.display = html ? "block" : "none";
}

/* ---------- FILTRES VITAMINES ---------- */

function syncVitaminFilterButtons() {
    document.querySelectorAll("[data-vitamin]").forEach(b => {
        b.classList.toggle("active", b.dataset.vitamin === currentVitamin);
    });
}

function selectVitamin(vitamin) {
    currentVitamin = vitamin;
    syncVitaminFilterButtons();
    renderFoods();

    const grid = $$("foodGrid");
    if (grid && grid.scrollIntoView) {
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

/* ---------- INITIALISATION ---------- */

function initPage() {
    const hasGrid = !!$$("foodGrid");
    const hasGuide = !!$$("vitaminGrid");

    // Filtres vitamines (boutons générés)
    const vfb = $$("vitaminFilterButtons");
    if (vfb) {
        Object.keys(vitamins).forEach(key => {
            const btn = document.createElement("button");
            btn.className = "filter-btn";
            btn.dataset.vitamin = key;
            btn.textContent = vitamins[key].name;
            if (key === currentVitamin) {
                btn.classList.add("active");
            }
            vfb.appendChild(btn);
        });
    }

    // Rendus
    if (hasGrid) {
        renderFoods();
    }
    if (hasGuide) {
        renderVitaminGuide();
    }
    if ($$("assocGoodGrid") || $$("assocWarnGrid")) {
        renderAssociations();
    }

    // Statistiques globales
    const totalFoods = $$("totalFoods");
    if (totalFoods) {
        totalFoods.textContent = foods.length;
    }
    const totalVitamins = $$("totalVitamins");
    if (totalVitamins) {
        totalVitamins.textContent = Object.keys(vitamins).length;
    }

    // Recherche
    const searchInput = $$("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", event => {
            currentSearch = event.target.value;
            renderFoods();
        });
    }

    // Catégories
    document.querySelectorAll("[data-category]").forEach(btn => {
        if (!btn.closest(".filters")) {
            return;
        }
        btn.addEventListener("click", () => {
            currentCategory = btn.dataset.category;
            document.querySelectorAll("[data-category]").forEach(b => {
                b.classList.toggle("active", b === btn);
            });
            renderFoods();
        });
    });

    // Vitamines (filtres + boutons des cartes)
    document.addEventListener("click", event => {
        const tag = event.target.closest(".vitamin-select-btn");
        if (tag && tag.dataset.vitamin) {
            if ($$("vitaminGuideSection")) {
                selectVitamin(tag.dataset.vitamin);
                document.documentElement.scrollTop = 0;
                // Sur la page vitamines : filtrer la liste
                if ($$("foodGrid")) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            }
            return;
        }

        const vbtn = event.target.closest("[data-vitamin]");
        if (vbtn && vbtn.dataset.vitamin) {
            selectVitamin(vbtn.dataset.vitamin);
            return;
        }

        const card = event.target.closest(".food-card");
        if (card && !event.target.closest(".vitamin-tag")) {
            const detailsBtn = card.querySelector(".food-details-btn");
            if (detailsBtn) {
                openModal(detailsBtn.dataset.id);
            }
        }
    });

    // Modale
    const modal = $$("foodModal");
    if (modal) {
        const close = $$("modalClose");
        if (close) {
            close.addEventListener("click", closeModal);
        }
        modal.addEventListener("click", event => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
} else {
    initPage();
}
