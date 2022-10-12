/* 
Mail
Chiedi all’ utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’ esito del controllo.


//lista strumenti da usare
- prompt()
- array
- const/let
- if/else
- for loop
- console.log

*/
// utilizzo un prompt per chiedere all’ utente la sua email e salvo tutto in una variabile
//const userEmail = prompt('Inserisci la tua email');
//console.log(userEmail);

const emailAddresses = [
  'user_1@example.com',
  'user_2@example.com',
  'user_3@example.com',
  'admin@example.com',
]

//console.log(emailAddresses);

/* let canAccess = false;

for (let i = 0; i < emailAddresses.length; i++) {
  const thisEmail = emailAddresses[i];
  //console.log(thisEmail, 'Sono qui nel for');

  if (userEmail === thisEmail) {
    canAccess = true;
    //console.log(canAccess, 'Sono qui nell if');

  }

  //console.log(canAccess, 'sono alla fine del ciclo');
} */


//console.log(canAccess);
/* console.log(userEmail);
console.log(emailAddresses); */
// true
/* 
console.log(canAccess);
if (canAccess) {
  console.log('Welcome to the site', userEmail);
} else {
  console.log('Sorry, this site is private');
}
 */

/* 


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

- Math.random()
- Math.ceil()
- const/let
- if/else
- operatore di relazione >
- log

*/

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const player_number = Math.ceil(Math.random() * 6);
const pc_number = Math.ceil(Math.random() * 6);

console.log(player_number, pc_number);

let winner;
let player_counter = 0
let pc_counter = 0

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (player_number > pc_number) {
  winner = 'player';
  player_counter++
} else if (pc_number > player_number) {
  winner = 'pc';
  pc_counter++
} else {
  winner = 'both'
}

console.log('Il vincitore é', winner);
console.log('vittorie PC', pc_counter);
console.log('vittorie Player', player_counter);
