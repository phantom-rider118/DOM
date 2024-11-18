if (window.location.href.includes("registrazione.html")) {
  const formRegistrazione = document.getElementById("form-registrazione");

  function registrazione() {
    const nome = document.getElementById("nome");
    const cognome = document.getElementById("cognome");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const nomeValue = nome.value;
    localStorage.setItem("nome", nomeValue);

    const cognomeValue = cognome.value;
    localStorage.setItem("cognome", cognomeValue);

    const emailValue = email.value;
    localStorage.setItem("email", emailValue);

    const passwordValue = password.value;
    localStorage.setItem("password", passwordValue);

    nome.value = "";
    cognome.value = "";
    email.value = "";
    password.value = "";
  }

  formRegistrazione.addEventListener("submit", (event) => {
    event.preventDefault();
    registrazione();
  });
}

if (window.location.href.includes("login.html")) {
  const formLogin = document.getElementById("form-login");

  function login() {
    const emailLogin = document.getElementById("email-login");
    const passwordLogin = document.getElementById("password-login");

    const emailLoginValue = emailLogin.value;
    const passwordLoginValue = passwordLogin.value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (
      savedEmail === emailLoginValue &&
      savedPassword === passwordLoginValue
    ) {
      alert("Login avvenuto con successo");
    } else {
      alert("Login fallito");
    }
  }

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    login();
  });
}

if (window.location.href.includes("dashboard.html")) {
  function renderDati() {
    
    const div = document.createElement("div");
    const nome = document.createElement("p");
    const cognome = document.createElement("p");
    const email = document.createElement("p");

    nome.textContent = localStorage.getItem("nome");
    cognome.textContent = localStorage.getItem("cognome");
    email.textContent = localStorage.getItem("email");

    document.body.appendChild(div);
    div.appendChild(nome);
    div.appendChild(cognome);
    div.appendChild(email);
  }

  renderDati();
}
