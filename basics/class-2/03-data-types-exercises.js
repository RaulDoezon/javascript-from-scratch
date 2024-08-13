// 1. Escribe un comentario en una línea
// Comentario de una línea.

// 2. Escribe un comentario en varias líneas
/*
  Comentario
  de
  varias
  líneas.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let aNumber = 92;
let aString = "Raúl";
let aBigInt = 123456789123456789123456789n;
let aSymbol = Symbol("Samus");
let aBoolean = true;
let aUndefined = undefined;
let aNull = null;

// 4. Imprime por consola el valor de todas las variables
console.log("+++++++++ IMPRIMIR POR CONSOLA EL VALOR DE LAS VARIABLES +++++++++");
console.log(aNumber);
console.log(aString);
console.log(aBigInt);
console.log(aSymbol);
console.log(aBoolean);
console.log(aUndefined);
console.log(aNull);

// 5. Imprime por consola el tipo de todas las variables
console.log("\n+++++++++ IMPRIMIR POR CONSOLA EL TIPO DE LAS VARIABLES +++++++++");
console.log(typeof aNumber);
console.log(typeof aString);
console.log(typeof aBigInt);
console.log(typeof aSymbol);
console.log(typeof aBoolean);
console.log(typeof aUndefined);
console.log(typeof aNull);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
aNumber = 31;
aString = "Armando";
aBigInt = 11223344556677889900n;
aSymbol = Symbol("Aran");
aBoolean = false;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
aNumber = "Ridley";
aString = 3;
aBigInt = Symbol("Kraid");
aSymbol = 99887766554433221100n;
aBoolean = undefined;
aUndefined = null;
aNull = true;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const aConstNumber = 92;
const aConstString = "Raúl";
const aConstBigInt = 123456789123456789123456789n;
const aConstSymbol = Symbol("Samus");
const aConstBoolean = true;
const aConstUndefined = undefined;
const aConstNull = null;

// 9. A continuación, modifica los valores de las constantes
// aConstNumber = 90;
// aConstString = "Hernández";
// aConstBigInt = 100000000000000000n;
// aConstSymbol = Symbol("Adam");
// aConstBoolean = false;
// aConstUndefined = null;
// aConstNull = undefined;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Todas las reasignaciones de constantes producen error porque los valores previamente establecidos no pueden ser modificados.
