const btn = document.querySelector(".my-btn");

function setUsername(username) {
    const usernameEl = document.querySelector(".my-username");

    usernameEl.innerText = username;
    sessionStorage.setItem("my-username", username)
}

btn.addEventListener("click", () => {
    const input = document.querySelector(".my-input");
    const value = input.value;

    setUsername(value)
    input.value = ""
})

//recupero del elemento salvato nel localStorage
const savedUsername = sessionStorage.getItem("my-username");

//controllo se esiste il nome alla chiave inserita altrimenti potrebbe generare degli errori
if (savedUsername) {
  setUsername(savedUsername);
}

//per svuotare tutto il storege
clearBtn.addEventListener("click", () => {
  sessionStorage.clear();
});