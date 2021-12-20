const gridContainer = document.querySelector(".container");
const eraseButton = document.querySelector(".erase-button");
const rainbowButton = document.querySelector(".rainbow-mode-button");

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
    e.stopPropagation();
  });
};

let eraseFunc = () => {
  eraseButton.addEventListener("click", () => {
    eraseColor();
  });
};

let eraseColor = () => {
  gridContainer.addEventListener("mouseover", (e) => {
    if (e.target !== e.currentTarget) {
      e.target.style.backgroundColor = "#dbdbdba9";
    }
    e.stopPropagation();
  });
};

let rainbowFunc = () => {
  rainbowButton.addEventListener("click", () => {
    gridContainer.addEventListener("mouseover", (e) => {
      if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = colorGenerator();
      }
      e.stopPropagation();
    });
  });
};

let colorGenerator = () => {
  let makeColorCode = "0123456789ABCDEF";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)];
  }
  return code;
};

makeRows(16, 16);
mouseOverEvent();
eraseFunc();
rainbowFunc();
