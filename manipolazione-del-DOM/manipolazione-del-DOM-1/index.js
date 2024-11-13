const input = document.querySelector("input");
const ul = document.querySelector("ul");

const addProduct = () => {
  const taskText = input.value;
  //controllo se l'input non è vuoto
  if (taskText !== "") {
    // crea la li e la checkbox
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    //imposta il tipo del input a checkbox
    checkbox.type = "checkbox";

    //aggiunge la checkbox accanto al testo del task
    li.appendChild(checkbox);
    li.textContent = taskText;

    ul.appendChild(li);
    //serve per svuotare il campo di input
    input.value = "";
  }
};
