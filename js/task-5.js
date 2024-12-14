function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyElement = document.querySelector('body');
const spanElement = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const changeColorBtnHandler = event => {
  const randomColor = getRandomHexColor();
  spanElement.textContent = randomColor;
  bodyElement.style = `background-color: ${randomColor}`;
};
changeColorBtn.addEventListener('click', changeColorBtnHandler);
