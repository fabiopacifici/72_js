/* 
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

 */

// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito

/* 

<img class="img-fluid active" src="./assets/img/01.webp" alt= "">
*/

/* const slides = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
]; */
const slides = [{
  image: 'img/01.webp',
  title: 'Marvel\'s Spiderman Miles Morale',
  text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
}, {
  image: 'img/02.webp',
  title: 'Ratchet & Clank: Rift Apart',
  text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
}, {
  image: 'img/03.webp',
  title: 'Fortnite',
  text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
}, {
  image: 'img/04.webp',
  title: 'Stray',
  text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
}, {
  image: 'img/05.webp',
  title: "Marvel's Avengers",
  text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
}];

// Selezione elementi della DOM 
const slidesElement = document.querySelector('.slides'); //dove inserire le immagini .slides usando querySelector()
const nextElement = document.querySelector('.next'); // la freccia next
const prevElement = document.querySelector('.prev'); // la freccia prev



// Seleziono l'indice dell'immagine che voglio attivare
let activeImage = 0;




// inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito

slides.forEach((slide, i) => {

  const slideMarkup = `
  <div class="slide ${i === activeImage ? 'active' : ''}">
    <img class="img-fluid" src="./assets/${slide.image}" alt="${slide.title}">
    <div class="slide-text">
      <h3>${slide.title}</h3>
      <p>${slide.text}</p>
    </div>
  </div>
  `;

  //prendo l'elemento della dom dove inserire le imamgini le inserisco
  slidesElement.insertAdjacentHTML('beforeend', slideMarkup);
})

/* Bonus 1 Thumbnails */

// <img class="img-fluid active" src="./assets/img/01.webp" alt="">

// seleziono elemento dom dove metter i thumbs
const thumbsElement = document.querySelector('.thumbnails')
// cicliamo tra le slides 
slides.forEach((slide, i) => {

  // creiamo il markup del thumb
  const thumbMarkup = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="./assets/${slide.image}" alt="">`;

  // lo inseriamo all'elemento della dom 
  //prendo l'elemento della dom dove inserire le imamgini dei thumbs le inserisco
  thumbsElement.insertAdjacentHTML('beforeend', thumbMarkup);
})




/* 
MILESTONE 3
Al click dell 'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/


// aggiungo event listener sulla freccia del next
nextElement.addEventListener('click', nextImage);

// aggiungo event listener sulla freccia del prev
prevElement.addEventListener('click', prevImage);


// utilizzo setInterval per avviare un player automatico
setInterval(() => {
  // invoco una funzione next che fa scorrere la slide in avanti
  nextImage()
}, 3000)



function nextImage() {
  console.log('Ho cliccato su next');
  //console.log(activeImage);
  activeImage++ // activeImage = activeImage + 1
  //console.log(activeImage); // al primo click il valore da 0 diventa 1
  //console.log(activeImage === slides.length);

  if (activeImage === slides.length) {
    //console.log('Settare immagine attiva su 0');
    activeImage = 0
  }


  //cambierà l’immagine attiva
  // selezionare dalla dom la slide attualmente attiva
  const activeSlideElement = document.querySelector('.slides > .slide.active')
  //console.log(activeSlideElement);

  // tolgo all'immagine la classe active
  activeSlideElement.classList.remove('active');
  // incremento active image di 1

  // seleziono tutte le immagini
  const allSlides = document.getElementsByClassName('slide')
  // sleziono l'immagine successiva
  const nextSlideElement = allSlides[activeImage];
  // aggiungo alla slide successiva la class active
  nextSlideElement.classList.add('active')


  // selezionare il thumbnail atturalmente attivo
  const activeThumb = document.querySelector('.thumbnails > img.active')
  //console.log(activeThumb); // <-- Dom element
  // rimuovere dall'elemento la classe active classList.remove()
  activeThumb.classList.remove('active')
  // selezionare il prossimo thumbnail
  const nextThumb = document.querySelectorAll('.thumbnails > img')[activeImage]
  //console.log(nextThumb);
  // aggiungere all'elemento la classe active classList.add()
  nextThumb.classList.add('active')
}


function prevImage() {
  console.log('Ho cliccato su prev');

  //console.log(activeImage === 0);
  if (activeImage === 0) {
    activeImage = slides.length
  }
  //console.log(activeImage); // 5
  //cambierà l’immagine attiva
  // selezionare dalla dom l'immagine attualmente attiva
  const activeSlideElement = document.querySelector('.slides > .slide.active')
  //console.log(activeSlideElement);
  // tolgo all'immagine la classe active
  activeSlideElement.classList.remove('active');
  // incremento active image di 1
  activeImage-- // activeImage = activeImage + 1
  //console.log(activeImage); // al primo click il valore da 0 diventa 1
  // seleziono tutte le immagini
  const allSlides = document.getElementsByClassName('slide')
  // sleziono l'immagine successiva
  const nextSlideElement = allSlides[activeImage];
  // aggiungo alla slide successiva la class active
  nextSlideElement.classList.add('active')


  // selezionare il thumbnail atturalmente attivo
  const activeThumb = document.querySelector('.thumbnails > img.active')
  //console.log(activeThumb); // <-- Dom element
  // rimuovere dall'elemento la classe active classList.remove()
  activeThumb.classList.remove('active')
  // selezionare il prossimo thumbnail
  const nextThumb = document.querySelectorAll('.thumbnails > img')[activeImage]
  //console.log(nextThumb);
  // aggiungere all'elemento la classe active classList.add()
  nextThumb.classList.add('active')

}