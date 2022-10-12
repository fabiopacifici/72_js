/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/




const first_word = prompt('Type a number') // fabio
const second_word = prompt('Type another number') // pacifici
console.log(first_word, second_word); // fabio pacifici


if (first_word.length > second_word.length) {
  console.log(second_word, first_word);

} else if (second_word.length > first_word.length) {
  console.log(first_word, second_word);

} else {
  console.log('I due numeri sono uguali');
}