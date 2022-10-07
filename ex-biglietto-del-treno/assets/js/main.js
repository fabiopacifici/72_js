/* 
Il programma dovrà chiedere all 'utente:
il numero di chilometri che vuole percorrere
e l 'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  il prezzo del biglietto è definito in base ai km(0.21€ al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L 'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/
const priceEl = document.getElementById('price')
const pricePerKm = 0.21;
let discount, ticketPrice;
// 1. chiedere all'utente il numero di chilometri che vuole percorrere
const km = Number(prompt('Quanti km vuoi percorrere?'));
// 2. chiedere all'utente l 'età del passeggero
const passengerAge = Number(prompt('Quanti anni ha il passeggero?'));

//console.log(km, passengerAge);
// 3. Sulla base di queste informazioni calcolare il prezzo totale del viaggio, secondo queste regole:
// 3.1 il prezzo del biglietto è definito in base ai km(0.21€ al km)

ticketPrice = km * pricePerKm;

//console.log(ticketPrice);

// 3.2 va applicato uno sconto del 20 % per i minorenni
if (passengerAge < 18) {
  // Applica sconto del 20%
  discount = 0.2
}
// 3.3 va applicato uno sconto del 40 % per gli over 65.
else if (passengerAge > 65) {
  // applica sconto del 40%
  discount = 0.4
} else {
  // no discount
  discount = 0
}
const discountAmount = ticketPrice * discount;
ticketPrice = ticketPrice - discountAmount

// Controllare se il valore di ticket price é NaN e se si mostrare una allerta
if (isNaN(ticketPrice)) {
  // mostriamo un alerta
  alert('Non hai inserito correttamente i km da percorrere! Devi inserire un valore numerico.')
  // mostriamo a schermo un messagio al posto del prezzo
  priceEl.innerHTML = `Ops! c'é stato un problema! Riprova.`

} else {
  priceEl.innerHTML = `€ ${ticketPrice.toFixed(2)}`
}
