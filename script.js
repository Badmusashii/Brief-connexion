let inputEmail = document.getElementById("email");
let alertEmail = document.getElementById("email_alert");
let inputPassword = document.getElementById("password");
let alertPassword = document.getElementById("password_alert");
console.log(inputPassword);
console.log(alertPassword);
let button = document.getElementById("button");

var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

button.addEventListener("click", (e) => {
  if (!emailRegex.test(inputEmail.value) && inputPassword.value === "") {
    inputEmail.classList.add("error");
    alertEmail.classList.add("email_alert_is_Visible");
    inputPassword.classList.add("error");
    alertPassword.classList.add("password_alert_is_Visible");
    setTimeout(() => {
      inputEmail.classList.remove("error");
      alertEmail.classList.remove("email_alert_is_Visible");
      inputPassword.classList.remove("error");
      alertPassword.classList.remove("password_alert_is_Visible");
    }, 2500);
  } else if (!emailRegex.test(inputEmail.value)) {
    inputEmail.classList.add("error");
    alertEmail.classList.add("email_alert_is_Visible");
    setTimeout(() => {
      inputEmail.classList.remove("error");
      alertEmail.classList.remove("email_alert_is_Visible");
      inputEmail.value = "";
    }, 2000);
  } else if (inputPassword.value === "") {
    inputPassword.classList.add("error");
    alertPassword.classList.add("password_alert_is_Visible");
    setTimeout(() => {
      inputPassword.classList.remove("error");
      alertPassword.classList.remove("password_alert_is_Visible");
    }, 1500);
  } else if (emailRegex.test(inputEmail.value) && inputPassword.value !== "") {
    alert("Connexion en cours !!!!");
  }
});
