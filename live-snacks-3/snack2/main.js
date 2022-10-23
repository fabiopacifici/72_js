const names = ['MaNdo', 'LukE', 'GROGU']

// ['Mando', 'Luke', 'Grogu']


const newArray = names.map(name => {
  // console.log(name);

  // seleziono la parola, e la trasformo in minuscolo
  const lowerCaseWord = name.toLowerCase()
  console.log(lowerCaseWord);
  // selezionare il primo carattere e lo trasformo in maiuscolo
  const firstChar = lowerCaseWord.charAt(0).toUpperCase()
  console.log(firstChar);
  // restituisco il primo carattere piú una porzione della stringa originale (che va dal 1 carattere in poi)
  const wordSlice = lowerCaseWord.slice(1)
  console.log(wordSlice);

  // ricostruisco la stringa capitalizzata
  const newWord = firstChar + wordSlice
  return newWord

  // return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()  
})


console.log(newArray);