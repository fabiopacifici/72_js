/* 
L 'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l 'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Strumenti
- addEventListener('click')
- querySelector
- function 
- cost/let
- for loop
*/



// L 'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
// - seleziono il pulsante tramite querySelector
const buttonElement = document.querySelector('button')
// - seleziono il contenitore .grid per la griglia
const gridElement = document.querySelector('.grid')
// creo varibile con numero massimo di celle da generare
const grid_level = 100
// calcolo il numero di celle per riga da inserire
const cells_per_row = Math.sqrt(grid_level)
console.log(cells_per_row);

generateGrid(buttonElement, gridElement, grid_level, cells_per_row)
/* 
// - aggiungo eventListener('click') al pulsante
buttonElement.addEventListener('click', function () {
  // - ciclo x numero di volte tante quante il livello scelto
  console.log('Cliccato su generate');


  // Ogni cella ha un numero progressivo, da 1 a 100.
  for (let i = 1; i <= grid_level; i++) {
    // Genero una nuova cella per la griglia
    const cellMarkupElement = generateCellElement(i, cells_per_row, 'div', 'cell')
    //const cellMarkupElement = document.createElement('div')
     cellMarkupElement.className = 'cell'
     cellMarkupElement.innerText = i
     // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
     //cellMarkupElement.style.width = `calc(100% / ${cells_per_row})` 
    gridElement.insertAdjacentElement('beforeend', cellMarkupElement)


    // Quando l 'utente clicca su ogni cella, 
    // - selezione la singola cella
    // - aggiungo un event listener alla cella selezionata
    cellMarkupElement.addEventListener('click', function () {
      // - la cella cliccata si colora di azzurro
      //this.style.backgroundColor = 'blue'
      this.classList.toggle('active')
      // - emetto un messaggio in console con il numero della cella cliccata.
      console.log(this.innerText);

    })

  }

})

*/

/**
 * Generate the grid
 * @param {Element} triggerElement a dom elment where click to generate the grid
 * @param {Element} wrapperElement a dom elmenet where place the cells for the grid
 * @param {number} max the max amount of cells to generate 
 * @param {number} per_row the max amount of cells per row 
 */
function generateGrid(triggerElement, wrapperElement, max, per_row) {


  // - aggiungo eventListener('click') al pulsante
  triggerElement.addEventListener('click', function () {
    // svuoto griglia esistente
    wrapperElement.innerHTML = ''

    // - ciclo x numero di volte tante quante il livello scelto
    console.log('Cliccato su generate');


    // Ogni cella ha un numero progressivo, da 1 a 100.
    for (let i = 1; i <= max; i++) {
      // Genero una nuova cella per la griglia
      const cellMarkupElement = generateCellElement(i, per_row, 'div', 'cell')
      /*  const cellMarkupElement = document.createElement('div')
       cellMarkupElement.className = 'cell'
       cellMarkupElement.innerText = i
       // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
       cellMarkupElement.style.width = `calc(100% / ${cells_per_row})` */
      wrapperElement.insertAdjacentElement('beforeend', cellMarkupElement)


      // Quando l 'utente clicca su ogni cella, 
      // - selezione la singola cella
      // - aggiungo un event listener alla cella selezionata
      cellMarkupElement.addEventListener('click', function () {
        // - la cella cliccata si colora di azzurro
        //this.style.backgroundColor = 'blue'
        this.classList.toggle('active')
        // - emetto un messaggio in console con il numero della cella cliccata.
        console.log(this.innerText);

      })

    }

  })
}



/**
 * ## Genrerate Cell Element
 * Generates a dom element given a tagname and a css class
 * and sets its width
 * @param {number} n un numero intero progressivo
 * @param {number} cells_per_row max cells to generate
 * @param {String} tagName a tag name ie. div
 * @param {String} cssClass a css class name 
 * @returns {Element} returns a dom element
 */
function generateCellElement(n, cells_per_row, tagName, cssClass) {
  const cellMarkupElement = document.createElement(tagName)
  cellMarkupElement.className = cssClass
  cellMarkupElement.innerText = n

  // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
  cellMarkupElement.style.width = `calc(100% / ${cells_per_row})`

  return cellMarkupElement
}



// Devo generare 16 (numeri casuali), le bombe, i numeri non devono essere ripetuti

/* const bombs = []
while (bombs.length !== 16) {

  // genero numero casuale
  const bomb = generateRandomNumber(1, 100)
  // verifico se il numero é stato giá inserito nella lista di bombe
  // se non lo é lo aggiungo altrimenti vado avanti
  if (!bombs.includes(bomb)) {
    // se la condizione é falsa allora eseguo il codice qui dentro
    bombs.push(bomb)
  }
}
 */



const bombs = generateBombs(1, grid_level)
console.log(bombs);

function generateBombs(min, max) {
  const bombs = []
  while (bombs.length !== 16) {

    // genero numero casuale
    const bomb = generateRandomNumber(min, max)
    // verifico se il numero é stato giá inserito nella lista di bombe
    // se non lo é lo aggiungo altrimenti vado avanti
    if (!bombs.includes(bomb)) {
      // se la condizione é falsa allora eseguo il codice qui dentro
      bombs.push(bomb)
    }
  }
  return bombs
}



function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
