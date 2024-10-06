let loginClick = document.querySelector(".log");
let registerClick = document.querySelector(".reg");

let loginForm = document.querySelector(".first");
let registerForm = document.querySelector(".second");

loginForm.style.display = "flex";
registerForm.style.display = "none";

// Add event listener for when the "Register" button is clicked
registerClick.addEventListener("click", function () {
  registerForm.style.display = "flex";
  loginForm.style.display = "none";
});

// Add event listener for when the "Login" button is clicked
loginClick.addEventListener("click", function () {
  loginForm.style.display = "flex";
  registerForm.style.display = "none";
});

// *********** Form Validation Logic *********** //

// For the first form (Login)
let usernameInput1 = document.querySelector(".other");
let passwordInput1 = document.querySelector('input[name="password"]');
let theError1 = document.querySelector(".pdemo");
let loginButton1 = document.querySelector(".submit");

loginButton1.addEventListener("click", function (e) {
  e.preventDefault();
  if (usernameInput1.value === "" || passwordInput1.value === "") {
    theError1.innerText = "Error: All fields are required.";
    theError1.style.display = "block";
  } else {
    theError1.style.display = "none";
  }
});

// For the second form (Register)
let usernameInput2 = document.querySelector('input[name="username"]');
let emailInput2 = document.querySelector('input[name="email"]');
let passwordInput2 = document.querySelector('input[name="password"]');
let confirmPasswordInput2 = document.querySelector(
  'input[name="confirmPassword"]'
);

let theError2 = document.querySelector(".secondtext");
let registerButton = document.querySelector(".second button");

registerButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    usernameInput2.value === "" ||
    emailInput2.value === "" ||
    passwordInput2.value === "" ||
    confirmPasswordInput2.value === ""
  ) {
    theError2.innerText = "Error: All fields are required.";
    theError2.style.display = "flex";
  } else {
    theError2.style.display = "none";
  }
});
