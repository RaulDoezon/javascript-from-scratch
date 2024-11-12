import { greeting, birthdate, Samus } from "./31-export-modules-exercises.js";
import myAge from "./31-export-modules-exercises.js"

// 1. Importa una función
greeting('Raúl');

// 2. Importa una constante
console.log(birthdate);

// 3. Importa una clase
let bountyHunter = new Samus('Samus', 'Aran');
bountyHunter.basicInformation();

// 4. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
myAge(32);
