

document.addEventListener("DOMContentLoaded", function() {
  var formulario = document.getElementById("FormActive");
  var imput1 = document.getElementById("imputOne");
  var lastname = document.getElementById('lastname');
  var emailInput = document.getElementById('emailimput');
  var passwordd = document.getElementById('passwordi');
  var emaimValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var email = emailInput.value.trim();
  var errorsito = document.getElementsByClassName("error-icons")
  formulario.addEventListener("submit", function(event) {
    // Validar el campo de nombre de usuario
    if (imput1.value.trim() === "") {
      errorsito.classList.add("error-active")
      alert("test")
      event.preventDefault();
 
} 
if (lastname.value.trim() === "")
{
  
  lastname.classList.add("error-active");
  event.preventDefault();
}

if (email === "" || !emaimValidation.test(email))
{
  
  event.preventDefault();
}
  
if (passwordd.value.trim() === "")
{
  
  event.preventDefault();
}
   else {
      alert("Formulario enviado correctamente."); // Mensaje de éxito
      // Aquí podrías realizar más validaciones si es necesario
    
    }

  });
});

