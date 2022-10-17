/* 
Palidroma
Chiedere all’ utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

- leggo la parola inserita dall'utente al contrario
  - divido la parola in un'array di caratteri
  - scorro nell'array al contrario
  - salvo i caratteri al contrario un'altra array
  - unisco i caratteri dell'array rovesciata e creo la parola al contrio
- verfico se la parola originale é uguale a quella rovesciata
  - se si, la parola é palindoma
  - altrimenti no

// Strumenti
- ciclo for
- function
- if/else
- +=
- const/let
*/


const word = 'fabo'

/* const charsArray = []
for (let i = 0; i < word.length; i++) {
  const char = word[i];
  console.log(char);
  charsArray.push(char)
} */

//console.log(charsArray);

function split(word_param) {
  const charsArray = []
  for (let i = 0; i < word_param.length; i++) {
    const char = word_param[i];
    //console.log(char);
    charsArray.push(char)
  }
  //console.log(charsArray);
  return charsArray
}

const splitted_word = split(word)
//console.log(splitted_word);


/* 
- scorro nell 'array al contrario -
  salvo i caratteri al contrario un 'altra array
*/
/* const reversed_word_array = []
for (let i = splitted_word.length - 1; i >= 0; i--) {
  const char = splitted_word[i];
  console.log(char);
  reversed_word_array.push(char)
}

console.log(reversed_word_array) */


function reverse(word) {
  const reversed_word_array = []
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i];
    //console.log(char);
    reversed_word_array.push(char)
  }

  //console.log(reversed_word_array)
  return reversed_word_array
}

const reversed_array = reverse(splitted_word)
//console.log(reversed_array);

/* 
unisco i caratteri dell 'array rovesciata e creo la parola al contrio

*/
/* 
let reversed_word = ''
for (let i = 0; i < reversed_array.length; i++) {
  const char = reversed_array[i];
  reversed_word += char
} */

//console.log(reversed_word);


function join(arr) {
  let new_word = ''
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    new_word += char
  }
  return new_word
}
const reversed_word = join(reversed_array)
//console.log(reversed_word);


/* verfico se la parola originale é uguale a quella rovesciata
  - se si, la parola é palindoma
  - altrimenti no
*/

console.log(word, reversed_word);

//console.log(word === reversed_word);
/* if (word === reversed_word) {
  console.log('Palindromo');
} else {
  console.log('Not a Palindrom');
}
 */
/* function is_palindrom(word) {
  const splitted_word = split(word)
  const reversed_word_array = reverse(splitted_word)
  const new_word = join(reversed_word_array)

  if (word === new_word) {
    return true
  }
  return false
}



if (is_palindrom(word)) {
  console.log('É un palindromo');
} else {
  console.log('Not a palindrom');
} */


/**
 * ## Rovescia una parola
 * Prende una parola e la rovescia
 * @param {string} word 
 * 
 */
function reverseWord(word) {

  //const word_arr = word.split('')
  //const rev_arr = word_arr.reverse()
  //const new_word = rev_arr.join('')
  //console.log(new_word);
  return word.split('').reverse().join('')
}

const rev_word = reverseWord(word);
//console.log(word === rev_word);

if (word === reverseWord(word)) {
  console.log('E palindomo');
} else {
  console.log('Non palindomo');
}

/* 
Pari e Dispari
L’ utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione) Dichiariamo chi ha vinto.

// Strumenti
- prompt
- const/let
- Math.foor/Math.random
- functions
- if/else

*/


// L’ utente sceglie pari o dispari e inserisce un numero da 1 a 5
const user_choice = 'dispari' // prompt('scegli pari o dispari [pari/dispari]')
const user_number = 5 // Number(prompt('Inserisci un numero tra 1 e 5))
const pc_number = generateRandomNumber(1, 5)
console.log(user_choice, user_number, pc_number);



// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione) 

const total = sum(user_number, pc_number)
console.log(total);

if (is_even(total) === user_choice) {
  console.log('Vince il player');
} else {
  console.log('Vice il pc');
}


//Dichiariamo chi ha vinto.



/* Functions */

// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum() {
  return first_numb + second_numb
}


function is_even(numb) {
  if (numb % 2 === 0) {
    return 'pari'
  }
  return 'dispari'
}
