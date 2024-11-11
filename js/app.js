document.addEventListener("DOMContentLoaded", () => {
  const loginNav = document.querySelector(".loginNav");
  const registerNav = document.querySelector(".registerNav");
  const overlay = document.querySelector(".overlay");
  const modalContainer = document.querySelector(".modal-container");
  const loginForm = document.querySelector(".login-form");
  const registerForm = document.querySelector(".register-form");
  const loginTab = document.querySelector(".login-tab");
  const registerTab = document.querySelector(".register-tab");

  function toggleModal(display) {
    modalContainer.style.display = display ? "block" : "none";
    overlay.style.display = display ? "block" : "none";
  }

  loginNav.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    toggleModal(true);
    showLoginForm();
  });

  registerNav.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    toggleModal(true);
    showRegisterForm();
  });

  overlay.addEventListener("click", () => {
    toggleModal(false);
  });

  function showLoginForm() {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
  }

  function showRegisterForm() {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
    loginTab.classList.remove("active");
    registerTab.classList.add("active");
  }

  loginTab.addEventListener("click", showLoginForm);
  registerTab.addEventListener("click", showRegisterForm);
});


let usernameInput1 = document.querySelectorAll(".other");
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

// let theError2 = document.querySelector(".secondtext");
let registerButton = document.querySelector(".second button");

registerButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    usernameInput2.value === "" ||
    emailInput2.value === "" ||
    passwordInput2.value === "" ||
    confirmPasswordInput2.value === ""
  ) {
    theError1.innerText = "Error: All fields are required.";
    theError1.style.display = "flex";
  } else {
    theError1.style.display = "none";
  }
});