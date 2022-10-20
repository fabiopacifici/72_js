/* Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l 'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


//Visualizzare in pagina 5 numeri casuali.

// - select a dom element where insert the numbers with querySelector
const numbersElement = document.querySelector('.numbers')
// - use math.floor and math.random to generate 5 random numbers

const randNumbers = generateNumbers(1, 100, 5)
console.log(randNumbers);


function generateNumbers(min, max, max_numbers) {
  const numbers = []
  while (numbers.length !== max_numbers) {
    const randomNumber = generateRandomNumber(min, max)
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber)
    }
  }
  return numbers
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// - use innerHTML to place the numbers onto the screen
numbersElement.innerHTML = randNumbers.toString()



// Da lì parte un timer di 30 secondi.
const timerElement = document.querySelector('.timer')
let seconds = 3
const intervalId = setInterval(function () {
  timerElement.innerHTML = seconds
  if (seconds === 0) {
    clearInterval(intervalId)
    // Dopo 30 secondi i numeri scompaiono 
    numbersElement.innerHTML = ''

    // ask to the user to type 5 numbers
    setTimeout(function () {
      const userNumbers = askNumbers() // [1, 2, 4, 5, 6]
      console.log(userNumbers);
      // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
      // check numbers 
      const foundNumbers = checkNumbers(userNumbers, randNumbers)
      console.log(foundNumbers);
      alert('Hai trovato i seguenti numeri' + foundNumbers.toString() + ' Punti fatti: ' + foundNumbers.length)
    }, 1000)


  } else {
    seconds--
  }
}, 1000)



// L 'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
function askNumbers() {
  const found = []
  while (found.length !== 5) {
    const userNumber = Number(prompt('type a number'))
    console.log(userNumber);
    if (!found.includes(userNumber)) {
      found.push(userNumber)
    } else {
      alert('Hai giá inserito questo numero!')
    }
  }
  return found
}



function checkNumbers(userNumbers, pcNumbers) {
  const foundNumbers = []
  for (let i = 0; i < userNumbers.length; i++) {
    const number = userNumbers[i];
    if (pcNumbers.includes(number)) {
      foundNumbers.push(number)
    }
  }
  console.log(foundNumbers);
  return foundNumbers
}