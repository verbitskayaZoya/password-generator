import { characters, charactersWithoutNumbers, 
    charactersWithoutSymbols, onlyLetters } from "./characters.js"
    
    // ---------- GETTING ELEMENTS -------------------------------
    let firstPassword = document.getElementById("first__password")
    let secondPassword = document.getElementById("second__password")
    const button = document.getElementById("btn__password")
    const errorMessage  = document.getElementById("error-message")
    const passwordLengthInput = document.getElementById("password-length-input")
    const noNumsBtn = document.getElementById("no-numbers-btn")
    const noSymbBtn = document.getElementById("no-symbols-btn")
    const toggleBtn = document.getElementById("toggle-button")
    const body = document.getElementById("body")
    
    console.log(toggleBtn)
    //--------- GLOBAL VARIABLES -----------------------------------
    let password = " "
    let isNoNumsClicked = false
    let isNoSymbClicked = false
    let hasDarkTheme = true
    
    //-------- EVENT LISTENERS ---------------------------------------------
    // NO NUMS BTN STATE AND STYLE ON CLICK
    noNumsBtn.addEventListener("click", () => {
        isNoNumsClicked ? (isNoNumsClicked  = false,
            noNumsBtn.style.backgroundColor = "#10B981") // Is there a way to use a CSS variable here instead?
            : (isNoNumsClicked = true,
            noNumsBtn.style.backgroundColor = "whitesmoke")
    })
    
   
    // NO SYMB BTN STATE AND STYLE ON CLICK
    noSymbBtn.addEventListener("click", ()  => {
        isNoSymbClicked ? (isNoSymbClicked  = false,
                        noSymbBtn.style.backgroundColor = "#10B981") // Is there a way to use a CSS variable here instead?
                        : (isNoSymbClicked = true,
                        noSymbBtn.style.backgroundColor = "whitesmoke")
    })
    
     //---- CHANGE THEME -------------------------------------------------
    toggleBtn.addEventListener("click", () => {
        hasDarkTheme ? (hasDarkTheme = false, 
            body.style.backgroundColor = "whitesmoke",
            body.style.fontColor = "black")
            : (hasDarkTheme = true,
                body.style.backgroundColor = "black",
                body.style.fontColor = "white")
    })


    // COPY TO CLIPBOARD
    firstPassword.addEventListener("click", () => {
        console.log(firstPassword.textContent)
        navigator.clipboard.writeText(firstPassword.textContent)
        alert("Copied the text: " + firstPassword.textContent)
    }
    )
    
    // GENERATE PASSWORDS BTN
    button.addEventListener("click", renderPasswords)
    
    
    // ------------------- FUNCTIONS DECLARATIONS ------------------------------
    
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
        
        if(isNoNumsClicked && isNoSymbClicked) {
            for(let i = 0; i < num; i++) {
                let randomCharacterIndex = Math.floor(Math.random() * onlyLetters.length)     
                password += onlyLetters[randomCharacterIndex]
                } 
            return password
            }
    
        if(isNoSymbClicked) {
            for(let i = 0; i < num; i++) {
                let randomCharacterIndex = Math.floor(Math.random() * charactersWithoutSymbols.length)     
                password += charactersWithoutSymbols[randomCharacterIndex]
                } 
            return password
        }
    
        if(isNoNumsClicked) {
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
            errorMessage.style.backgroundColor = "whitesmoke"
            errorMessage.style.padding = "10px"
            errorMessage.style.borderRadius = "50px"
        }
    
    }
    
    
    
    
    
    // stretch goals
    // ability to set password length through user's input   ----- DONE
    // add "copy-on-click" feature to clipboard ----- done but needs styling
    // toggle numbers and symbols on/off -------- functionality done
    // my idea is to change theme dark or light - in progress (need to learn about :has and custom properties)
    
    // to -do -list: 
    // need to style app
    // need to refactor code
    
    