// Object Literal
/* const laptop = {
  price: 19.99,
  id: 1234,
  name: 'lenovo',
  image: 'https://picsum.photos/400/200',
  addLikes: function () {
    console.log('Add a like to the product');
  }
}


console.log(laptop);
laptop.addLikes() */

// Array di oggetti

/* const products = [{
    price: 19.99,
    id: 1234,
    name: 'lenovo',
    image: 'https://picsum.photos/400/200',
    addLikes: function () {
      console.log('Add a like to the product');
    }
  },
  {
    price: 19.99,
    id: 1234,
    name: 'lenovo',
    image: 'https://picsum.photos/400/200',
    addLikes: function () {
      console.log('Add a like to the product');
    }
  },
  {
    price: 19.99,
    id: 1234,
    name: 'lenovo',
    image: 'https://picsum.photos/400/200',
    addLikes: function () {
      console.log('Add a like to the product');
    }
  }, {
    price: 19.99,
    id: 1234,
    name: 'lenovo',
    image: 'https://picsum.photos/400/200',
    addLikes: function () {
      console.log('Add a like to the product');
    }
  }
] */

// OOP - Programmazione ad oggetti 

//const date = new Date() // Date é una classe (modello) unaa volta istnziata con la parola chiave new, ci restituisce un oggetto.
//console.log(date); 
// - class delcaration
// - class expression


// Class Declaration (not hoisted)
// NO - Non richiamabile prima della dichiarazione
class NomeDellaClasse {
  // your code here
}
// OK -  Richiamabile dopo la dichiarazione

// Class Expression
// NO - Non richiamabile prima della dichiarazione
const NomeClasse = class {
  // your code here
}
// OK -  Richiamabile dopo la dichiarazione


// Definiamo la classe Product

/**
 * Product Class
 * @license MIT
 * @copyright - 2022 Fabio Pacifici
 * @author Fabio Pacifici
 */
class Product {
  // your code here
  //name = 'Lenovo Laptop'

  /**
   * Class Constructor
   * @param {string} name The product name
   * @param {number} price The prodcut price
   * @param {number} id The product id
   * @param {string} image The product image
   */
  constructor(name, price, id, image, likes) {
    this.name = name
    this.price = price
    this.id = id
    this.image = image
    this.likes = likes
  }

  addLikes() {
    this.likes += 1
  }
  /* getLikes() {
    return this.likes
  } */

}

const laptop = new Product('Lenovo Laptop', 599.99, 1, 'https://picsum.photos/400/200', 90)
const monitor = new Product('Aoc Monitor', 299.99, 2, 'https://picsum.photos/400/200', 88)

console.log(laptop, monitor);

// Accedere alle proprietá dell'oggetto
console.log(laptop.name); // Lenovo Laptop
laptop.addLikes()
laptop.addLikes()

console.log(laptop.likes);
/* laptop.color = 'silver'
console.log(laptop); */


// Array di oggetti 


/* const products = [
  laptop,
  monitor,
] */

const products = [
  new Product('Lenovo Laptop', 599.99, 1, 'https://picsum.photos/400/200', 90),
  new Product('Aoc Monitor', 299.99, 2, 'https://picsum.photos/400/200', 88),
  new Product('Samsung ssd', 99.99, 3, 'https://picsum.photos/400/200', 77),
  new Product('Samsung mobile', 299.99, 4, 'https://picsum.photos/400/200', 47),
  new Product('Samsung tv', 599.99, 5, 'https://picsum.photos/400/200', 67),
]

console.log(products);


/*********************
 * Moduli 
 *****************/
// export (esporto una o piú funzionalitá da un file)
// import (importo le funzionalitá esportate in un altro file)


// Esports
// - named exports
// - default exports


//named exports  (da mettere mano mano)
/* export let age, name, lastname;
export const admin = 'Fabio',
  users = []
export function calcAge() {

} */

// Esporto una lista di funzionalitá (da mettere alla fine del file)
let age, admin;

function calcAge() {

}

/* export {
  age,
  calcAge,
  admin
} */


// Esportare e rinominare gli exports con degli alias
export {
  age as userAge, calcAge as ageCalculation
}
// import {userAge, ageCalculation } from ''



// Default Exports

export {
  Product as
  default
}

// oppure 

export default function calcAge() {
  // your code here
}

// oppure 
export default class Person {

}

// Importare un modulo dentro un altro file js

import {
  qualcosa
} from 'percorso/del/file/da/importare'
