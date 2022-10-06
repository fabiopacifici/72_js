/* Date in Javascript 
- utilizzo la parola chiave 'new' per creare un nuovo oggetto di tipo Date
*/
/*
const now = new Date();
console.log();
console.log(now.getFullYear());


const current_year = now.getFullYear();
console.log(current_year);

const user_age = Number(prompt('Quanti anni hai?'));

document.getElementById('age').innerHTML = `Ciao sei nato nel ${current_year - user_age}`;
*/
/* Math e random */


console.log(Math); // Restituisce l'intera struttura dell'oggetto Math.


console.log(Math.random()); // numero casuale tra 0 e 1 escluso
console.log(Math.random() * 10); // numero casuale tra 0 e 1 escluso
console.log(Math.floor(Math.random() * 10)); // Numero  random tra 1 e 9
console.log(Math.ceil(Math.random() * 10)); // Numero  random tra 1 e 9



let validation = true;
const wordA = "Word A";
let wordB = "Word B";

if (validation === true) {
  let wordC = "Word C";
  console.log(wordB); // Word B
  let wordB = "Word Custom B";
  console.log(wordA); // Word A
  console.log(wordB); // Word Custom B
  console.log(wordC); // Word C
}

console.log(wordA); // Word A
console.log(wordB); // Word B
console.log(wordC); // ReferenceError: wordC is not defined