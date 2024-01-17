const gridContainer = document.getElementById('gridContainer');
const slider = document.getElementById('slider');
let sliderValue = document.getElementById('value');
let columns = 16;
let rows = 16;

slider.addEventListener('change', () => {
  columns = Number(slider.value);
  rows = Number(slider.value);
  sliderValue.textContent = slider.value;
  clearGrid();
  setGrid(columns, rows)
})

const setGrid = (columns, rows) => {
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`; // Adjust height as needed

  for (i = 0; i < columns * rows; i++) {
    const gridCell = createGridCells();
    gridContainer.appendChild(gridCell);
  }

  const gridItems = document.querySelectorAll('.gridItem');
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener('mouseover', () => {
      if (gridItem.classList.contains('color')) {
        gridItem.classList.remove('color')
      } else {
        gridItem.classList.add('color')
      }
    });
  });
};

const createGridCells = () => {
  let cell = document.createElement('div');
  cell.className = "gridItem"
  return cell;
};

const clearGrid = () => {
  gridContainer.innerHTML = '';
}

setGrid(columns, rows);