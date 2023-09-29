// Create a webpage with a 16x16 grid of square divs.

const newSketch = () => {
  let box = document.createElement('div');
  box.className = "box"
  return box;
};

const container = document.querySelector('.container');
for (i = 0; i < 1599; i++) {
  const div = newSketch();
  container.appendChild(div);
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