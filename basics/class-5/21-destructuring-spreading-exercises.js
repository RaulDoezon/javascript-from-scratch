// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let myArray = ["Azul", "Rojo", "Blanco", "Negro"];
let [blue, red] = myArray;

console.log(`${blue} y ${red}.`);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [blue2, red2, white, black, green = "Verde"] = myArray;

console.log(`${blue2}, ${red2}, ${white}, ${black} y ${green}.`);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let myObject = {
  myName: "Raúl",
  age: 32,
  studies: {
    level: "Ingeniería en TICs",
    school: "ITGAM",
  }
};
let {myName, age} = myObject;

console.log(`Soy ${myName} y tengo ${age} años.`);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let {myFirstName = myName, myAge = age} = myObject;

console.log(`Soy ${myFirstName} y tengo ${myAge} años.`);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {studies: {level}, studies: {school}} = myObject;

console.log(`Estudié en el ${school} ${level}.`);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1To5 = [1, 2, 3, 4, 5];
let array6To10 = [6, 7, 8, 9, 10];
let arrayNumbers = [...array1To5, ...array6To10];

console.log(arrayNumbers);

// 7. Usa propagación para crear una copia de un array
let newMyArray = [...myArray];

console.log(newMyArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let characterData1 = {firstName: "Samus", lastName: "Aran"};
let characterData2 = {
  job: {
    organization: "Galactic Federation",
    position: "Bounty Hunter"
  }
};
let character = {...characterData1, ...characterData2}

console.log(character);

// 9. Usa propagación para crear una copia de un objeto
let newMyObject = {...myObject};

console.log(newMyObject);

// 10. Combina desestructuración y propagación
let message = {...myObject, ...character};
let {myName2 = myName, firstName} = message;

console.log(`Me llamo ${myName2} y mi personaje favorito es ${firstName}.`);
