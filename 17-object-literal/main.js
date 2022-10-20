/* 
- const/let
- =
- {}
- chiave:valore
*/
// definizione object literal
const person = {
  name: 'Fabio', // <-- proprietá (property)
  lastname: 'Pacifici',
  age: 42,
}
// loggo in console l'intero oggetto
console.log(person);

// accedo alle proprietá dell'oggetto con dot notation
console.log(person.name)
console.log(person.lastname)
console.log(person.age)


// accedo con square brackets notation
console.log(person['name']); //<-- chiave come stringa

// Se voglio usare una variabile come chiave dell'oggetto
const age = 'age' // definisco la variabile age
console.log(age); // age
console.log(person[age]); // person['age'] // error age not defined


// Add new properties to the object

person.color = 'Black' // <-- aggiungo proprietá con la dot notation
person['weight'] = 88 // <-- aggiungo proprietá con le quadre

console.log(person);


// loop over the objects properties

for (let key in person) {
  const element = person[key] // person.key - not possible 
  // 1. key = 'name' | person[key] -> person['name']
  // 2. key = 'lastname' | person[key] -> person['lastname']
  // 3. key = 'age' | person[key] -> person['age']
  console.log(key, element);

}


// Strutture dati complesse array/array array/objects

const movies = [
  ['Ritorno al futuro', 120, ['mj-fox', 'dr brows']], //0
  ['Ritorno al futuro 2', 120, ['mj-fox', 'dr brows']], //1
  ['Ritorno al futuro 3', 120, ['mj-fox', 'dr brows']], //2
]

console.log(movies);
console.log(movies[1][2][0]);


const movies_rev = [{
    title: 'Ritorno al futuro',
    duration: 120,
    actors: ['mj-fox', 'dr brows']
  },
  {
    title: 'Ritorno al futuro 2',
    duration: 120,
    actors: ['mj-fox', 'dr brows']
  },
  {
    title: 'Ritorno al futuro 3',
    duration: 120,
    actors: ['mj-fox', 'dr brows']
  }
]

console.log(movies_rev);

for (let i = 0; i < movies_rev.length; i++) {
  const movie = movies_rev[i];
  console.log(movie);

  const cardMarkup = `
  <div class="col">
  <div class="card col">
    <h3>${movie.title}</h3>
    <p>${movie.duration}</p>
    <p>${movie.actors.toString()}</p>
  </div>
  </div>`

  console.log(cardMarkup);
  document.querySelector('.row').insertAdjacentHTML('beforeend', cardMarkup)
}