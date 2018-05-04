
let dodger = document.getElementById(`dodger`);

function moveLeft() {
  let left = parseInt(dodger.style.left.replace(`px`, ``));

  if (left > 0) {
    dodger.style.left = `${left - 4}px`;
  }
};

function moveRight() {
  let left = parseInt(dodger.style.left.replace(`px`, ``));

  if (left < 360) {
    dodger.style.left = `${left + 4}px`;
  }
}


dodger.style.backgroundColor = `#FF69B4`;

document.addEventListener(`keydown`, function(pressed) {
  if (pressed.key === `ArrowLeft`) {
    moveLeft();
  } else if (pressed.key === `ArrowRight`) {
    moveRight();
  }
});
