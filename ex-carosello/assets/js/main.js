/* 
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

 */

// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito

/* 

<img class="img-fluid active" src="./assets/img/01.webp" alt= "">
*/

const slides = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
];


// Selezione elementi della DOM 
const slidesElement = document.querySelector('.slides'); //dove inserire le immagini .slides usando querySelector()
const nextElement = document.querySelector('.next'); // la freccia next
const prevElement = document.querySelector('.prev'); // la freccia prev



// Seleziono l'indice dell'immagine che voglio attivare
let activeImage = 0;




// inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito

for (let i = 0; i < slides.length; i++) {
  const slideUrl = slides[i];
  //console.log(slideUrl);
  const imgMarkup = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${slideUrl}" alt= "">`;
  //prendo l'elemento della dom dove inserire le imamgini le inserisco
  slidesElement.insertAdjacentHTML('beforeend', imgMarkup);
}

/* 
MILESTONE 3
Al click dell 'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/


// aggiungo event listener sulla freccia del next
nextElement.addEventListener('click', function () {
  console.log('Ho cliccato su next');

  //cambierà l’immagine attiva
  // selezionare dalla dom l'immagine attualmente attiva
  const activeSlideElement = document.querySelector('.slides > img.active')
  console.log(slides[activeImage], 'Selene');

  console.log(activeSlideElement);
  // tolgo all'immagine la classe active
  activeSlideElement.classList.remove('active');
  // incremento active image di 1
  activeImage++ // activeImage = activeImage + 1
  console.log(activeImage); // al primo click il valore da 0 diventa 1
  // seleziono tutte le immagini
  const allSlides = document.getElementsByClassName('img-fluid')
  // sleziono l'immagine successiva
  const nextSlideElement = allSlides[activeImage];
  // aggiungo alla slide successiva la class active
  nextSlideElement.classList.add('active')

});


// aggiungo event listener sulla freccia del prev
prevElement.addEventListener('click', function () {
  console.log('Ho cliccato su prev');
  //cambierà l’immagine attiva
  // selezionare dalla dom l'immagine attualmente attiva
  const activeSlideElement = document.querySelector('.slides > img.active')
  console.log(activeSlideElement);
  // tolgo all'immagine la classe active
  activeSlideElement.classList.remove('active');
  // incremento active image di 1
  activeImage-- // activeImage = activeImage + 1
  console.log(activeImage); // al primo click il valore da 0 diventa 1
  // seleziono tutte le immagini
  const allSlides = document.getElementsByClassName('img-fluid')
  // sleziono l'immagine successiva
  const nextSlideElement = allSlides[activeImage];
  // aggiungo alla slide successiva la class active
  nextSlideElement.classList.add('active')
});