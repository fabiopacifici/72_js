const cats = [{
    name: 'Jerry',
    color: 'Gray'
  },
  {
    name: 'Felix',
    color: 'Black and White'
  },
  {
    name: 'Garfield',
    color: 'Orange'
  },
];

cats.forEach((element) => {
  console.log(`${element.name}'s color is ${element.color}`);
});


/* Foreach Syntax
- array.forEach()
- funzione anonima nelle tonde del forEach( () => {})
- oppure per esteso funzione anonima nelle tonde del forEach(function(){})
- nelle tonde della funzione anima abbiamo accesso ai parametri: element, index, array
- ()=>{// blocco di codice da esegire }
*/
const team = [{
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Waleter gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manage",
    image: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Grafic designer",
    image: "barbara-ramos-graphic-designer.jpg"
  }
]

/* team.forEach((member, i, team_array) => {
  console.log(member);
  console.log(i);
  console.log(team_array);
}) */

team.forEach((member) => {
  /*  console.log(member.name);
   console.log(member.role);
   console.log(member.image); */
  return member.name
})


/* Map */


const numbs = [10, 20, 40]

const doubledNumbers = numbs.map(function (numb) {
  return numb * 2
})
console.log(doubledNumbers);


/* const nums = []
numbs.forEach(element => {
  nums.push(element * 2)
})

console.log(nums); */


/* Filter */

/* const numeri = [1, 2, 3, 4, 5];
const pari = numeri.filter((numero) => {
  if (numero % 2 === 0) {
    return true;
  }
  return false;
});
console.log(pari); // [2, 4] */

// versione semplificata 1
/* const numeri = [1, 2, 3, 4, 5];
const pari = numeri.filter(numero => {
  if (numero % 2 === 0) {
    return true;
  }
}); */
// Versione semplificata 2
const numeri = [1, 2, 3, 4, 5];
const pari = numeri.filter(numero => numero % 2 === 0);
console.log(pari); // [2, 4]


// 
/**

 const pari = numeri.filter((numero) => {
   if (numero % 2 === 0) {
     return true;
   }
   return false;
 });
 console.log(pari); // [2, 4]
 */
const evenNumbers = []
for (let i = 0; i < numeri.length; i++) {
  const numero = numeri[i];

  if (numero % 2 === 0) {
    evenNumbers.push(numero)
  }

}

console.log(evenNumbers);