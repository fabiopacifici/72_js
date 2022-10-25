import {
  db
} from './db.js';
import {
  generateProducts,
} from './Helpers/helpers.js'

console.log(db); // [Product, Product, Product ...]

/* DOM Selections */
// Seleziono elemento della dom dove mettere le colonne 
const rowElement = document.querySelector('.row')
// seleziono elemento della dom basket > ul
const basketListElement = document.querySelector('.basket > ul')

// ciclo nell'array db
generateProducts(db, rowElement)


// seleziono tutti i pulsanti delle card
const buttonElements = document.querySelectorAll('.products .card-footer > .btn')
console.log(buttonElements);
// ciclo tra i pulsanti
buttonElements.forEach(button => {
  //console.log(button);
  // a ciasun pulsante aggiungo un event listener
  button.addEventListener('click', function () {
    console.log(this, 'cliccato su un prodotto');
    // loggo in console, il nome delprodtto sul quale ho cliccato, e il prezzo
    const productName = this.getAttribute('data-product-name')
    const productPrice = this.getAttribute('data-product-price')

    console.log(productName, productPrice);
    // Logica per aggiungere il prodotto cliccato nel basket 
    // inserisco il nome e il prezzo del prodotto cliccato in un list item
    const liMarkup = `<li>${productName} € ${productPrice}</li>`
    // appendo il list item all'ul
    basketListElement.insertAdjacentHTML('afterbegin', liMarkup)

  })

})
