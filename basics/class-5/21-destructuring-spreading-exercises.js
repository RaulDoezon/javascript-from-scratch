// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1To5 = [1, 2, 3, 4, 5];
let array6To10 = [6, 7, 8, 9, 10];
let arrayNumbers = [...array1To5, ...array6To10];

console.log(arrayNumbers);

// 7. Usa propagación para crear una copia de un array
let newMyArray = [...myArray];

console.log(newMyArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let characterData1 = {firstName: "Samus", lastName: "Aran"};
let characterData2 = {
  job: {
    organization: "Galactic Federation",
    position: "Bounty Hunter"
  }
};
let character = {...characterData1, ...characterData2}

console.log(character);

// 9. Usa propagación para crear una copia de un objeto
let newMyObject = {...myObject};

console.log(newMyObject);

// 10. Combina desestructuración y propagación
let message = {...myObject, ...character};
let {myName2 = myName, firstName} = message;

console.log(`Me llamo ${myName2} y mi personaje favorito es ${firstName}.`);
