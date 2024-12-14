function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  if (amount < 1 || amount > 100) return;
  const arrayOfBoxes = [];
  for (let i = 0; i < amount; i++) {
    arrayOfBoxes.push(
      `<div id="box" style="width: ${30 + i * 10}px; ` +
        `height: ${30 + i * 10}px; ` +
        `background-color: ${getRandomHexColor()};"></div>`
    );
  }
  const boxesDiv = document.querySelector('#boxes');
  boxesDiv.innerHTML = arrayOfBoxes.join('');
}
function destroyBoxes() {
  const boxesDiv = document.querySelector('#boxes');
  boxesDiv.innerHTML = '';
}
// ----------------------------------------------------
const createBtnHandler = event => {
  const controlDiv = document.querySelector('#controls');
  createBoxes(Number(controlDiv.children[0].value));
  controlDiv.children[0].value = '';
};
const destroyBtnHandler = event => {
  destroyBoxes();
};
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
createBtn.addEventListener('click', createBtnHandler);
destroyBtn.addEventListener('click', destroyBtnHandler);
