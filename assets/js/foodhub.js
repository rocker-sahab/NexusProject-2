'use strict';


// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');



// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

// shopping cart toggle function
const cartToggleFunc = function () { shoppingCart.classList.toggle('active') }



// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {

  // If the shopping-cart has an `active` class, it will be removed.
  if (shoppingCart.classList.contains('active')) cartToggleFunc();

  navToggleFunc();

});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {

  // If the navbar-nav has an `active` class, it will be removed.
  if (nav.classList.contains('active')) navToggleFunc();

  cartToggleFunc();

});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}

// Add these functions at the end of your existing JavaScript file or create a new one

function openLoginModal() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
  // Reset login form and error message on modal close
  document.getElementById("loginForm").reset();
  document.getElementById("loginError").style.display = "none";
}

function openSignupModal() {
  document.getElementById("signupModal").style.display = "block";
}

function closeSignupModal() {
  document.getElementById("signupModal").style.display = "none";
  // Reset signup form and error message on modal close
  document.getElementById("signupForm").reset();
  document.getElementById("signupError").style.display = "none";
}

// Add these functions for handling login and signup form submissions

function loginUser() {
  // Replace this with actual login logic, for now, assume incorrect login
  document.getElementById("loginError").style.display = "block";
}

function signupUser() {
  // Replace this with actual signup logic, for now, assume signup error
  document.getElementById("signupError").style.display = "block";
}

// Add event listeners to call login and signup functions on form submission

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  loginUser();
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();
  signupUser();
});
