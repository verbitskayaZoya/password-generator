const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// CREATED AN ARRAY ONLY WITH LETTERS AND SYMBOLS 
const charactersWithoutNumbers = characters.filter((character)=> {
    return character != character.match(/\d/g)
})
// console.log(charactersWithoutNumbers)

// CREATED AN ARRAY ONLY WITH LETTERS AND NUMBERS
  const charactersWithoutSymbols= characters.filter((character) => {
        return character != character.match(/\W/g) && character !== "_"
  })
// console.log(charactersWithoutSymbols)

// CREATED AN ARRAY ONLY WITH LETTERS
const onlyLetters = characters.filter((character) => {
    return character == character.match(/[a-zA-Z]/)
})
// console.log(onlyLetters)

export { characters,charactersWithoutNumbers, charactersWithoutSymbols, onlyLetters } 