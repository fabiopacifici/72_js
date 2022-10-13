const movies = [
  'Matrix',
  'Avatar',
  'Imitation Game',
  'Il signore degli anelli'
];
console.log('########### FOR ###########');
// Stampo gli elementi di un array con ciclo for
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  console.log(movie);
}


console.log('############# While ##################');
/* Syntax While loop 
// contatore
while (condition) {

  // istruzione per terminare il ciclo
}

*/
//stampo gli elementi dell'array con ciclo while 
let i = 10;
while (i < movies.length) {


  const movie = movies[i];
  console.log(movie);

  i++

}

console.log('Fuori dal loop while');

/* Ciclo do While syntax
do {
  

} while (condizione)
*/
console.log('############ DO While ##############');

let j = 0;
do {

  const movie = movies[j];
  console.log(movie);
  j++;
} while (j < movies.length)



// Live Shopping List
const shoppingList = [
  'Compra pane',
  'Latte di marndorle',
  'Insalata',
  'Burger di soia'
];



const shoppingListElement = document.querySelector('.shopping-list')
console.log(shoppingListElement);


for (let i = 0; i < shoppingList.length; i++) {
  const item = shoppingList[i];

  const liElement = `<li>${item}</li>`
  shoppingListElement.insertAdjacentHTML('beforeend', liElement)

}



/* 

// contatore

while verifica subito la condizione se é false non esegue il codice

while (condition) {

  // istruzione per terminare il ciclo
}



do-while esegue il codice del blocco DO e solo dopo verifica la condizione

// contatore
do {

// istruzione per terminare il ciclo
} while (condizione)



*/