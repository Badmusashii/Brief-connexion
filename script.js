let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let button = document.getElementById("button");
let alertClass = document.getElementById("alert");

var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

button.addEventListener("click", (e) => {
  if (!emailRegex.test(inputEmail.value)) {
    inputEmail.classList.add("error");
    inputEmail.value = "Adresse Email Invalide";
    setTimeout(() => {
      inputEmail.value = "";
    }, 2000);
  } else if (inputPassword.value === "") {
    inputPassword.classList.add("error");
    alert.textContent = "Mot de pass requis";
    setTimeout(() => {
      alertClass.textContent = "";
    }, 1500);
  } else if (emailRegex.test(inputEmail.value) && inputPassword.value !== "") {
    alert("Connexion en cours !!!!");
  }
  //   console.log(inputEmail.value);
});
