// script.js
const grid = document.getElementById("grid");

let activeCell = null;

for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.className = "grid-cell";

  //Makes the cell clickable
  cell.addEventListener("click", () => {
    setActiveCell(cell);
    console.log("Cell clicked:", cell);
  });

  grid.appendChild(cell);
}

document.addEventListener("keydown", (event) => {
  // Only continue if a cell is selected
  console.log("Key pressed:", event.key);
  if (!activeCell) return;

  const key = event.key;

  // Only allow A–Z letters
  if (key.length === 1 && key.match(/[a-z]/i)) {
    activeCell.textContent = key.toUpperCase();
  }
});

function setActiveCell(cell) {
  if (activeCell) {
    activeCell.classList.remove("active");
  }
  activeCell = cell;
  activeCell.classList.add("active");
}

