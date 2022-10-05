// Scrivere codice JavaScript

/*
Questo é un commento
su 
piú righe
*/


/* Hello World  */

// Scrivere nel documento con writeln
document.writeln('Hello World')

// Mostrare un allerta con alert()
//alert('Hello World')


// Manipolare il documento html (DOM) usando getElementById con innerHTML
document.getElementById('title').innerHTML = 'Hello Classe 72'


// Console Log
console.log('Hello World')


console.log(document.getElementById('title'))


/* Utilizzo del Prompt per interagire con l'utente */
// Il prompt ci da sempre una stringa e se vogliamo fare opeazioni tra numeri dobbiamo convertirla o con Number o con parseInt()

const userAge = Number(prompt('Quanti anni hai?')) // '42'
//const userAge = parseInt(prompt('Quanti anni hai?')) 

console.log(userAge);

const currentYear = 2022

console.log('Sei nato nel: ', currentYear - userAge);
console.log(currentYear, userAge, 'Linea 41');
