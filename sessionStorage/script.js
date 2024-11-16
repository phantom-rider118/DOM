const emailInput = document.querySelector(".email");
const firstnameInput = document.querySelector(".firstname");
const surnameInput = document.querySelector(".lastname");
const btn = document.querySelector(".btn");
const titleName = document.querySelector(".title-name");

function setForm(name, email, surname) {
  titleName.textContent = name;

  sessionStorage.setItem("firstname", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("surname", surname);
}

btn.addEventListener("click", () => {
  const firstname = firstnameInput.value;
  const email = emailInput.value;
  const surname = surnameInput.value;

  setForm(firstname, email, surname);
});

const savedName = sessionStorage.getItem("firstname");
const savedSurname = sessionStorage.getItem("surname");
const savedEmail = sessionStorage.getItem("email");

if (savedName || savedSurname || savedEmail) {
  titleName.textContent = savedName || "";
  firstnameInput.value = savedName || "";
  emailInput.value = savedEmail || "";
  surnameInput.value = savedSurname || "";
}