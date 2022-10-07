// Seleziono il pulsante del nav_toggle
const navToggleEl = document.querySelector('.nav_toggle');
// aggiungo un event listener che ascolti per il click
navToggleEl.addEventListener('click', function () {

  console.log('nav toggle cliccato');
  document.querySelector('.mobile_menu').style.display = 'block'

});


// Seleziono .close
const closeEl = document.querySelector('.mobile_menu > .close');

// applico event listener
closeEl.addEventListener('click', function () {
  console.log('chiudi il menu mobile');
  document.querySelector('.mobile_menu').style.display = 'none'
})