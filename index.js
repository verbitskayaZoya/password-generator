const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first__password")
let secondPassword = document.getElementById("second__password")
let button = document.getElementById("btn__password")


button.addEventListener(
    "click", function() {
        let result = " ";
for(i=0; i < 16; i++){
    result += characters[Math.floor(Math.random() * characters.length)]; 
}
let result2 = " ";
for(i=0; i < 16; i++){
    result2 += characters[Math.floor(Math.random() * characters.length)]; 
}
    firstPassword.innerHTML = result;
    secondPassword.innerHTML = result2;
    }
)
