// 1. Crea un array que almacene cinco animales
let animals = ["perro", "leon", "conejo", "totuga", "zorro"];

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("lobo");
animals.push("jirafa");
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1);
console.log(animals);
