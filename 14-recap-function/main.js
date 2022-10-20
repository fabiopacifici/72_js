// function declaration syntax

function nome(parameters) {
  // code to run here
}
nome() // invoco usando il nome della funzione

// function expression

const calcAge = function () {
  // code to run here
}
calcAge() // invoco la funzione usando la variabile come se fosse il suo nome.


// anonymous functions
/* non puo essere invocata, non il nome
function () {

} */

// use case for anonymous function as callback function
element.addEventListener('click', function () {
  // code to run 
})

element.addEventListener('click', function_name_here)

function function_name_here(params) {
  // run this code
}

element.removeEventListener('click', function_name_here)
