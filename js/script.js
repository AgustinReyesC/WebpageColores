const colorPreview = document.getElementById("colorPreview");
const colorName = document.getElementById("colorName");
const targetColor = document.getElementById("targetColor");
const feedback = document.getElementById("feedback");
const newChallenge = document.getElementById("newChallenge");
const swatches = document.querySelectorAll(".swatch");

const colors = [];

swatches.forEach((button) => {
  const name = button.dataset.name;
  const hex = button.dataset.hex;

  button.style.background = hex;
  colors.push({ name, hex });

  button.addEventListener("click", () => {
    setColor(name, hex);
    checkAnswer(name);
  });
});

function setColor(name, hex) {
  colorName.textContent = name;
  colorPreview.style.background = hex;
  document.documentElement.style.setProperty("--accent", hex);
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function createChallenge() {
  const selected = randomColor();
  targetColor.textContent = selected.name;
  feedback.textContent = "¡Toca una bolita de color!";
}

function checkAnswer(chosenName) {
  if (chosenName === targetColor.textContent) {
    feedback.textContent = "¡Muy bien!";
    feedback.style.color = "#1f9d55";
  } else {
    feedback.textContent = "Intenta otra vez";
    feedback.style.color = "#c0392b";
  }
}

newChallenge.addEventListener("click", createChallenge);

setColor("Rojo", "#FF4D4D");
createChallenge();
