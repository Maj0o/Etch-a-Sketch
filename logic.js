amountOfGrids = 16;

const generateGrids = () => {
  const gridContainer = document.querySelector(".container");

  for (let i = 0; i < amountOfGrids; i++) {
    const createGrids = document.createElement("div");

    createGrids.style.backgroundColor = "red";
    createGrids.style.textAlign = "center";
    createGrids.textContent = "Hello I'm a test";
    gridContainer.appendChild(createGrids);
  }
};

generateGrids();
