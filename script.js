let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let submit = document.getElementById("button");
let password = document.getElementById("fakepwd");
let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
console.log(password);
console.log(inputPassword);
console.log(inputEmail);
submit.addEventListener("click", () => {
  if (!emailRegex.test(inputEmail.value) && inputPassword.value === "") {
    inputEmail.classList.add("error");
    inputEmail.value = "Casse non respectée";
    inputPassword.classList.add("error");
    password.textContent = "mauvais password";
    setTimeout(reinitialise, 3000);
  } else if (!emailRegex.test(inputEmail.value)) {
    inputEmail.classList.add("error");
    inputEmail.value = "Casse non respectée";
    setTimeout(reinitialise, 3000);
  } else if (inputPassword.value === "") {
    inputPassword.classList.add("error");
    password.textContent = "mauvais password";
  }
});
function reinitialise() {
  inputEmail.innerText = "Chuck@norris.com";
}
