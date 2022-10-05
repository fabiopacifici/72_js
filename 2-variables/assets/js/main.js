console.log(bicycle);
/************ 
  Variables
 ***********/

/* variabili definite con const */

// Inizializzazione della variabile con const
const username = 'fabio'

// Riassegnazione valore alla variabile con const non permesso.
//username = 'Mario' 😱 Type Error!
// lettura del contenuto con log
console.log(username);

//const color; // Uncaught SyntaxError: Missing initializer in const declaration (at main.js:13:7)


/* variabili definite con let */
// Inizializzazione della variabile con let
let movie = 'Matrix';
console.log(movie);

// Riassegnazione della variabile con let é consentito
movie = 'Avatar';
console.log(movie); // Avatar

// Dichiarazione soltanto delle variabili con let
let tv_show, today
// Assegnazione del valore alla variabile
tv_show = 'Rick and Morty'
console.log(tv_show);

today = 'Mercoledi'
console.log(today);



// Dichiarazione e preutilizzo

//console.log(book); //Uncaught ReferenceError: Cannot access 'book' before initialization
let book;
console.log(book);
book = 'Micro Python'
console.log(book);

/* variabili definite con var */

console.log(bicycle);
var bicycle
bicycle = 'Pendleton'
console.log(bicycle);

/* Nomenclatura Variabili 

- solo lettere e trattini bassi _ e numeri
- mai usare un numero all'inzio
- mai usare le parole chiave di JS 

*/


//let getElementById // NO!
//let 123user; // NO
//let customer-age // NO Il - é un operatore di sottrazione 
let customer_age // SI
let customerAge // SI
let under18 // SI
let under_18 // SI
let person // SI 
let PERSON // SI - differente variabile da quella sopra (case sensitive)

// NON FARLO
/* let variabile_1
let variabile_2
let variabile_3
let variabile_4 */


// dichiarazione variabile
let miaStringa; // <-- Leggo ed eseguo

// assegnazione // <-- Leggo ed eseguo
miaStringa = 'ciao'; // <-- Leggo ed eseguo
// utilizzo/richiamo // <-- Leggo ed eseguo
//alert(miaStringa); // <-- Leggo ed eseguo

// assegnazione // <-- Leggo ed eseguo
miaStringa = 'arrivederci'; // <-- Leggo ed eseguo
// utilizzo/richiamo // <-- Leggo ed eseguo
//alert(miaStringa); // <-- Leggo ed eseguo