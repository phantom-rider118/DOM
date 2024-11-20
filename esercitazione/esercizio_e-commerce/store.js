let databaseProdotti = [];
const select = document.querySelector("#contenitore-categorie");

async function prodotti(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const griglia = document.getElementById("contenitore-prodotti");
    const nav = document.querySelector("nav");

    databaseProdotti = data;

    if (!response.ok) {
      console.error(error);
      return;
    }

    const categoria = [];
    data.forEach((x) => {
      if (!categoria.includes(x.category)) {
        categoria.push(x.category);
      }
    });
    creaCategoria(categoria);

    data.forEach((element) => {
      //const tutto = tutteCategorie(element)
      // aside.appendChild(tutto)//

      const prodotti = creacard(element);
      griglia.appendChild(prodotti);
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

prodotti("https://fakestoreapi.com/products");
filter(select.value);

function creacard(obj) {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const titolo = document.createElement("h3");
  const descrizione = document.createElement("p");
  const prezzo = document.createElement("p");
  const acquista = document.createElement("button");
  const preferiti = document.createElement("button");

  div.classList.add("box");
  img.classList.add("box-img");
  acquista.classList.add("bottone-acquisti");
  preferiti.classList.add("bottone-pref");
  prezzo.classList.add("prezzo");
  titolo.classList.add("titolo");
  descrizione.classList.add("descrizione");

  img.src = obj.image;
  img.alt = obj.title;
  titolo.innerText = obj.title;
  descrizione.innerText = obj.description;
  prezzo.innerText = obj.price;
  acquista.innerText = "🛒Acquista";
  preferiti.innerText = "❤️Preferiti";

  div.appendChild(img);
  div.appendChild(titolo);
  div.appendChild(descrizione);
  div.appendChild(prezzo);
  div.appendChild(acquista);
  div.appendChild(preferiti);

  return div;
}

function creaCategoria(x) {
  x.forEach((categoria) => {
    const option = document.createElement("option");

    option.value = categoria;

    option.innerText = categoria;

    select.appendChild(option);
  });
}

function filter(selezione) {
  griglia.innerHTML = "";
  const filtrato = databaseProdotti.filter(
    (element) => element.category === selezione
  );
  filtrato.forEach((element) => {
    const card = creacard(element);
    griglia.appendChild(card);
  });
}
