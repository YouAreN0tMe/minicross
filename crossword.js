// script.js
const grid = document.getElementById("grid");

for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.className = "grid-cell";
  grid.appendChild(cell);
}
