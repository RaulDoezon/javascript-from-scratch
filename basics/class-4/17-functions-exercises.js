// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(11, 21));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numbers = [1, 7, 2, 6, 3, 5, 4];

const largestNumber = (array) => {
  let auxiliaryNumber = 0;

  for (let indexNumber = 0; indexNumber <= array.length; indexNumber++) {
    if (array[indexNumber] > auxiliaryNumber) {
      auxiliaryNumber = array[indexNumber];
    }
  }

  return auxiliaryNumber;
}

console.log(`El número mayor es: ${largestNumber(numbers)}`);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let myStringText = "armando"
function checkVowels(theString) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelCounter = 0;

  for (let stringIndex = 0; stringIndex < theString.length; stringIndex++) {
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
      if (theString[stringIndex].includes(vowels[vowelsIndex])) {
        vowelCounter++;
      }
    }
  }

  return vowelCounter;
}

console.log(`El texto ${myStringText} contiene ${checkVowels(myStringText)} vocales.`);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let stringsArray = ["the", "last", "metroid", "is", "in", "captivity"];
let newStringsText = [];

const stringToUppercase = (myArray) => {
  for (let index = 0; index < myArray.length; index++) {
    let uppercaseText = myArray[index].toUpperCase();

    newStringsText.push(uppercaseText);
  }
}

stringToUppercase(stringsArray);

console.log(stringsArray);
console.log(newStringsText);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
let myNumber = 3;

function primeNumber(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(`El número ${myNumber} ${primeNumber(myNumber) ? "es primo" : "no es primo"} `);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let firstArray = ["Samus", "Blanco", 1, "Aran", 19 ];
let secondArray = ["Azul", 19, 5, "Samus", "JavaScript"];
let thirdArray = [];

const compare = (array1, array2) => {
  for (let array1Index = 0; array1Index < array1.length; array1Index++) {
    for (let array2Index = 0; array2Index < array2.length; array2Index++) {
      if (array1[array1Index] === array2[array2Index]) {
        thirdArray.push(array1[array1Index]);
      }
    }
  }
}

compare(firstArray, secondArray);
console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counterNumber = 0;

function sumOfPairs(numbers) {
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      counterNumber = counterNumber + number;
    }
  });
}

sumOfPairs(arrayNumbers);

console.log(arrayNumbers);
console.log(`La suma de todos los números pares es: ${counterNumber}`);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
let squaredArray = [];

const squaredNumbers = (array) => {
  array.forEach((arrayNumber) => {
    let squaredNumber = Math.pow(arrayNumber, 2);

    squaredArray.push(squaredNumber);
  });
}

squaredNumbers(arrayNumbers);

console.log(squaredArray);

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let myName = "RAÚL";
let reverseName = "";

let reverseText = (string) => {
  for (let indexName = string.length - 1; indexName >= 0; indexName--) {
    reverseName = reverseName + string[indexName];
  }
}

reverseText(myName);

console.log(myName);
console.log(reverseName);

// 10. Crea una función que calcule el factorial de un número dado
let factorialNumber = 5;

function factorial(number) {
  let factorialCounter = 1;

  for (let index = number; index >= 1; index--) {
    factorialCounter = factorialCounter * index;
  }

  return factorialCounter;
}

console.log(`El factorial de ${factorialNumber} es: ${factorial(factorialNumber)}`);
