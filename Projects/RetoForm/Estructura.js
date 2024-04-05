
const form = document.getElementById("FormActive");
const firstName = document.getElementById('imputOne');
const lastName = document.getElementById('lastname');
const email = document.getElementById('emailimput');
const password = document.getElementById('passwordi');
form.addEventListener("submit", (e) => {
 
  e.preventDefault();
  if (firstName.value === "") {
    addError(firstName, "first Name cannot be empty");
    // Quité apropósito los `required` de los inputs para lograr esta funcionalidad que tenes acá,
    // ya que si se tiene ese atributo entonces nunca te permitiría "CLAIM YOUR FREE TRIAL" con algún campos vacío

    // Con estos mensajes que estás agregando (.innerText), te produce un bug,
    // que cuando se envía con campos vacíos y el error aparece debajo de los inputs,
    // al corregir los campos poniendo valores y volviendo a apretar el boton, el texto queda,
    // Probalo vos mismos, te dejo una solución acá abajo:

    // Estos mensajes los metas dentro del mismo small
    // y que el addError y remove se conviertan en funciones para agregar o quitar una clase,
    // por ejemplo 'show-error' o como te guste llamarla

    // Al <small> dentro del cada le das un .Field: `display: none;` ó `visibility: hidden;`
    // y a la clase podes darle un `display: block;` ó `visibility: visible;`

    // y por ende, el comportamiento sería:
    // -- si tiene la clase = entonces se vería darle el small por el estilo que la clase lleva
    // -- si NO la tiene = entonces darle su `display: block;` proveniente de la clase, desaparece,
    // lo que quita de la vista el mensaje de error
  } else {
    removeError(firstName);
  }

  if (lastName.value === "") {
    addError(lastName, "Last Name cannot be empty");
  } else {
    removeError(lastName);
  }

  if (email.value === "") {
    addError(email, "Looks like this is not an email");
  } else {
    removeError(email);
  }

  if (password.value === "") {
    addError(password, "Password cannot be empty");
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
