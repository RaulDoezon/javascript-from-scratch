// +++++++++ Set +++++++++

// Declaración
let mySet = new Set();

console.log(mySet);

// Inicialización
mySet = new Set(["Raúl", "Dóezon", "RaulDoezon", 32, true, "rauldoezon@mail.com"]);

console.log(mySet);

// +++++++++ Métodos comunes +++++++++

// add y delete
mySet.add("https://rauldoezon.mx");

console.log(mySet);

mySet.delete("https://rauldoezon.mx");

console.log(mySet);
console.log(mySet.delete("Raúl"));
console.log(mySet.delete(4));
console.log(mySet);

// has
console.log(mySet.has("Dóezon"));
console.log(mySet.has("Raúl"));

// size
console.log(mySet.size);

// Convertir un set a array
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a set
mySet = new Set(myArray);
console.log(mySet);

// No admite duplicados
mySet.add("rauldoezon@mail.com");
mySet.add("rauldoezon@mail.com");
mySet.add("rauldoezon@mail.com");
mySet.add("rauldoezon@mail.com");

console.log(mySet);
