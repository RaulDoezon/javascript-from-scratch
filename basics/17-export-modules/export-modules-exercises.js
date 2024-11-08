// 1. Exporta una función
export function greeting(name) {
  console.log(`Hello, my name is ${name}`);
}

// 2. Exporta una constante
export const birthdate = '03/03/1800';

// 3. Exporta una clase
export class Samus {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  basicInformation() {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  }
}

// 4. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function age(age) {
  console.log(`I'm ${age} years old.`);
}

// Solamente puede haber una exportación por defecto por archivo. Las variables no son admitidas.
// export default class Height {
//   constructor(height) {
//     this.height = height;
//   }

//   show() {
//     console.log(`I'm ${this.height}m tall.`);
//   }
// }
