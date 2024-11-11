const ul = document.querySelector("ul");
console.log(ul);

//elemento padre di ul
const parent = ul.parentElement;
console.log(parent);

//secondo elemento figlio di ul
const secondElement = ul.children[1];
console.log(secondElement);

//elemento fratello successivo del secondo li
const nextli = secondElement.nextElementSibling;
console.log(nextli);

//elemento fratello precedente del secondo li
const previousli = secondElement.previousElementSibling;
console.log(previousli);
