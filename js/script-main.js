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



var intro_card = document.querySelectorAll('.card');

//   SECCIONES DE CARTAS
function createCard(ic, inside, outside) {
    ic.addEventListener("click", function () {
        if (this.classList.contains("expanded")) return;

        intro_card.forEach((icc) => {
            icc.classList.remove("expanded");
        });

        this.classList.add("expanded");

        // para que scrollee hacia arriba
        this.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        this.innerHTML = inside;

        const closeBtn = this.querySelector(".close-btn");

        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.classList.remove("expanded");

            this.innerHTML = outside;
        });
    });
}


//INTRO

intro_card.forEach((ic) => {
    createCard(
        ic,
        `
        <p> funciona </p>`,
        `
        <p> outside </p>
        `
    )
})














//QUÉ SON LOS COLORES


//COLORES BÁSICOS


//ACRTIVIDADES DIVERTIDAS


//JUEGOS INTERACTIVOS