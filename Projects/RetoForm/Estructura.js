
const form = document.getElementById("FormActive");
const firstName = document.getElementById('imputOne');
const lastName = document.getElementById('lastname');
const email = document.getElementById('emailimput');
const password = document.getElementById('passwordi');
form.addEventListener("submit", (e) => {
 
  e.preventDefault();
  if (firstName.value === "") {
    addError(firstName, "first Name cannot be empty");
    firstName.classList.add('errorIcon')
  } else {
    removeError(firstName);
  }

  if (lastName.value === "") {
    addError(lastName, "Last Name cannot be empty");
    lastName.classList.add('errorIcon')
  } else {
    removeError(lastName);
  }

  if (email.value === "") {
    addError(email, "Looks like this is not an email");
    email.classList.add('errorIcon')
  } else {
    removeError(email);
  }

  if (password.value === "") {
    addError(password, "Password cannot be empty");
    password.classList.add('errorIcon')
  } else {
    removeError(password);
  }
});

function addError(input, message) {
  const FormControl = input.parentNode;
  FormControl.classList.add("errorMsg");
  const small = input.parentNode.querySelector("small");
  small.innerText = message;
}


function removeError(input) {
  const FormControl = input.parentNode;
  FormControl.classList.remove("errorMsg");
}
