/* 
Scrivi un programma che stampi in console i numeri da 1 a 100,
  ma che per i multipli di 3 stampi“ Fizz” al posto del numero
e per i multipli di 5 stampi“ Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi“ FizzBuzz”.



BONUS 1:
  Crea un container nel DOM, aggiungendo(attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.


BONUS 2:
  Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/

/* 
Strumenti:
- for loop
- console.log()
- %
- if/else if/else

*/


// Scrivi un programma che stampi in console i numeri da 1 a 100
/* for (let i = 1; i <= 100; i++) {
  console.log(i);
  //  se i é divisibile per 15 stampi“ FizzBuzz”.
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  }
  // se i é divisibile per 3 stampi“ Fizz” 
  else if (i % 3 === 0) {
    console.log('Fizz');
  }
  // se i é divisibilile per 5 stampi“ Buzz”
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  // altrimenti stampo il numero  
  else {
    console.log(i);
  }

} */

const containerEl = document.querySelector('div.container')

for (let i = 1; i <= 100; i++) {
  const boxEl = document.createElement('div')
  boxEl.classList.add('box')
  //console.log(boxEl);

  // oppure i % 15 === 0
  if (i % 3 === 0 && i % 5 === 0) {
    //console.log('FizzBuzz');
    boxEl.append('FizzBuzz')
    boxEl.style.backgroundColor = 'palevioletred'
  } else if (i % 3 === 0) {
    //console.log('Fizz');
    boxEl.append('Fizz')
    boxEl.style.backgroundColor = 'yellow'

  } else if (i % 5 === 0) {
    //console.log('Buzz');
    boxEl.append('Buzz')
    boxEl.style.backgroundColor = 'palegreen'

  } else {
    //console.log(i);
    boxEl.append(i)
  }
  containerEl.append(boxEl)
}