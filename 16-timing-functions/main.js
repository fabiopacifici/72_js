/* alert('ciao')
console.log('ciao 2');

for (let index = 0; index < 100; index++) {
  console.log(index);
}

console.log('ciao 3'); */


// setTimeout

setTimeout(sayHi, 3000) // 3 * 1000 = 3000 milli secondi 

function sayHi() {
  console.log('Async Hi');
} // sono in attesa per 3 secondi

// nell'attesa leggo il log fuori
console.log('Ciao 4');
console.log('Ciao 5');
console.log('Ciao 6');
console.log('Ciao 7');
console.log('Ciao 8');


// set Interval ripete il codice ogni x secondi

const intervalId = setInterval(function () {
  console.log('Ciao Ciao');
}, 3000)

console.log(intervalId);

// interrompo l'intervallo con un clearInterval (subito subito)
clearInterval(intervalId) // questo blocca l'intervallo immediatamente (quindi non lo esegue proprio)