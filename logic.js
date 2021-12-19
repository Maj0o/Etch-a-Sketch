const gridContainer = document.querySelector(".container");
const eraseButton = document.querySelector(".button");

let makeRows = (rows, cols) => {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
};

let mouseOverEvent = (e) => {
  gridContainer.addEventListener("mouseover", (e) => {
    if (e.target !== e.currentTarget) {
      e.target.style.backgroundColor = "red";
    }
    e.stopPropagation;
  });
};

makeRows(16, 16);
mouseOverEvent();
