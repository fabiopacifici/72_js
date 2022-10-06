/* Password Generator */

// Chiedi all' utente il suo nome,
const user_name = prompt('What\'s your name');
//console.log(user_name);

// poi chiedi il suo cognome,
const user_lastname = prompt('What\'s your lastname');
//console.log(user_lastname);

// poi chiedi il suo colore preferito
const user_color = prompt('What\'s your favourite color');
//console.log(user_color);

// Infine scrivi sulla pagina nomecognomecolorepreferito22
const password = user_name + user_lastname + user_color + "22";
console.log(password);

const passwordElement = document.getElementById('my_password');
console.log(passwordElement);

passwordElement.innerHTML = password;