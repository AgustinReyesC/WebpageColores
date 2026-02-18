const colors = [
  "#ff6b6b",
  "#ffb703",
  "#8ecae6",
  "#06d6a0",
  "#c77dff",
  "#ff70a6",
  "#00b4d8",
  "#90be6d",
  "#f9844a"
];

const title = document.querySelector(".rainbow");
const portada_resp = document.querySelectorAll(".info-response");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorLetters(text) {
    let colorIndex = randomInt(0, 8);

    if(!text.classList.contains('rainbow')) {
        text.classList.add('rainbow');
    }

    text.innerHTML = text.textContent
    .split(" ")
    .map(word => {
        const letters = word
        .split("")
        .map(letter => {
            const color = colors[colorIndex % colors.length];
            colorIndex++;
            return `<span style="color:${color}">${letter}</span>`;
        })
        .join("");

        return `<span class="word">${letters}</span>`;
    })
    .join(" ");
}

colorLetters(title);
portada_resp.forEach((pr) => colorLetters(pr));




const cards = document.querySelectorAll(".card");

let activeCard = null;

function openCard(card) {
  if (activeCard) return;

  card.dataset.originalHtml = card.innerHTML;

  const titleText =
    card.querySelector(".inline-block")?.textContent.trim() || "Seccion";
  const pagePath = card.dataset.page;

  card.classList.add("card-modal-open");
  document.body.classList.add("modal-active");
  activeCard = card;

  if (pagePath) {
    card.innerHTML = `
      <div class="card-modal-content">
        <button class="card-close-btn" type="button" aria-label="Cerrar ventana">Cerrar</button>
        <h2 class="card-modal-title">${titleText}</h2>
        <iframe class="card-frame" src="${pagePath}" title="${titleText}"></iframe>
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="card-modal-content">
        <button class="card-close-btn" type="button" aria-label="Cerrar ventana">Cerrar</button>
        <h2 class="card-modal-title">${titleText}</h2>
        <div class="card-modal-body">
          <p>Aqui puedes poner la informacion de esta seccion.</p>
        </div>
      </div>
    `;
  }

  card.querySelector(".card-close-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    closeCard();
  });
}

function closeCard() {
  if (!activeCard) return;

  activeCard.innerHTML = activeCard.dataset.originalHtml || "";
  activeCard.classList.remove("card-modal-open");
  document.body.classList.remove("modal-active");
  activeCard = null;
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("card-modal-open")) return;
    openCard(card);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCard();
  }
});
