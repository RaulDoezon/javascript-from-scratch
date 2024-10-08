// +++++++++ Array +++++++++

// Declaración
let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// Inicialización
myArray = [3];
myArray2 = new Array(3);

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

myArray = ["Raúl", "Dóezon", "RaulDoezon", 32, true];
myArray2 = new Array("Raúl", "Dóezon", "RaulDoezon", 32, true);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[2] = "Raúl";
// myArray2[0] = "Dóezon"
myArray2[1] = "RaulDoezon";
myArray2[4] = "RaulDoezon";

console.log(myArray2);

myArray = [];
myArray[2] = "Raúl";
// myArray[0] = "Dóezon";
myArray[1] = "RaulDoezon";

console.log(myArray);

// +++++++++ Métodos comunes +++++++++

myArray = [];

// push y pop
myArray.push("Raúl");
myArray.push("Dóezon");
myArray.push("RaulDoezon");
myArray.push(32);

console.log(myArray);

console.log(myArray.pop()); // Elimina el último y lo devuelve
myArray.pop();

console.log(myArray);

// shift y unshift
console.log(myArray.shift());
console.log(myArray);

myArray.unshift("Raúl", "RaulDoezon");
console.log(myArray);

// length
console.log(myArray.length);

// clear
myArray = [];
myArray.length = 0; // alternativa
console.log(myArray);

// slice
myArray = ["Raúl", "Dóezon", "RaulDoezon", 32, true];

let myNewArray = myArray.slice(1, 3);

console.log(myArray);
console.log(myNewArray);

// splice
myArray.splice(1, 3);
console.log(myArray);

myArray = ["Raúl", "Dóezon", "RaulDoezon", 32, true];

myArray.splice(1, 2, "Nueva entrada");
console.log(myArray);
