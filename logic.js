let amountOfGrids = 16;
const gridContainer = document.querySelector(".container");

const mouseOverColor = () => {
  gridContainer.addEventListener("mouseover", () => {
    console.log("Mouse in");
  });
  gridContainer.addEventListener("mouseout", () => {
    console.log("Mouse out");
  });
};
const generateGrids = () => {
  for (let i = 0; i < amountOfGrids; i++) {
    createGrids();
  }
};

const createGrids = () => {
  const createGrids = document.createElement("div");
  createGrids.style.backgroundColor = "black";
  createGrids.style.paddingTop = "100%";
  createGrids.style.content = "Hello";
  gridContainer.appendChild(createGrids);
};

generateGrids();
mouseOverColor();
