// +++++++++ Loops o bucles +++++++++

// for
for (let i = 0; i < 5; i++) {
  console.log(`Hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Elemento: ${numbers[i]}`);
}

// while
let i = 0;

while (i < 5) {
  console.log(`Hola ${i}`);
  i++;
}

// Bucle infinito
// while(true) {
// }

// do while
i = 6;

do {
  console.log(`Hola ${i}`);
  i++;
} while (i < 5);

// for of
myArray = [1, 2, 3, 4];

mySet = new Set(["Raúl", "Dóezon", "rauldoezn", 37, true, "rauldoezon@mail.mx"]);

myMap = new Map([
  ["name", "Raúl"],
  ["email", "rauldoezon@mail.mx"],
  ["age", 32],
]);

myString = "¡Hola, JavaScript!";

for (let value of myArray) {
  console.log(value);
}

for (let value of mySet) {
  console.log(value);
}

for (let value of myMap) {
  console.log(value);
}

for (let value of myString) {
  console.log(value);
}

// break y continue
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  } else if (i == 7) {
    break;
  }

  console.log(`Hola ${i}`);
}