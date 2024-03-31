import { characters, charactersWithoutNumbers, 
    charactersWithoutSymbols, onlyLetters } from "./characters.js"
    
// ---------- GETTING ELEMENTS -------------------------------
    const passwordContainer     = document.getElementById("password-container")
    const btnContainer          = document.getElementById('btn-container')
    const pageContainer         = document.getElementById("page-container")
    const firstPassword         = document.getElementById("first-password")
    const secondPassword        = document.getElementById("second-password")
    const btnGeneratePassword   = document.getElementById("btn-generate-password")
    const errorMessage          = document.getElementById("error-message")
    const passwordLengthInput   = document.getElementById("password-length-input")
    const toggleBtn             = document.getElementById("toggle-button")
    const passwordCopiedMessage = document.getElementById("password-copied-message")
    
//--------- GLOBAL VARIABLES -----------------------------------
    let password = " "
    let btnState = {}
    let hasDarkTheme = true
    
//-------- EVENT LISTENERS ---------------------------------------------
    
    btnContainer.addEventListener("click", (e) => changeBtnColor(e.target, e.target.id))
    btnGeneratePassword.addEventListener("click", renderPasswords)
    passwordContainer.addEventListener("click", (e) => copyToClipboard(e.target))
    toggleBtn.addEventListener("click", changeTheme)
    
// ------------------- FUNCTIONS DECLARATIONS ------------------------------    

//---- CHANGE DARK/LIGHT THEME -------------------------------------------------
function changeTheme() {
    hasDarkTheme ? (hasDarkTheme = false,
        pageContainer.classList.add("light-theme"),
        pageContainer.classList.remove("dark-theme") )
        : (hasDarkTheme = true,
        pageContainer.classList.remove("light-theme"),
        pageContainer.classList.add("dark-theme"))
    }    

//----- CHANGE STYLE OF BUTTONS (CLICKED/NOT CLICKED) AS TOGGLES ON/OFF ----------
function changeBtnColor(btn, stateName) {
    btnState[stateName] ? (btnState[stateName]  = false,
        btn.style.backgroundColor = "#10B981") // default btn color (mountainmeadow in css)
        : (btnState[stateName] = true,
        btn.style.backgroundColor = "#6B7280") // slateGray color
    }

// ----- COPY TO CLIPBOARD -----------------------------------------------------
function copyToClipboard(element) {
    navigator.clipboard.writeText(element.textContent)
    element.textContent ? passwordCopiedMessage.textContent = `Copied`
                        : '' 
    setTimeout(() => {
        passwordCopiedMessage.textContent = ''
    }, 1000);
}

function renderPasswords() {
    firstPassword.textContent = generatePasswords(passwordLengthInput.value)
    secondPassword.textContent = generatePasswords(passwordLengthInput.value)
}
    
function generatePasswords(num) {
    password = " "
    errorMessage.textContent = ''
        try{
            if(!num) throw "it's empty"
            if(isNaN(num)) throw "it's not a number"
            if(num > 15) throw "it's more than fifteen"
            if(num < 5) throw "it's less than five"

            if(btnState.numbers && btnState.symbols) {
                for(let i = 0; i < num; i++) {
                    let randomCharacterIndex = Math.floor(Math.random() * onlyLetters.length)     
                    password += onlyLetters[randomCharacterIndex]
                    } 
                return password
                }

            if(btnState.symbols) {
                for(let i = 0; i < num; i++) {
                    let randomCharacterIndex = Math.floor(Math.random() * charactersWithoutSymbols.length)     
                    password += charactersWithoutSymbols[randomCharacterIndex]
                    } 
                return password
            }
    
            if(btnState.numbers) {
                for(let i = 0; i < num; i++) {
                    let randomCharacterIndex = Math.floor(Math.random() * charactersWithoutNumbers.length)     
                    password += charactersWithoutNumbers[randomCharacterIndex]
                    } 
                return password
            }
    
            for(let i = 0; i < num; i++) {
                let randomCharacterIndex = Math.floor(Math.random() * characters.length)     
                password += characters[randomCharacterIndex]
                } 
        return password

        } catch(err) {
            errorMessage.textContent = `Your input number is not valid because ${err}`
        }
    
    }