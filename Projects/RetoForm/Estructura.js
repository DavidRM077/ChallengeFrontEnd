
  const form = document.getElementById("FormActive");
  const firstName = document.getElementById('imputOne')
  
form.addEventListener("submit", (e) => {
 
  e.preventDefault();
  
   firstName = form["imputOne"].value;
  const secondName = form["lastname"].value;
  const email = form["emailimput"].value;
  const password = form["passwordi"].value;

  if (firstName === "") {
     
    addError("imputOne", "first Name cannot be empty");
  } else {
    removeError("imputOne");
  }

  if (secondName === "") {
    addError("lastname", "Last Name cannot be empty");
  } else {
    removeError("lastname");
  }

  if (email === "") {
    addError("emailimput", "Looks like this is not an email");
  } else {
    removeError("emailimput");
  }

  if (password === "") {
    addError("passwordi", "Password cannot be empty");
  } else {
    removeError("passwordi");
  }
   
  });
  
  function addError(field, message) {
   
    const FormControl = form[field].parentNode;
    FormControl.classList.add("errorMsg");
    const small = form[field].parentNode.querySelector("small");
    small.innerText = message;
  }

  
  
  function removeError(field) {
    const FormControl = form[field].parentNode;
    FormControl.classList.remove("errorMsg");
   
  }
  
  