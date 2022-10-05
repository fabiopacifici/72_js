/* Strings 
- definiamo la striga mettendo il testo tra gli apici ''
- definiamo la striga mettendo il testo tra le virgolette ""
- definiamo la striga mettendo il testo tra i backtick ``

*/


const user_1_full_name = "Fabio Pacifici"
const user_2_full_name = 'Manuel Poi G \' aleone' // <-- escape del carattere con la slack \
// const user_2_full_name = "Manuel Poi G'aleone" // <--- virgolette all'esterno e apice dentro.


// concatenazione di stringhe
const miaStringa = "Rosso" + " " + "Acceso";
console.log(miaStringa); // cosa uscirà? RossoAcceso


console.log('10');
console.log(10);


const post_title = 'Learn JS'
const post_body = "lorem ipsum dolor"

console.log("Post Title: post_title - Post Body: post_body"); // Tutta stringa
console.log("Post Title: " + post_title + "- Post Body: " + post_body); // Tutta stringa
console.log(`Post Title ${post_title}

Post Body ${post_body}

`);