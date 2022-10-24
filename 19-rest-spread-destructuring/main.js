// parametro rest

function sum(...params) {
  console.log(params, 'Log nella funzione');
  [1, 4, 5, 6]
  // sommo i valori dell'array params
  let sum = 0;
  params.forEach(numb => {
    sum += numb
  })
  return sum

}

const my_sum = sum(3, 5, 7, 10, 11)

console.log(my_sum);


// Destructuring

const movie = {
  title: 'ritorno al futuro',
  actors: ['MJ-Fox', 'Ch Loyd'],
  duration: 120
}

const {
  title,
  duration,
  actors
} = movie

/* Senza destructuring

const title = movie.title;
const actors = movie.actors;
const duration = movie.duration; */

console.log(title, duration, actors);


// Destructuring array

const users = [
  'Fabio',
  'Michele',
  'Sofia',
  'Filippo'
]

const [fab, , sofy] = users
//const fab = users[0]
console.log(fab, sofy);


// Operatore Spread

const obj = {
  name: 'palla',
  peso: 50
};
const copyObj = {
  ...obj,
  //name: 'palla',
  //peso: 50,
  colore: 'blue'
};
console.log(obj);

console.log(copyObj);
//{name: "palla", peso: 50, colore: "blue"}


const arr = [1, 4, 9]

const newArr = [
  ...arr,
  10,
  20,
  100
]
console.log(arr);
console.log(newArr);