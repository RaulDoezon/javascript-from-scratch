// +++++++++ IF, ELSE IF, ELSE +++++++++

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Raúl";

if (myName === "Raúl") {
  console.log(`Me llamo ${myName}`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let username = "Doezon";
let password = "espiripitiflautica";

if (username === "Doezon" && password === "espiripitiflautica") {
  console.log("El usuario y la contraseña coinciden.");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 19;

if (number > 0) {
  console.log(`El número ${number} es positivo.`);
} else if (number < 0) {
  console.log(`El número ${number} es negativo.`);
} else {
  console.log(`El número ${number} es cero.`);
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let ageToBeOlder = 18;
let age = 16;

if (age >= ageToBeOlder) {
  console.log(`Tienes ${age} años. Puedes votar.`);
} else {
  console.log(`No puedes votar. Te faltan ${ageToBeOlder - age} años.`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let stageOfThePerson = age >= ageToBeOlder ? "Adulto" : "Menor";
console.log(stageOfThePerson);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Agosto";

if (mes === "Febrero" || mes === "Marzo" || mes === "Abril") {
  console.log(`Estamos en el mes de ${mes} y es Primavera.`);
} else if (mes === "Mayo" || mes === "Junio" || mes === "Julio") {
  console.log(`Estamos en el mes de ${mes} y es Verano.`);
} else if (mes === "Agosto" || mes === "Septiembre" || mes === "Octubre") {
  console.log(`Estamos en el mes de ${mes} y es Otoño.`);
} else if (mes === "Noviembre" || mes === "Diciembre" || mes === "Enero") {
  console.log(`Estamos en el mes de ${mes} y es Invierno.`);
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes === "Enero") {
  console.log(`${mes} tiene 31 días.`);
} else if (mes === "Febrero") {
  console.log(`${mes} tiene 28 o 29 días (dependiendo si es año bisiesto o no).`);
} else if (mes === "Marzo") {
  console.log(`${mes} tiene 31 días.`);
} else if (mes === "Abril") {
  console.log(`${mes} tiene 30 días.`);
} else if (mes === "Mayo") {
  console.log(`${mes} tiene 31 días.`);
} else if (mes === "Junio") {
  console.log(`${mes} tiene 30 días.`);
} else if (mes === "Julio") {
  console.log(`${mes} tiene 31 días.`);
} else if (mes === "Agosto") {
  console.log(`${mes} tiene 31 días.`);
} else if (mes === "Septiembre") {
  console.log(`${mes} tiene 30 días.`);
} else if (mes === "Octubre") {
  console.log(`${mes} tiene 31 días.`);
} else if (mes === "Noviembre") {
  console.log(`${mes} tiene 30 días.`);
} else if (mes === "Diciembre") {
  console.log(`${mes} tiene 31 días.`);
}

// +++++++++ SWITCH +++++++++

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "Français";

switch(language) {
  case "Español":
    console.log("¡Hola!");
    break;

  case "English":
    console.log("¡Hello!");
    break;

  case "Français":
    console.log("¡Bonjour!");
    break;

  default:
    console.log("Idioma no disponible.");
    break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(true) {
  case mes === "Febrero" || mes === "Marzo" || mes === "Abril":
    console.log(`Estamos en el mes de ${mes} y es Primavera.`);
    break;

  case mes === "Mayo" || mes === "Junio" || mes === "Julio":
    console.log(`Estamos en el mes de ${mes} y es Verano.`);
    break;

  case mes === "Agosto" || mes === "Septiembre" || mes === "Octubre":
    console.log(`Estamos en el mes de ${mes} y es Otoño.`);
    break;

  case mes === "Noviembre" || mes === "Diciembre" || mes === "Enero":
    console.log(`Estamos en el mes de ${mes} y es Invierno.`);
    break;

  default:
    console.log("El mes debe definirse.");
    break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(true) {
  case mes === "Enero":
    console.log(`${mes} tiene 31 días.`);
    break;

  case mes === "Febrero":
    console.log(`${mes} tiene 28 o 29 días (dependiendo si es año bisiesto o no).`);
    break;

  case mes === "Marzo":
    console.log(`${mes} tiene 31 días.`);
    break;

  case mes === "Abril":
    console.log(`${mes} tiene 30 días.`);
    break;

  case mes === "Mayo":
    console.log(`${mes} tiene 31 días.`);
    break;

  case mes === "Junio":
    console.log(`${mes} tiene 30 días.`);
    break;

  case mes === "Julio":
    console.log(`${mes} tiene 31 días.`);
    break;

  case mes === "Agosto":
    console.log(`${mes} tiene 31 días.`);
    break;

  case mes === "Septiembre":
    console.log(`${mes} tiene 30 días.`);
    break;

  case mes === "Octubre":
    console.log(`${mes} tiene 31 días.`);
    break;

  case mes === "Noviembre":
    console.log(`${mes} tiene 30 días.`);
    break;

  case mes === "Diciembre":
    console.log(`${mes} tiene 31 días.`);
    break;

  default:
    console.log("Ingresa un mes válido.");
    break;
}
