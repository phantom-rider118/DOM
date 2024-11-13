Implementare il codice necessario per:

Recuperare il valore di ciascun campo di input e creare un oggetto person contenente le proprietà: firstName, lastNamee age.
Infine recuperare l'elemento forme aggiungere l'attributo data-personcontenente l'oggetto personin formato json.
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="container">
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" class="form-input" id="firstName" value="Mario" />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" class="form-input" id="lastName" value="Rossi" />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" class="form-input" id="age" value="25" />
        </div>
      </form>
    </div>

    <script>
      // ......
    </script>
  </body>
</html>