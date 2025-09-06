// script.js
const grid = document.getElementById("grid");

let activeCell = null;

for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.className = "grid-cell";

  // 🔥 Make the cell clickable
  cell.addEventListener("click", () => {
    activeCell = cell;
  });

  grid.appendChild(cell);
}
