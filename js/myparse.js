const button = document.querySelector("button");

const jsonParse = () => {
  // Declaración de variables
  const json = {};
  const textarea = document.querySelector("textarea").value;
  
  // Se quitan las comillas dobles de todo el String recibido
  const textAreaReplace = textarea.replace(/['"]+/g, "");

  let first_prop;
  let second_prop;
  let third_prop;
  let forth_prop;
  let fifth_prop;

  let newText;
  let newText2;

  // Obtengo la primer propiedad
  if (textarea.includes("prop")) {
    const firstProp = textAreaReplace.slice(
      textAreaReplace.indexOf(":") + 1,
      textAreaReplace.indexOf(",")
    );
    first_prop = firstProp.trim();

    // Se elimina la primer propiedad y almacena el resto del string en newText
    newText = textAreaReplace
      .slice(textAreaReplace.indexOf(",") + 1, textAreaReplace.length)
      .trim();
  }

  // Obtengo la segunda propiedad
  if (newText.includes("prop")) {
    const secondProp = newText.slice(
      newText.indexOf(":") + 1,
      newText.indexOf(",")
    );
    second_prop = secondProp.trim();

    // Se elimina la segunda propiedad y almacena el resto del string en newText2
    newText2 = newText.slice(newText.indexOf(",") + 1, newText.length).trim();
  }

  // Obtengo la tercer propiedad (El arreglo)
  if (newText2.includes("[")) {
    let obj1;
    let obj2;
    let obj1_prop1;
    let obj1_prop2;
    let obj2_prop1;
    let obj2_prop2;

    // Extrae el arreglo
    const thirdProp = newText2.slice(
      newText2.indexOf(":") + 4,
      newText2.indexOf("]")
    );

    // Otengo el primer atributo del primer elemento del arreglo
    obj1_prop1 = thirdProp
      .slice(thirdProp.indexOf(":") + 1, thirdProp.indexOf(","))
      .trim();

    // Remueve la primera propiedad del objeto uno
    let removeFirstProp = thirdProp.slice(
      thirdProp.indexOf(",") + 1,
      thirdProp.indexOf("}")
    );

    //Obtengo el segundo atributo del segundo elemento del arreglo
    obj1_prop2 = removeFirstProp
      .slice(
        removeFirstProp.indexOf(":") + 1,
        removeFirstProp.indexOf(removeFirstProp.length)
      )
      .trim();

    // Extrae el segundo elemento del arreglo
    const secondProp = newText.slice(
      newText.lastIndexOf("{"),
      newText.lastIndexOf("]")
    );

    // Obtengo el primer atributo del segundo elemento del arreglo
    obj2_prop1 = secondProp.slice(
      secondProp.indexOf(":") - 6,
      secondProp.indexOf(",") - 8
    );

    // Obtengo el segundo atributo del segundo elemento del arreglo
    obj2_prop2 = secondProp
      .slice(secondProp.lastIndexOf(":") + 1, secondProp.indexOf("}"))
      .trim();

    // Asigando valores a los objetos del arreglo
    obj1 = {
      sub_prop_1: obj1_prop1,
      sub_prop_2: Number(obj1_prop2),
    };

    obj2 = {
      sub_prop_1: obj2_prop1,
      sub_prop_2: Number(obj2_prop2),
    };

    third_prop = Array(obj1, obj2);
  }

  // Se elimina la tercera propiedad y el resto se almacena en newText3
  const newText3 = newText2.slice(newText2.indexOf("]"), newText2.length);

  // Obtengo la cuarta propiedad
  const forthProp = newText3.slice(
    newText3.indexOf(":") + 1,
    newText3.lastIndexOf(",")
  );
  forth_prop = forthProp.trim();

  // Obtengo la quinta propiedad
  const fifthProp = newText3.slice(
    newText3.lastIndexOf(":") + 1,
    newText3.lastIndexOf("}")
  );
  fifth_prop = fifthProp.trim();

  // Relleno el objeto "json", declarado al principio del programa
  json.first_prop = String(first_prop);
  json.second_prop = Number(second_prop);
  json.third_prop = third_prop;
  json.forth_prop = Boolean(forth_prop);
  json.fifth_prop = fifth_prop;

  // En caso de que algun valor contenga 'null' en tipo string, se le asigna null
  for (const key in json) {
    if (json[key] == "null") {
      json[key] = null;
    }
  }
  console.log(json);

  // Algunos ejemplos para verificar funcionalidad del programa
  console.log(json.first_prop, json.forth_prop, json.third_prop[0]);
};

button.addEventListener("click", jsonParse);
