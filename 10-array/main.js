const toLearn = [
  'HTML', //0
  'CSS', // 1
  'JavaScript', // 2 
  'PHP', // 3
  'Mysql' // 4
];

console.log(toLearn)
console.log(toLearn[2])



const user = [
  'Giulia Grifo', // 0
  25, // 1
  50, //2
  [
    'Matteo', // 0 
    'Francesca', // 1
    'Diego' // 2
  ] //3
]
console.log(user)
console.log(user[3])

toLearn.push('Vuejs')
toLearn.push('Laravel 9')

console.log(toLearn);

console.log(toLearn.length);

// (let i = 0; i < 7; i++  )
for (let i = 0; i < user.length; i++) {
  const element = user[i];

  console.log(element);

}

console.log(user[3][1]);

const userFriend = user[3]

userFriend[1]