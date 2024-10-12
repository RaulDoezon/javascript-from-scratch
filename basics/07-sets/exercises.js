// 1. Crea un set que almacene cinco libros
let books = new Set(["Fundamentos de Programación", "Eloquent JavaScript", "Git y GitHub desde cero", "Aprendiendo JavaScript", "The Linux Command Line"]);
console.log(books);

// 2. Añade dos más. Uno de ellos repetido
books.add("Ultimate Python");
books.add("Git y GitHub desde cero");
console.log(books);

// 3. Elimina uno concreto a tu elección
books.delete("Eloquent JavaScript");
console.log(books);
