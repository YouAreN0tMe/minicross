// script.js
const grid = document.getElementById("grid");

let activeCell = null;

for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.className = "grid-cell";

  cell.dataset.index = i;  // store index in a data attribute

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

  const index = parseInt(activeCell.dataset.index);
  const cols = 5; // grid width

  switch (event.key) {
    case "ArrowLeft":
      if (index % cols !== 0) setActiveCell(grid.children[index - 1]);
      break;
    case "ArrowRight":
      if (index % cols !== cols - 1) setActiveCell(grid.children[index + 1]);
      break;
    case "ArrowUp":
      if (index - cols >= 0) setActiveCell(grid.children[index - cols]);
      break;
    case "ArrowDown":
      if (index + cols < grid.children.length) setActiveCell(grid.children[index + cols]);
      break;
    default:
      // Only allow A–Z letters
      if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        activeCell.textContent = event.key.toUpperCase();
      }
      break;
  }
});

function setActiveCell(cell) {
  if (activeCell) {
    activeCell.classList.remove("active");
  }
  activeCell = cell;
  activeCell.classList.add("active");
}

