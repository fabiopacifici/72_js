/* 
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es: [{
    nome: 'leone',
    famiglia: 'felidi',
    classe: 'mammiferi'
  },
  {
    nome: 'cane',
    famiglia: 'canidi',
    classe: 'mammiferi'
  },
  {
    nome: 'gallina',
    famiglia: 'fasianidi',
    classe: 'uccelli'
  },
]
Crea un nuovo array con la lista dei mammiferi.

*/

const animals = [{
    nome: 'leone',
    famiglia: 'felidi',
    classe: 'mammiferi'
  },
  {
    nome: 'cane',
    famiglia: 'canidi',
    classe: 'mammiferi'
  },
  {
    nome: 'gallina',
    famiglia: 'fasianidi',
    classe: 'uccelli'
  },
]

console.log(animals);

const mammiferi = animals.filter(animal => animal.classe === 'mammiferi')
console.log('########## Mammiferi #########');
console.log(mammiferi);