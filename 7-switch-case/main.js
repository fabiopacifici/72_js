let text;

console.log(new Date().getDay())
// 5 === 6 
// 5 === 0
// Eseguo blocco di default

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

console.log(text);


let message;
let fruits = 'Apple';
// fruits === 'Banana'
// fruits === 'Mango'
// fruits === 'Blueberry'


/* switch (fruits) {
  case "Banana":
    message = 'I like bananas';
    break;
  case "Mango":
    message = 'Mango is good';
    break;

  case "Blueberry":
    message = 'Nice fruit';
    break;

  default:
    message = "Never tasted this fruit";
    break;
} */

switch (true) {
  case fruits == 'Banana':
    message = 'I like bananas';
    break;
  case fruits == "Mango":
    message = 'Mango is good';
    break;

  case fruits == "Blueberry":
    message = 'Nice fruit';
    break;

  default:
    message = "Never tasted this fruit";
    break;
}


console.log(message);