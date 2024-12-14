const loginForm = document.querySelector('.login-form');
const loginFormHandler = event => {
  event.preventDefault();
  const loginDetails = {};
  const loginFormEmail = loginForm.elements.email.value.trim();
  const loginFormPassword = loginForm.elements.password.value.trim();
  if (loginFormEmail === '' || loginFormPassword === '')
    alert('All form fields must be filled in');
  else {
    loginDetails.email = loginFormEmail;
    loginDetails.password = loginFormPassword;
    console.log('=========================');
    console.log('Login Information:');
    console.table(loginDetails);
    console.log('=========================');
    loginForm.reset();
  }
};
loginForm.addEventListener('submit', loginFormHandler);
