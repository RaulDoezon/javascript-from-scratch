// 1. Crea un mapa que asocie el número del mes a su nombre
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

// 2. Comprueba si el mes número 5 existe en el map e imprime su valor
for (const [key, value] of months.entries()) {
  if (key === "5") {
    console.log(value);
  }
}

// 3. Añade al mapa una clave con un array que almacene los meses de verano
months.set("verano", ["Agosto", "Septiembre", "Octubre"]);
console.log(months);

// 4. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = ["rojo", "Blanco", "azul"];
console.log(array);

let arrayToSet = new Set(array);
console.log(arrayToSet);

let setInMap = new Map();
setInMap.set("Set", arrayToSet);
console.log(setInMap);
