// Create a webpage with a 16x16 grid of square divs.

const newGrid = () => {
  let box = document.createElement('div');
  box.className = "box"
  return box;
};

const gridContainer = document.querySelector('.grid-container');
for (i = 0; i < 1599; i++) {
  const div = newGrid();
  gridContainer.appendChild(div);
};

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    if (box.classList.contains('colored')) {
      box.classList.remove('colored')
    } else {
      box.classList.add('colored')
    }
  });
});