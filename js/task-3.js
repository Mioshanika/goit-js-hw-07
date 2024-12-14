const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const nameInputHandler = event => {
  const enteredName = event.currentTarget.value.trim();
  enteredName === ''
    ? (nameOutput.textContent = 'Anonymous')
    : (nameOutput.textContent = enteredName);
};
nameInput.addEventListener('input', nameInputHandler);
