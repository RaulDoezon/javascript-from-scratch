// 1. Crea un objeto con 3 propiedades
let character = {
  firstName: "Samus",
  lastName: "Aran",
  occupation: "Bounty Hunter",
};

// 2. Accede y muestra su valor
console.log(`Name: ${character.firstName}`);
console.log(`Last name: ${character.lastName}`);
console.log(`Occupation: ${character.occupation}`);

// 3. Agrega una nueva propiedad
character.age = 27;

console.log(character);

// 4. Elimina una de las 3 primeras propiedades
delete character.occupation;

console.log(character);

// 5. Agrega una función e invócala
character.phrase = function() {
  console.log("The last Metroid is in captivity. The galaxy is at peace...");
};

console.log(character.phrase());

// 6. Itera las propiedades del objeto
for (const key in character) {
  console.log(key);
}

// 7. Crea un objeto anidado
let nestedObject = {
  firstName: "Rodney",
  lastName: "Aran",
};

character.parents = nestedObject;

console.log(character);

// 8. Accede y muestra el valor de las propiedades anidadas
for (const key in character.parents) {
  console.log(character.parents[key]);
}

// 9. Comprueba si los dos objetos creados son iguales
console.log(character === nestedObject);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(character.firstName === nestedObject.lastName);
