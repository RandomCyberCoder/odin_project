const gridContainer = document.querySelector("#grid");
const sizeButton = document.querySelector("#size");
const colorsButton = document.querySelector("#colors");
const opacityButton = document.querySelector("#opacity");
const gridSize = 900;

let randomColor = false;
let useOpacity = false;
let gridDimensions = 16;
let boxID = 1;
// let border = "border-style: 2px solid black;"

colorsButton.addEventListener("click", () => (randomColor = !randomColor));

opacityButton.addEventListener("click", () => (useOpacity = !useOpacity));

sizeButton.addEventListener("click", () => {
    let size = prompt("Enter a size 1 - 100");
    if(size >= 1 && size <= 100){
        gridDimensions = parseInt(size);
    }
});

const createRGBVal = () => (randomColor ? Math.floor(Math.random() * 255) : 0);

const createColor = () => {
  const opacity = useOpacity ? Math.random() : 1;
  return `rgb(${createRGBVal()}, ${createRGBVal()}, ${createRGBVal()}, ${opacity})`;
};

const changeColor = (e) => {
  e.target.style.backgroundColor = createColor();
};

const createGrid = () => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  let boxSize = gridSize / gridDimensions;

  for (let row = 0; row < gridDimensions; row++) {
    //make a div for the row
    const rowDiv = document.createElement("div");
    rowDiv.style.display = "flex";

    for (let col = 0; col < gridDimensions; col++) {
      //make a box
      const box = document.createElement("div");
      box.addEventListener("mouseenter", changeColor);
      box.setAttribute("class", "box");
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.border = "2px solid black";
      rowDiv.appendChild(box);
    }
    gridContainer.appendChild(rowDiv);
  }
};

createGrid();

sizeButton.addEventListener("click", createGrid);
