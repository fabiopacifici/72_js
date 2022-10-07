/* Verifica il tipo di dato */
console.log(typeof 'Ciao');

/* Legge in contenuto del tag html selezionato */
console.log(document.getElementById('container').innerHTML)

/* Query selector */
const element = document.querySelector('.row > .col-4')


/* Dom methods  */

// class List es
console.log(element.classList)
element.classList.add('fabio2')
element.classList.remove('active')

/* ClassName es */
console.log(element.className);
// Aggiunta classe usando className
element.className = element.className + ' fabio'
element.className += ' fabio'


/* Style */

element.style.backgroundColor = 'red'
element.style.color = 'white'

console.log(element.style.color);


/* Event Listeners 

1. elemento della dom selezionato o con document.getElementById oppure con il querySelector
2. utilizzo il metodo addEventListener()
3. il metodo si aspetta due parametri, il primo é l'evento (es. click), il secondo parametro é un programma che una funzione anonima
4. function(){
  // Codice da eseguire
} 
*/
element.addEventListener('click', function () {
  // Codice da eseguire qui
  console.log('hai cliccato sulla colonna');
})


/* utilizzo di element.value per ottenere il valore di un input */
document.getElementById('fullname').value
// 'wefesafp[osedkf[psd'
document.getElementById('fullname').value = 'Fabio Pacifici'
// 'Fabio Pacifici'

const div = document.querySelector("div.red");
//metodo che già conosciamo
// forma estesa con innerHtML
div.innerHTML = div.innerHTML + '<p>Mio testo</p>';
// forma abbreviata con innerHtML
div.innerHTML += '<p>Mio testo</p>';
//oppure
div.append('Mio testo');
//con questo metodo 
//non possiamo usare tag
div.append('<p>Mio testo</p>'); // il risultato in pagina sarebbe questo <p>Mio testo</p>
