// Function Declaration

/* Syntax
// senza paramentri
function name() {

}

// con un parametro
function name(params) {
  //blocco di codice da eseguire
}


// con piu parametri
function name(param_1, param_2, param_3) {

}

*/

// funzione senza dati in ingresso
function sayHi() {
  alert('hi')
}

// funzione che accetta dati

function sumTwoNumbers(numb_1, numb_2) {
  const sum = numb_1 + numb_2;
  alert(sum)
}


function sumThreeNumbers(numb_1, numb_2, numb_3) {
  const sum = numb_1 + numb_2 + numb_3;
  //console.log(sum);
  return sum;
}


// Invoke a funcion

//sayHi();
//sayHi();
///sayHi();

// 100k after
//sayHi();
//sayHi();

const first_number = 10;
const second_number = 20;
//sumTwoNumbers(10, 20); // passo i valori direttamente
//sumTwoNumbers(first_number, second_number) // li passo tramite delle variabili


const sum = sumThreeNumbers(first_number, second_number, 100) // 130
console.log(sum);



/* Esempio codice ripetuto  */


//const user_1_year_of_birth = Number(prompt('Dimmi il tuo anno di nascita e diró quando sei nato'))
//const user_1_current_year = new Date().getFullYear()
//const user_1_age = user_1_current_year - user_1_year_of_birth;


//const user_2_year_of_birth = Number(prompt('Dimmi il tuo anno di nascita e diró quando sei nato'))
//const user_2_current_year = new Date().getFullYear()
//const user_2_age = user_2_current_year - user_2_year_of_birth;


//const user_3_year_of_birth = Number(prompt('Dimmi il tuo anno di nascita e diró quando sei nato'))
//const user_3_current_year = new Date().getFullYear()
//const user_3_age = user_3_current_year - user_3_year_of_birth;

/* Usando una funzione per pulire il codice sopra */

function calcAge(year_of_birth) {

  const current_year = new Date().getFullYear();
  //console.log(current_year, 'Sono il log di current year nella funzione');

  const age = current_year - year_of_birth;
  //console.log(age, 'Sono il log di age nella funzione');

  return age

}

const my_year_of_birth = Number(prompt('Dimmi il tuo anno di nascita e diró quando sei nato')) // 1980
// inserisco la variabile che contiene un valoper nella funzione
const user_age = calcAge(my_year_of_birth) //my_year_of_birth = 1980
console.log(user_age, 'sono il log di user age prodotto dalla funzione invocata');
/* Function scope */

// inserisco valore direttamente nella funzione 
const marco_age = calcAge(1997) //
console.log(marco_age, 'sono il logo di marco age prodotto dalla funzione invocata');
