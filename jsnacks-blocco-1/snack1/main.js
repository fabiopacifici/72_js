/* L’ utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */



// L’ utente inserisce due numeri in successione, con due prompt
const first_number = Number(prompt('Type a number'))
const second_number = Number(prompt('Type another number'))


// Il software stampa il maggiore
if (first_number > second_number) {
  console.log('Il primo numero é il piú grande', first_number);
} else if (second_number > first_number) {
  console.log('Il secondo numero é il piú grande', second_number);
} else {
  console.log('I due numeri sono uguali');
}