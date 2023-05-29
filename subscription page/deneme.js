const nameId = document.getElementById("id");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const family = document.getElementById("family");
const tel = document.getElementById("tel");
const password = document.getElementById("password");
const idError = document.getElementById("error-msg");
const passwordError = document.getElementById("password-error");
const nameError = document.getElementById("name-error");
const familyError = document.getElementById("family-error");
const telError = document.getElementById("tel-error");
const emailError = document.getElementById("email-error");


nameId.addEventListener("input", (e) => {
  let pattern = /^[\w]{8,12}/;
  let currentValue = e.target.value;
  let valid = pattern.test(currentValue);
  let check = !valid;

  if (check) {
    idError.style.display = "block";
  } else {
    idError.style.display = "none";
  }
});

password.addEventListener("input", (e) => {
  let pattern = / ^[0-9]{8,10}$/;
  let currentValue = e.target.value;
  let valid = pattern.test(currentValue);
  let check = !valid;

  if (check) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

nameInput.addEventListener("input", (e) => {
  let pattern = /^[A-Za-z]+$/;
  let currentValue = e.target.value;
  let valid = pattern.test(currentValue);
  let check = !valid;

  if (check) {
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
});
family.addEventListener("input", (e) => {
  let pattern = /^[A-Za-z]+$/;
  let currentValue = e.target.value;
  let valid = pattern.test(currentValue);
  let check = !valid;

  if (check) {
    familyError.style.display = "block";
  } else {
    familyError.style.display = "none";
  }
});
tel.addEventListener("input", (e) => {
  let pattern = /[^0-9][+-]?[0-9]{1,10}[^0-9]/;
  let currentValue = e.target.value;
  let valid = pattern.test(currentValue);
  let check = !valid;

  if (check) {
    telError.style.display = "block";
  } else {
    telError.style.display = "none";
  }
});

email.addEventListener("input", (e) => {
  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let currentValue = e.target.value;
  let valid = pattern.test(currentValue);
  let check = !valid;

  if (check) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});