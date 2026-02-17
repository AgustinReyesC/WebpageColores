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

let colorIndex = 0;

title.innerHTML = title.textContent
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
