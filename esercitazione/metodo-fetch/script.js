//GET - https://api.potterdb.com/v1/books

//la funzione fetch() viene utilizzata per effetuare la CHIAMATA DI RETE

// const responce = fetch("https://api.potterdb.com/v1/books", {
//   method: "POST", //dobbiamo specificare
// });

// Accetta 2 paramtri:
// - Il primo è l'URL verso il quale vogliamo effetuare la chiamata
// - il secondo è OPTIONS ovvero un OGGETTO DI CONFIGURAZIONE, in cui possimo andare a definire i vari DATI, le varie OPZIONI e i METODI (GET,POST, ecc...)

//il secondo parametro non è obbligatorio perchè se vogliamo utilizzare il metodo GET, non è necessario specificarlo perchè è già impostato di default.

//si assegna il risultato della chiamata ad una costante chiamata RESPONSE(di solito viene utilizzato questo come nome ma si potrebbe chiamare in qualsiasi modo ad esempio CHIMATA, PIPPO, ecc...)

// console.log(responce) // Promise {<pending>}
//provando a stampare la risposta abbaimo una promise in stato pending perchè le chiamate di rete sono OPERAZIONI ASINCRONE di cui non siappiamo quanto tempo occupera per recuperare i dati

// const response = fetch("https://api.potterdb.com/v1/books")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//per poter utilizzare i dati che vengono presi occorre CONVERTIRLI attraverso il METODO JSON (anche questo restituisce una promise)

//possiamo utilizzare ASYNC/AWAIT (perchè stiamo nel contesto delle PROMISE)

async function fetchData() {
  try {
    const response = await fetch(`https://api.potterdb.com/v1/books`);
    const responseJson = await response.json();
    const book = responseJson.data[0]

    // const title = book.attributes.title;
    // const cover = book.attributes.cover;

    //possiamo fare la destrutturazione
    const {title,cover} = book.attributes

    //puntiamo i due elementi
    const h1 = document.querySelector(".my-title")
    const image = document.querySelector(".my-image")

    h1.textContent = title
    image.setAttribute("src", cover)

    console.log(title, cover);
    
  } catch (error) {
    console.error(error);
  }
}

fetchData();
