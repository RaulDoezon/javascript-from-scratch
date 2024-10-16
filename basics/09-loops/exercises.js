// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("+++++++++ Números del 1 al 20 +++++++++");

console.log("[(+)] FOR [(+)]");

for (let number = 1; number <= 100; number++) {
  console.log(number);
}

console.log("\n[(+)] WHILE [(+)]");

let whileNumber = 1;

while (whileNumber <= 100) {
  console.log(whileNumber);

  whileNumber++;
}

console.log("\n[(+)] DO...WHILE [(+)]");

let doWhileNumber = 1;

do {
  console.log(doWhileNumber);

  doWhileNumber++;
} while (doWhileNumber <= 100);

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("\n+++++++++ Sumar todos los números del 1 al 100 y mostrar el resultado +++++++++");

console.log("[(+)] FOR [(+)]");

let auxiliaryNumber = 0;

for (let addNumber = 1; addNumber <= 100; addNumber++) {
  auxiliaryNumber = auxiliaryNumber + addNumber;
}

console.log(auxiliaryNumber);

console.log("\n[(+)] WHILE [(+)]");

let whileAuxNumber = 0;
let whileAddNumber = 1;

while (whileAddNumber <= 100) {
  whileAuxNumber = whileAuxNumber + whileAddNumber;
  whileAddNumber++;
}

console.log(whileAuxNumber);

console.log("\n[(+)] DO...WHILE [(+)]");

let doWhileAuxNumber = 0;
let doWhileAddNumber = 1;

do {
  doWhileAuxNumber = doWhileAuxNumber + doWhileAddNumber;
  doWhileAddNumber++;
} while (doWhileAddNumber <= 100);

console.log(doWhileAuxNumber);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("\n+++++++++ Imprimir todos los números pares entre 1 y 50 +++++++++");

console.log("[(+)] FOR [(+)]");

for (let forEvenNumber = 1; forEvenNumber <= 50; forEvenNumber++) {
  if (forEvenNumber % 2 === 0) {
    console.log(forEvenNumber);
  }
}

console.log("\n[(+)] WHILE [(+)]");

let whileEvenNumber = 1;

while (whileEvenNumber <= 50) {
  if (whileEvenNumber % 2 === 0) {
    console.log(whileEvenNumber);
  }

  whileEvenNumber++;
}

console.log("\n[(+)] DO...WHILE [(+)]");

let doWhileEvenNumber = 1;

do {
  if (doWhileEvenNumber % 2 === 0) {
    console.log(doWhileEvenNumber);
  }

  doWhileEvenNumber++;
} while (doWhileEvenNumber <= 50);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("\n+++++++++ Dado un array de nombres, usar un bucle para imprimir cada nombre en la consola +++++++++");

console.log("[(+)] FOR [(+)]");

let names = ["Ana", "Raúl", "Daniela", "Andrés"];

for (let nameIndex = 0; nameIndex < names.length; nameIndex++) {
  console.log(names[nameIndex]);
}

console.log("\n[(+)] WHILE [(+)]");

let whileNameIndex = 0;

while (whileNameIndex < names.length) {
  console.log(names[whileNameIndex]);

  whileNameIndex++;
}

console.log("\n[(+)] DO...WHILE [(+)]");

let doWhileNameIndex = 0;

do {
  console.log(names[doWhileNameIndex]);

  doWhileNameIndex++;
} while (doWhileNameIndex < names.length);

console.log("\n[(+)] FOR...EACH [(+)]");

names.forEach((name) => {
  console.log(name);
});

console.log("\n[(+)] FOR...IN [(+)]");

for (const name in names) {
  console.log(names[name]);
}

console.log("\n[(+)] FOR...OF [(+)]");

for (const name of names) {
  console.log(name);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("\n+++++++++ Escribir un bucle que cuente el número de vocales en una cadena de texto +++++++++");

let textString = "Castlevania";
let vowels = ["a", "e", "i", "o", "u"];
let vowelCounter = 0;

for (let text = 0; text < textString.length; text++) {
  for (let vowel = 0; vowel < vowels.length; vowel++) {
    if (textString[text].includes(vowels[vowel])) {
      vowelCounter++;
    }
  }
}

console.log(`La palabra ${textString} tiene ${vowelCounter} vocales.`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("\n+++++++++ Dado un array de números, usar un bucle para multiplicar todos los números y mostrar el producto +++++++++");

let numbersToMultiply = [2, 3, 4];
let product = 1;

numbersToMultiply.forEach((number) => {
  product = product * number;
});

console.log(product);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("\n+++++++++ Escribir un bucle que imprima la tabla de multiplicar del 5 +++++++++");

let multiplicationIndex = 1;
let tableNumber = 5;

while (multiplicationIndex <= 10) {
  console.log(`${tableNumber}x${multiplicationIndex}= ${tableNumber * multiplicationIndex}`);

  multiplicationIndex++;
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("\n+++++++++ Usar un bucle para invertir una cadena de texto +++++++++");

let invertedString = "";

for (let invertedIndex = textString.length - 1; invertedIndex >= 0; invertedIndex--) {
  invertedString = invertedString + textString[invertedIndex];
}

console.log(invertedString);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("\n+++++++++ Usar un bucle para generar los primeros 10 números de la secuencia de Fibonacci +++++++++");

let previousNumber = 0;
let nextNumber = 1;
let fibonacci;

for (let fibonacciIndex = 2; fibonacciIndex <= 10; fibonacciIndex++) {
  fibonacci = previousNumber + nextNumber;
  previousNumber = nextNumber;
  nextNumber = fibonacci;
}

console.log(fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("\n+++++++++ Dado un array de números, usar un bucle para crear un nuevo array que contenga solo los números mayores a 10 +++++++++");

let index = 0;
let variousNumbers = [100, 5, 11, 1, 10, 19, 4, 15, 9];
let greaterThanTen = [];

console.log(`Arreglo de números: ${variousNumbers}`);

do {
  if (variousNumbers[index] > 10) {
    greaterThanTen.push(variousNumbers[index]);
  }

  index++;
} while (index < variousNumbers.length);

console.log(`Números mayores a 10: ${greaterThanTen}`);
