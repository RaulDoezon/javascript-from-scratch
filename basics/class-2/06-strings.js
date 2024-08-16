// +++++++++ CADENAS DE TEXTO (STRINGS) +++++++++

// Concatenación
let myName = "Raúl";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[11]);

// Métodos comunes
console.log(greeting.toUpperCase()); // Mayúsculas
console.log(greeting.toLowerCase()); // Minúsculas
console.log(greeting.indexOf("Hola")); // Índice
console.log(greeting.indexOf("Raúl"));
console.log(greeting.indexOf("Armando"));
console.log(greeting.includes("Hola")); // Incluye
console.log(greeting.includes("Raúl"));
console.log(greeting.includes("Armando"));
console.log(greeting.slice(0, 10)); // Sección
console.log(greeting.replace("Raúl", "Armando")); // Reemplazo

// Template literals (plantillas literales)
let message = `Hola, estoy
aprendiendo
JavaScript`; // Strings en varias líneas
console.log(message);

// Interpolación de valores
let email = "raul@mail.com";
console.log(`Hola, ${myName}! Tu email es ${email}.`);
