const gridContainer = document.querySelector(".container");
const eraseButton = document.querySelector(".erase-button");
const rainbowButton = document.querySelector(".rainbow-mode-button");
const resetButton = document.querySelector(".resetgrid");

let makeRows = (rows, cols) => {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
};

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target !== e.currentTarget) {
    e.target.style.backgroundColor = "red";
  }
  e.stopPropagation();
});

eraseButton.addEventListener("click", () => {
  gridContainer.addEventListener("mouseover", (e) => {
    if (e.target !== e.currentTarget) {
      e.target.style.backgroundColor = "white";
    }
    e.stopPropagation();
  });
});

rainbowButton.addEventListener("click", () => {
  gridContainer.addEventListener("mouseover", (e) => {
    if (e.target !== e.currentTarget) {
      e.target.style.backgroundColor = RGBGenerator();
    }
    e.stopPropagation();
  });
});

let RGBGenerator = () => {
  let makeColorCode = "0123456789ABCDEF";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)];
  }
  return code;
};

let gridSize = (rows, cols) => {
  const changeGridButton = document.querySelector(".gridsize");
  changeGridButton.addEventListener("click", () => {
    rows = prompt("Amount of rows:");
    cols = prompt("Amount of columns:");
    if (rows > 100 || cols > 100) {
      alert("Pick a lower number, due to performence the maximum is 20");
      window.location.reload();
      rows = prompt("Amount of rows:");
      cols = prompt("Amount of columns:");
    } else makeRows(rows, cols);
    for (c = 0; c < rows * cols; c++) {
      let cell = document.createElement("div");
      gridContainer.appendChild(cell).className = "grid-item";
    }
  });
};

resetButton.addEventListener("click", () => {
  location.reload();
});

makeRows(16, 16);
gridSize();
reloadGrid();
