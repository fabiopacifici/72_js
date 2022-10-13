/* 
Snack 4 Blocco 1:
  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’ utente il suo nome e comunicagli se può partecipare o no alla festa
  
*/


const guestList = [
  'persona 1',
  'persona 2',
  'persona 3',
  'persona 4',
  'persona 5',
  'persona 6',
]

const userName = 'Fabio'; // prompt()
let enjoyTheParty = false;

let i = 0;
while (i < guestList.length) {

  const name = guestList[i]

  if (name === userName) {
    enjoyTheParty = true
  }

  i++
}

if (enjoyTheParty) {
  console.log("Let's Party")
} else {
  console.log("Go home");
}