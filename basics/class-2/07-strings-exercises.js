let myName = "Raúl";
let myLastName = "Dóezon";

// 1. Concatena dos cadenas de texto
console.log("Hola, me llamo " + myName + " " + myLastName);

// 2. Muestra la longitud de una cadena de texto
console.log(myName.length);

// 3. Muestra el primer y último carácter de un string
console.log(myLastName[0]);
console.log(myLastName[myLastName.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toUpperCase());
console.log(myName.toLocaleLowerCase());

// 5. Crea una cadena de texto en varias líneas
let nextMission = `See
you
next
mission.`;
console.log(nextMission);

// 6. Interpola el valor de una variable en un string
console.log(`Adiós ${myName}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let message = "The last Metroid is in captivity.";
console.log(message.replace(/\s+/g, '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(message.includes("Metroid"));

// 9. Comprueba si dos strings son iguales
console.log(myName === myLastName);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(myName.length === myLastName.length);
