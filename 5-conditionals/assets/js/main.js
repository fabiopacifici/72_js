/* Syntax if statement  

if(condizione) {

} else {
// L'else é opzionale e non ha bisogno di una condizione!!
}


const userAge = 20;

console.log(userAge <= 20);

if (userAge <= 20) {
  // Se la condizione é falsa non vengo eseguito!!
  alert('User age é minore di 20');
}
console.log('Sono al di fuori del blocco condizionale');
*/

const price = 12.99
console.log(price > 20);

if (price > 20) {
  console.log("Price maggiore di 20");
} else {
  console.log("Price inferiore a 20");
}
console.log('Sono al di fuori del blocco condizionale');

/* Syntax if-elseif-else 

if (condizione) {

} else if (altra condizione) {

} else {
  // L'else é opzionale e non ha bisogno di una condizione!!
}

*/


const x = '14';
if (x === 12) {
  console.log('Sono dentro all IF');
} else if (x == 12) {
  console.log('Sono dentro all else-if');
} else {
  console.log('Sono nell else');
}


/* Operatori relazionali e logici */
const y = 11;
console.log(x > 10);
console.log(x < 10);

console.log(x >= 10);
console.log(x <= 10);

console.log(x == 14);
console.log(x != 14);

console.log(x === 14);
console.log(x !== 14);

console.log(x !== 14 && y == 11);
console.log(x !== 14 || y == 11);


const movie = "The imitation game"

console.log(movie.length); //18

if (movie.length > 10) {
  console.log('It titolo del film é piú di 10 caratteri');
}