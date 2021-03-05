const gridTemplate = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset-button');

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size) {
  gridTemplate.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList = 'gridSquare';
    gridSquare.addEventListener('mouseover', changeColor);
    gridTemplate.appendChild(gridSquare);
  }
}

function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function changeSize() {
  let newSize = prompt("Pick a number between 1 and 64: ");

    if (newSize !== null) {
      newSize = parseInt(newSize);
      if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
        alert("Pick a number between 1 and 64: ");
        changeSize();
      } else {
      clearGrid();
      setGridSize(newSize);
      fillGrid(newSize);
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(gridTemplate.childNodes);
  gridArray.forEach((element) => {
    gridTemplate.removeChild(element);
  });
}
