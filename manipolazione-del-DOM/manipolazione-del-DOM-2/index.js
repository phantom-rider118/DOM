function addPersonAttribute() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  const person = { firstName: firstName, lastName: lastName, age: age };

  //convertire l'oggetto in formato JSON
  const personJSON = JSON.stringify(person);

  //recupero elemento form e aggiunge attributo "data-person"
  const form = document.querySelector("form");
  form.setAttribute("data-person", personJSON);
}

addPersonAttribute();
