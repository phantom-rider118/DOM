const html = document.documentElement
console.log(html)
const body = html.children[1] //per puntare al body
console.log(body)
const ul = body.children[0] //per puntare al'ul
console.log(ul)
const myli = ul.children[1] //per puntare al li del centro
console.log(myli)

const parent = myli.parentElement //per puntare al genitore ovvero al ul
console.log(parent)

const precedente = myli.previousElementSibling //per puntare al precedente
console.log(precedente);
const successivo = myli.nextElementSibling //per puntare al successivo
console.log(successivo)