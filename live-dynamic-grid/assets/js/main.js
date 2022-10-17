/* 
Creare in JavaScript una griglia 8 x 8.
Ogni cella della griglia contiene un numero casuale da 1 a 64. I numeri presenti nelle celle ** * non devono essere ripetuti ** * (ovvero la griglia contiene ** tutti ** i numeri da 1 a 64).

Ogni volta che clicco su un quadrato questo si colora di verde se il numero contenuto e pari e in rosso se dispari
(si decolora al secondo click)
*/


/*  
gererare la griglia con 64 celle
  - seleziono un elemento della dom dove mettere le celle
  - genero il markup della singola cella
  - ciclo x numero di volte per generare la griglia
*/
const containerEl = document.querySelector('.container')


const max_cells_number = 64;

/* for (let i = 0; i < cells_number; i++) {
  const cellElement = generateMakup();
  //console.log(cellElement);
  containerEl.insertAdjacentHTML('beforeend', cellElement)

} */

/* const numb_array = []
while (numb_array.length !== 64) {
  const randomNumber = generateRandomNumber(1, 64)
  if (!numb_array.includes(randomNumber)) {
    numb_array.push(randomNumber)
  }
}

console.log(numb_array); */



generateField(1, max_cells_number, containerEl)

//const cellsNumbers = generateCellsNumbers(1, max_cells_number)
//console.log(cellsNumbers);


function generateCellsNumbers(min, max) {
  const numb_array = []
  while (numb_array.length !== max) {
    const randomNumber = generateRandomNumber(min, max)
    if (!numb_array.includes(randomNumber)) {
      numb_array.push(randomNumber)
    }
  }

  return numb_array
}


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateMakup(numb) {
  const cellEl = document.createElement('div') // nodo della dom (quindi un oggetto) quindi posso chiamre metodi e props
  //const cellEl = `<div class="cell">${numb}</div>` // restituisce una stringa e quindi NON posso chiamare metod e props
  cellEl.className = "cell"
  cellEl.innerText = numb
  return cellEl // returns object
}

function generateField(min, max, domEl) {
  const cells_numbers = generateCellsNumbers(min, max);
  for (let i = 0; i < max; i++) {
    const thisNumber = cells_numbers[i]
    const cellElement = generateMakup(thisNumber);
    // iserisci il markup nell'container
    domEl.insertAdjacentElement('beforeend', cellElement)

    //  aggiungere un eventlisterer su ciascuna cella
    cellElement.addEventListener('click', function () {
      if (is_even(thisNumber)) {
        this.classList.toggle('active')
      } else {
        this.classList.toggle('active-red')
      }
    })

  }
}

/* 

Ogni volta che clicco su un quadrato questo si colora di verde 
se il numero contenuto e pari e in rosso se dispari
*/


// aggiungere un eventlisterer su ciascuna cella


// funzione per verificare se numero é pari o dispari

function is_even(numb) {
  if (numb % 2 === 0) {
    return true
  }
  return false
}