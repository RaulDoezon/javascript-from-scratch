// +++++++++ Propagación (...) +++++++++

// Sintaxis arrays
let myArray2 = [...myArray, 5, 6];

console.log(myArray2);

// Copia de arrays
let myArray3 = [...myArray];

console.log(myArray3);

// Combinación de arrays
let myArray4 = [...myArray, ...myArray2, ...myArray3];

console.log(myArray4);

// Sintaxis objects
let person4 = {...person, email: "rauldoezon@mail.mx"};

console.log(person4)

// Copia de objects
let person5 = {...person};

console.log(person5);
