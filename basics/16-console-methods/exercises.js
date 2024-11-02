// 1. Crea un función que utilice error correctamente
const consoleError = (message) => {
  if (message === undefined) {
    console.error('No se definió ningún mensaje.');
  } else {
    console.log(message);
  }
}

consoleError();

// 2. Crea una función que utilice warn correctamente
const consoleWarn = (number) => {
  if (isNaN(number)) {
    console.warn(`${number} no es un número`);
  } else {
    console.log(`Tengo ${number} años.`);
  }
}

consoleWarn('Treinta y dos');

// 3. Crea una función que utilice info correctamente
const consoleInfo = (data) => {
  console.info(`El tipo de dato de ${data} es: ${typeof data}`);
}

consoleInfo(19);

// 4. Utiliza table
const basicInformation = {
  firstName: 'Raúl',
  lastName: 'Pérez',
  age: 32,
};

console.table(basicInformation);

// 5. Utiliza group
console.group('Información:');
console.log(`Nombre: ${basicInformation.firstName}`);
console.log(`Apellido paterno: ${basicInformation.lastName}`);
console.log(`Edad: ${basicInformation.age}`);
console.groupEnd();

// 6. Utiliza time
console.time();

for (let i = 0; i < 100000; i++) {
  
}

console.timeEnd();

// 7. Valida con assert si un número es positivo
console.assert(-1 > 0, 'El número no es positivo.');

// 8. Utiliza count
console.count("Número");
console.count("Número");
console.count("Número");

// 9. Utiliza trace
console.trace(basicInformation)

// 10. Utiliza clear
alert('Al cerrar este mensaje, se limpiará la terminal.');

console.clear();
