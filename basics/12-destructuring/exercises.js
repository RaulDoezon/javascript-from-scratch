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
