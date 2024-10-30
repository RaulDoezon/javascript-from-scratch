// 1. Captura una excepción utilizando try-catch
try {
  console.log(test);
} catch(error) {
  console.log(`La variable no est{a definida: ${error}`);
}

// 2. Captura una excepción utilizando try-catch y finally
try {
  console.log(15 + number);
} catch(error) {
  console.log(`La suma no pudo efectuarse: ${error}`);
} finally {
  console.log('Termina la ejecución.');
}

// 3. Lanza una excepción genérica
console.log(`La siguiente sentencia produciría un error en consola: throw new Error('Generic exception.');`);
// throw new Error('Generic exception.');

// 4. Crea una excepción personalizada
class customError extends Error {
  constructor(message) {
    super(message);

    this.name = 'Validation error';
  }
}

const launchException = () => {
  throw new customError('Custom error');
}

// 5. Lanza una excepción personalizada
try {
  launchException();
} catch(error) {
  console.log(error);
}

// 6. Lanza varias excepciones según una lógica definida
try {
  launchException();
} catch(error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

// 7. Captura varias excepciones en un mismo try-catch
const samusMessage = (message) => {
  console.log(message);

  if (typeof message === 'object') {
    throw new TypeError('Se definió un objeto en lugar de una cadena de texto');
  }

  if (typeof message === 'number') {
    throw new TypeError('Se definió un número en lugar de una cadena de texto');
  }
}

try {
  samusMessage('The las Metroid is in captivity. The galaxy is at peace...');
  // samusMessage(1);
  // samusMessage([]);
} catch(error) {
  console.log(error);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const myArray = ['1', '2', 'tres', '4'];

class floatError extends Error {
  constructor(message) {
    super(message);
  }
}

console.log(myArray);

try {
  for (let index = 0; index < myArray.length; index++) {
    if (isNaN(myArray[index])) {
      throw new floatError(`El valor ${myArray[index]} no puede convertirse a flotante porque no es un número.`);
    } else {
      myArray[index] = parseFloat(myArray[index]);
    }
  }
} catch(error) {
  console.log(error.message);
}

console.log(myArray);

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
const myObject = {
  firstName: 'Raúl',
  userName: 'RaulDoezon',
};

class UndefinedKeys extends Error {
  constructor(message) {
    super(message);
  }
}

function showObjectValues() {
  if (!myObject.age) {
    throw new UndefinedKeys(`La propiedad "age" no existe.`);
  }
}

try {
  showObjectValues();
} catch(error) {
  console.log(error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
class NotANumber extends Error {
  constructor(message) {
    super(message);
  }
}

function checkError(limit) {
  let enterNumber = prompt('Por favor, ingresa una cifra del sistema de numeración arábigo:');
  let errorCounter = limit;
  let auxiliaryCounter = 0;

  if (errorCounter === 10) {
    throw new NotANumber('No fueron ingresados números');
  }

  if (isNaN(enterNumber)) {
    auxiliaryCounter++;
  }

  return checkError(limit + auxiliaryCounter);
}

try {
  checkError(0);
} catch(error) {
  console.log(error.message);
}
