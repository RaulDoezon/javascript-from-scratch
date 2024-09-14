// 1. Crea una clase que reciba dos propiedades
class MyClass {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
}

// 2. Añade un método a la clase que utilice las propiedades
class Person {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  greeting() {
    console.log(`Hola, me llamo ${this.firstName} y tengo ${this.age} años.`);
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let person1 = new Person('Raúl', 32);

console.log(person1.firstName);
console.log(person1.age);

person1.greeting();

// 4. Añade un método estático a la primera clase
class MyClass2 {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  static greeting() {
    console.log('Soy un método estático.');
  }
}

// 5. Haz uso del método estático
MyClass2.greeting();

// 6. Crea una clase que haga uso de herencia
class Hobby extends Person {
  message() {
    console.log('Me gusta jugar videojuegos.');
  }
}

let hobby = new Hobby('Armando', 17);

hobby.greeting();
hobby.message();

// 7. Crea una clase que haga uso de getters y setters
class Student {
  constructor(firstName, semester) {
    this.firstName = firstName;
    this.semester = semester;
  }

  get studentData() {
    return this.firstName;
  }

  set studentData(studentName) {
    this.firstName = studentName;
  }
}

let student1 = new Student('Armando', 6);
student1.studentName = 'Raúl';

console.log(student1);
console.log(student1.studentData);

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class BountyHunter {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get name() {
    return this.#firstName;
  }

  set name(name) {
    this.#firstName = name;
  }
}

let bountyHunter = new BountyHunter('Samus', 'Aran');

console.log(bountyHunter);

// 9. Utiliza los get y set y muestra sus valores
bountyHunter.name = "Sylux";

console.log(bountyHunter.name);
console.log(bountyHunter);

// 10. Sobrescribe un método de una clase que utilice herencia
class Phantom extends Person {
  greeting(name) {
    console.log(`Soy un fantasma y... me llamaba ${name}.`);
  }
}

let phantom = new Phantom();
phantom.greeting('Armando');
