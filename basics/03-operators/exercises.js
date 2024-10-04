// 1. Crea una variable para cada operación aritmética
let addition = 92 + 31;
let substraction = 92 - 31;
let multiplication = 92 * 31;
let division = 92 / 31;
let module = 92 % 31;
let power = 92 ** 31;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let additionWithAssignment = addition += 3;
let substractionWithAssignment = substraction -= 31;
let multiplicationWithAssignment = multiplication *= 2;
let divisionWithAssignment = division /= 2;
let moduleWithAssignment = module %= 2;
let powerWithAssignment = power **= 2;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("+++++++++ Comparaciones verdaderas +++++++++");
console.log(`5 === 5: ${5 === 5}`);
console.log(`92 !== 31: ${92 !== 31}`);
console.log(`92 > 31: ${92 > 31}`);
console.log(`3 < 19: ${3 < 19}`);
console.log(`32 == "32": ${32 == "32"}`);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("\n+++++++++ Comparaciones falsas +++++++++");
console.log(`5 === "5": ${5 === "5"}`);
console.log(`92 < 31: ${92 < 31}`);
console.log(`3 > 31: ${3 > 31}`);
console.log(`19 !== 19: ${19 !== 19}`);
console.log(`92 >= "100": ${92 >= "100"}`);

// 5. Utiliza el operador lógico and
console.log("\n+++++++++ Operador lógico AND +++++++++");
console.log(`10 === 10 && 19 > 3: ${10 === 10 && 19 > 3}`);

// 6. Utiliza el operador lógico or
console.log("\n+++++++++ Operador lógico OR +++++++++");
console.log(`15 === 9 || 7 > 4: ${15 === 9 || 7 > 4}`);

// 7. Combina ambos operadores lógicos
console.log("\n+++++++++ Operadores lógicos AND y OR +++++++++");
console.log(`1 > 0 && 2 === "2" || 92 > 31: ${1 > 0 && 2 === "2" || 92 > 31}`);

// 8. Añade alguna negación
console.log("\n+++++++++ Negación +++++++++");
console.log(`!true: ${!true}`);

// 9. Utiliza el operador ternario
console.log("\n+++++++++ Operador ternario +++++++++");
console.log(`92 > 31: ${92 > 31 ? true : false}`);

// 10. Combina operadores aritméticos, de comparación y lógicos
console.log("\n+++++++++ Operadores aritméticos, de comparación y lógicos +++++++++");
console.log(`45 + 46 === 92 && 31 < 92: ${45 + 46 === 92 && 31 < 92}`);
