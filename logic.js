const gridContainer = document.querySelector(".container");

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
  const eraseButton = document.querySelector(".erase-button");
  eraseButton.addEventListener("click", () => {
    eraseColor();
  });
};

let eraseColor = () => {
  gridContainer.addEventListener("mouseover", (e) => {
    if (e.target !== e.currentTarget) {
      e.target.style.backgroundColor = "hsl(0, 0%, 85%)";
    }
    e.stopPropagation();
  });
};

let rainbowFunc = () => {
  const rainbowButton = document.querySelector(".rainbow-mode-button");
  rainbowButton.addEventListener("click", () => {
    gridContainer.addEventListener("mouseover", (e) => {
      if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = RGBGenerator();
      }
      e.stopPropagation();
    });
  });
};

let RGBGenerator = () => {
  let makeColorCode = "0123456789ABCDEF";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)];
  }
  return code;
};

let colorPicker = () => {
  const colorPickButton = document.querySelector("#colorpicker");
  colorPickButton.addEventListener("click", () => {
    alert("hello");
  });
};

makeRows(16, 16);
mouseOverEvent();
eraseFunc();
rainbowFunc();

