const gridContainer = document.getElementById('gridContainer');
const gridItem = document.createElement('div');
const gridItems = document.querySelectorAll('.gridItem');
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
};

const createGridCells = () => {
  let cell = document.createElement('div');
  cell.className = "cell"
  return cell;
};

const clearGrid = () => {
  gridContainer.innerHTML = '';
}

gridItems.forEach((gridItem) => {
  gridItem.addEventListener('mouseover', () => {
    if (gridItem.classList.contains('colored')) {
      gridItem.classList.remove('colored')
    } else {
      gridItem.classList.add('colored')
    }
  });
});

setGrid(columns, rows);