// 1. Crea un array que almacene cinco animales
let animals = ["perro", "leon", "conejo", "totuga", "zorro"];

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("lobo");
animals.push("jirafa");
console.log(animals);

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1);
console.log(animals);

// 4. Crea un set que almacene cinco libros
let books = new Set(["Fundamentos de Programación", "Eloquent JavaScript", "Git y GitHub desde cero", "Aprendiendo JavaScript", "The Linux Command Line"]);
console.log(books);

// 5. Añade dos más. Uno de ellos repetido
books.add("Ultimate Python");
books.add("Git y GitHub desde cero");
console.log(books);

// 6. Elimina uno concreto a tu elección
books.delete("Eloquent JavaScript");
console.log(books);

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map();
months.set("1", "Enero");
months.set("2", "Febrero");
months.set("3", "Marzo");
months.set("4", "Abril");
months.set("5", "Mayo");
months.set("6", "Junio");
months.set("7", "Julio");
months.set("8", "Agosto");
months.set("9", "Septiembre");
months.set("10", "Octubre");
months.set("11", "Noviembre");
months.set("12", "Diciembre");
console.log(months);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
for (const [key, value] of months.entries()) {
  if (key === "5") {
    console.log(value);
  }
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set("verano", ["Agosto", "Septiembre", "Octubre"]);
console.log(months);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = ["rojo", "Blanco", "azul"];
console.log(array);

let arrayToSet = new Set(array);
console.log(arrayToSet);

let setInMap = new Map();
setInMap.set("Set", arrayToSet);
console.log(setInMap);
