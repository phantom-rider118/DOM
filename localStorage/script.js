const emailInput = document.querySelector(".email");
const firstnameInput = document.querySelector(".firstname");
const surnameInput = document.querySelector(".lastname");
const btn = document.querySelector(".btn");
const titleName = document.querySelector(".title-name");

function setForm(name, email, surname) {
  titleName.textContent = name;

  localStorage.setItem("firstname", name);
  localStorage.setItem("email", email);
  localStorage.setItem("surname", surname);
}

btn.addEventListener("click", () => {
  const firstname = firstnameInput.value;
  const email = emailInput.value;
  const surname = surnameInput.value;

  setForm(firstname, email, surname);
});

const savedName = localStorage.getItem("firstname");
const savedSurname = localStorage.getItem("surname");
const savedEmail = localStorage.getItem("email");

if (savedName || savedSurname || savedEmail) {
  titleName.textContent = savedName || "";
  firstnameInput.value = savedName || "";
  emailInput.value = savedEmail || "";
  surnameInput.value = savedSurname || "";
}
