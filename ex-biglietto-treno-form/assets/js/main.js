/* 
Scrivere un programma che chieda all’ utente:

Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km(0.21€ al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone(non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale(o output) sarà anch’ essa da scrivere in console.
*/

// Seleziono elementi della Dom
const fullNameEl = document.getElementById('name');
const kmEl = document.getElementById('km');
const ageEl = document.getElementById('ageGroup');
const formEl = document.querySelector('form')
//const generateEl = document.querySelector('.generate');
//const cancelEl = document.querySelector('.cancel');


// aggiungo un even listener al pulsante generate
formEl.addEventListener('submit', function (e) {
  // Cos'é e??
  console.log(e);
  e.preventDefault();
  //console.log('Ho cliccato su generate');

  // recupero i valori degli input
  const fullName = fullNameEl.value;
  // 1. chiedere all'utente il numero di chilometri che vuole percorrere
  const km = Number(kmEl.value);
  // 2. chiedere all'utente l 'età del passeggero
  const ageGroup = ageEl.value;

  //console.log(fullName, km, ageGroup);

  // recupero il programma dall'ex precedente e lo adatto 
  const pricePerKm = 0.21;
  let discount, ticketPrice, discountType;

  // 3. Sulla base di queste informazioni calcolare il prezzo totale del viaggio, secondo queste regole:
  // 3.1 il prezzo del biglietto è definito in base ai km(0.21€ al km)
  ticketPrice = km * pricePerKm;
  console.log(ticketPrice);

  // 3.2 va applicato uno sconto del 20 % per i minorenni
  if (ageGroup == 'minore') {
    // Applica sconto del 20%
    discount = 0.2
    discountType = 'Sconto Minorenne'
  }
  // 3.3 va applicato uno sconto del 40 % per gli over 65.
  else if (ageGroup == 'over65') {
    // applica sconto del 40%
    discount = 0.4
    discountType = 'Sconto Over65'

  } else {
    // no discount
    discount = 0
    discountType = 'Prezzo Pieno'

  }
  const discountAmount = ticketPrice * discount;
  ticketPrice = (ticketPrice - discountAmount).toFixed('2')


  // stampo in console in nome dell'utente
  console.log(fullName);
  // stampo il tipo di offerta (sconto minorenne, sconto over 65, prezzo pieno)
  console.log(discountType);
  // genero e stampo un numero casuale tra 1 e 10 per le carrozze
  const wagonNumber = Math.ceil(Math.random() * 10)
  console.log(wagonNumber);
  // genero e stampo un numero casuale compreso tra 90000 e 99000 per il codice cp
  const cpNumber = Math.ceil(Math.random() * 99000)
  console.log(cpNumber);
  // stampo il costo finale del biglietto
  console.log(ticketPrice);


  // Stampo a schermo i dati che ho recuperato
  // Seleziono la sezione della dom
  const ticketSectionEl = document.querySelector('.ticket_details')

  //console.log(ticketSectionEl.classList);
  ticketSectionEl.classList.toggle('d-none')
  // inserisco l'html con i valori presi sopra
  // Opzione 1
  document.querySelector('.full_name > h3').innerHTML = fullName;

  document.querySelector('.offer > p').innerHTML = discountType;
  document.querySelector('.wagon > p').innerHTML = wagonNumber;
  document.querySelector('.cp_code > p').innerHTML = cpNumber;
  document.querySelector('.price > p').innerHTML = ticketPrice;

  /* Opzione 2 con insertAdjacetHTML */
  const cardMarkup = `
          <div class="card">
          <div class="card-header">
            Dettaglio Passeggeri
          </div>

          <div class="card-body d-flex">
            <div class="full_name pe-5">
              <h4 class="text-muted">Nome Passeggero</h4>
              <h3>${fullName}</h3>
            </div>
            <div class="ticket d-flex justify-content-between w-100">
              <div class="offer">
                <h3>Offerta</h3>
                <p>${discountType}</p>
              </div>
              <div class="wagon">
                <h3>Carrozza</h3>
                <p>${wagonNumber}</p>
              </div>
              <div class="cp_code">
                <h3>Codice CP</h3>
                <p>${cpNumber}</p>
              </div>
              <div class="price">
                <h3>Costo Biglietto</h3>
                <p>${ticketPrice}</p>
              </div>
            </div>
          </div>
        </div>`
  //ticketSectionEl.insertAdjacentHTML('beforeend', cardMarkup)



})




// aggiungo un even listener al pulsante cancel
formEl.addEventListener('reset', function (e) {
  // Cos'é e??

  console.log('Ho cliccato su Cancel');
  // recupero i valori degli input
  fullNameEl.value = '';
  // 1. chiedere all'utente il numero di chilometri che vuole percorrere
  kmEl.value = ''
  // 2. chiedere all'utente l 'età del passeggero
  ageEl.value = 'minore';



  // Pulisco il markup

  // Seleziono la sezione della dom
  const ticketSectionEl = document.querySelector('.ticket_details')

  //console.log(ticketSectionEl.classList);
  ticketSectionEl.classList.add('d-none')

  document.querySelector('.full_name > h3').innerHTML = '';

  document.querySelector('.offer > p').innerHTML = '';
  document.querySelector('.wagon > p').innerHTML = '';
  document.querySelector('.cp_code > p').innerHTML = '';
  document.querySelector('.price > p').innerHTML = '';

})



/* 
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’ utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il riepilogo dei dati e l 'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/