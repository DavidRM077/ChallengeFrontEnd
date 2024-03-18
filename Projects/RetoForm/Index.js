/* function enviarFormulario(event)
{
    event.preventDefault()
    

    const imput1 = document.getElementById("imputOne")
   
 
    console.log("Hola")

   
  
} 
 */

document.addEventListener("DOMContentLoaded", function() {
  var formulario = document.getElementById("FormActive");
  var imput1 = document.getElementById("imputOne");
  var lastname = document.getElementById('lastname');
  var emailInput = document.getElementById('emailimput');
  var passwordd = document.getElementById('passwordi');
  var emaimValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var email = emailInput.value.trim();

  formulario.addEventListener("submit", function(event) {
    // Validar el campo de nombre de usuario
    if (imput1.value.trim() === "") {
      alert("Por favor, ingresa tu nombre de usuario.");
      event.preventDefault();
 
} 
if (lastname.value.trim() === "")
{
  alert("Por favor, ingresa tu Apellido de usuario.");
  event.preventDefault();
}

if (email === "" || !emaimValidation.test(email))
{
  alert("Por favor, ingresa tu correo de usuario.");
  event.preventDefault();
}
  
if (passwordd.value.trim() === "")
{
  alert("Por favor, ingresa tu clave de usuario.");
  event.preventDefault();
}
   else {
      alert("Formulario enviado correctamente."); // Mensaje de éxito
      // Aquí podrías realizar más validaciones si es necesario
    
    }

  });
});




/* const formulario = document.getElementById('FormActive');
const nombreInput = document.getElementById('imputOne');
const lastname = document.getElementById('lastname');
const emailInput = document.getElementById('emailimput');
const passwordd = document.getElementById('passwordi');
const ClainBtn = document.getElementById("ClainBtn") */
/* ClainBtn.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Resetear los mensajes de error
  document.getElementById('error-nombre').textContent = '';
  document.getElementById('error-email').textContent = '';

  // Validar el campo Nombre
  if (nombreInput.value.trim() === '') {
    document.getElementById('error-nombre').textContent = 'Por favor, ingresa tu nombre.';
    return false; // Evita que el formulario se envíe si hay un error
  }

  // Validar el campo Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    document.getElementById('error-email').textContent = 'Por favor, ingresa un email válido.';
    return false; // Evita que el formulario se envíe si hay un error
  }

  // Si llegamos hasta aquí, todos los campos pasaron la validación
  // Puedes enviar el formulario aquí si lo deseas
  alert('El formulario se ha enviado correctamente.');
  // formulario.submit(); // Descomenta esta línea para enviar el formulario automáticamente
}); */