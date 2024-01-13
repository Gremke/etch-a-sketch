const gridContainer = document.getElementById('gridContainer');
const columns = 30;
const rows = 30;
const gridItem = document.createElement('div');
const gridItems = document.querySelectorAll('.gridItem');


const setGrid = (columns, rows) => {
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`; // Adjust height as needed
};

const newGrid = () => {
  let cell = document.createElement('div');
  cell.className = "cell"
  return cell;
};

for (i = 0; i < columns * rows; i++) {
  gridItem.classList.add('gridItem');
  const gridCell = newGrid();
  gridContainer.appendChild(gridCell);
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