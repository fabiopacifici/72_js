// Stesso codice o simile ripetuto!
console.log(1 * 2);
console.log(2 * 2);
console.log(3 * 2);
console.log(4 * 2);
console.log(5 * 2);
console.log(6 * 2);
console.log(7 * 2);
console.log(8 * 2);
console.log(9 * 2);
console.log(10 * 2);

console.log(1 * 2, 2 * 2, 3 * 3);


/* Ciclo For Syntax 

- parola chiave 'for'
- parentesi tonde
  - contatore
  - condizione
  - incremento/decremento

for(contatore, condizione, incremento/descrement ) {
  // blocco di codice da ripetere
}

*/



for (let i = 1; i < 101; i++) {
  console.log(i);
}
console.log('Sono fuori dal loop');
//iterazione 1: i = 1 | 1 < 101 ? true | incremento i = 2 | eseguo blocco di codice

//iterazione 2: i = 2 | 2 < 101 ? true | incremento i = 3 | eseguo blocco di codice

//iterazione 3: i = 3 | 3 < 101 ? true | incremento i = 4 | eseguo blocco di codice

// ...

// iterazione 100: i = 100 | 100 < 101 ? true | incremento i = 101 | eseguo blocco di codice

// iterazione 101: i = 101 | 101 < 101 ? false |  NON eseguo blocco di codice ed ESCO dal loop



/* Crazione elementi della dom con createElement */

// selezione elemento della DOM 
const ul = document.querySelector('ul.list');
// Creo nodo li
const li = document.createElement('li');
console.log(li);
// appendo all'li del testo 
li.append('mio list item')
// appendo li al ul
ul.append(li)



/* Traccia x 

// Strumenti che useró
- let/const
- Math.random() - Math.ceil()
- for loop
- string.toUpperCase
- if-else
- element.insertAdjacentHTML()

// Step della traccia

*/