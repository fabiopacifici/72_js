// Arrow functions & this

function calcAge() {
  console.log(this); // Window object
}

calcAge()


// This inside an eventlistener

const domElement = document.querySelector('.grid') // typeof domElement
console.log(typeof domElement);
domElement.addEventListener('click', function () {
  // this => dom object Element
  console.log(this);
})


// Arrow Function Syntax
// L'arrow function di base é una funzione anonima va assegnata ad una variabile

/* 
()=>{}
- tonde (sono opzionali se c'é un paramentro, oppure obbligatorie con 0 o piú di 1 parametro)
- =>
- {} (sono opzionioali se il codice che scriviamo nel blocco é su una sola riga, altrimenti sono obbligatorie)
- return keyword (opzionale se non ci sono le graffe, altrimenti obbligatoria)
*/


// ometto le graffe e la parola return ma metto le tonde perche non ci sono parametri
//const calcUserAge = () => new Date().getFullYear - 1980 // su una sola righa

// omesso graffe/return omesso le tonde perché c'é un solo paramentro
//const calcUserAge = yob => new Date().getFullYear - yob // su una riga con un solo parametro

// metto le graffe/return e metto le tonde (volendo sono opzionali, con un solo parametro)
const calcUserAge = (yob) => {
  console.log(this, 'dentro a funzione freccia normale');
  const thisYear = new Date().getFullYear
  const result = thisYear - yob
  return result
}

calcUserAge(1980)

domElement.addEventListener('click', () => {
  console.log(this, 'dentro event listener');
})