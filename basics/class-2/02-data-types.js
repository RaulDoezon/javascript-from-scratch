// +++++++++ Tipos de datos primitivos +++++++++

// Cadenas de texto (string)
let myName = "Raúl";
let alias = 'Dóezon';
let email = `raul@mail.com`;

// Números (number)
let age = 32; // Entero
let height = 1.82; // Decimal

// Booleanos (boolean)
let isTeacher = true;
let isStudent = false;

// Undefined
let undefinedValue;
console.log(undefinedValue);

// Null
let nullValue = null;

// Symbol
let mySymbol = Symbol("mysymbol");

// BigInt
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129);
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n;

// Mostramos los tipos de datos
console.log(typeof myName);
console.log(typeof alias);
console.log(typeof email);

console.log(typeof age);
console.log(typeof height);

console.log(typeof isTeacher);
console.log(typeof isStudent);

console.log(typeof undefinedValue);

console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigInt);
console.log(typeof myBigInt2);