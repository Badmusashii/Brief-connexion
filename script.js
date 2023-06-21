let inputEmail = document.getElementById("email");
let alertEmail = document.getElementById("email_alert_is_Invisible");
let inputPassword = document.getElementById("password");
let alertPassword = document.getElementById("password_alert_is_Invisible");
console.log(alertPassword);
let button = document.getElementById("button");

var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

button.addEventListener("click", (e) => {
  if (!emailRegex.test(inputEmail.value) && inputPassword.value === "") {
    inputEmail.classList.add("error");
    // inputEmail.value = "Adresse Email Invalide";
    alertEmail.classList.add("email_alert_is_Visible");

    inputPassword.classList.add("error");
    // alertClass.textContent = "Mot de pass requis";
    alertPassword.classList.add("password_alert_is_Visible");
  } else if (!emailRegex.test(inputEmail.value)) {
    inputEmail.classList.add("error");
    inputEmail.value = "Adresse Email Invalide";
    setTimeout(() => {
      inputEmail.value = "";
    }, 2000);
  } else if (inputPassword.value === "") {
    inputPassword.classList.add("error");
    alertClass.textContent = "Mot de pass requis";
    setTimeout(() => {
      alertClass.textContent = "";
    }, 1500);
  } else if (emailRegex.test(inputEmail.value) && inputPassword.value !== "") {
    alert("Connexion en cours !!!!");
  }
  console.log(inputEmail.value);
});
