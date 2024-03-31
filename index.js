import { characters, charactersWithoutNumbers, 
    charactersWithoutSymbols, onlyLetters } from "./characters.js"
    
    // ---------- GETTING ELEMENTS -------------------------------
    const passwordContainer = document.getElementById("password-container")
    const firstPassword = document.getElementById("first-password")
    const secondPassword = document.getElementById("second-password")
    const button = document.getElementById("btn-password")
    const btnContainer = document.getElementById('btn-container')
    const errorMessage  = document.getElementById("error-message")
    const passwordLengthInput = document.getElementById("password-length-input")
    const noNumsBtn = document.getElementById('no-numbers-btn')
    const noSymbBtn = document.getElementById("no-symbols-btn")
    const toggleBtn = document.getElementById("toggle-button")
    const pageContainer = document.getElementById("page-container")
    const passwordCopiedMessage = document.getElementById("password-copied-message")
    
    //--------- GLOBAL VARIABLES -----------------------------------
    let password = " "



    let isNoNumsClicked = false
    let isNoSymbClicked = false
    let hasDarkTheme = true
    
    //-------- EVENT LISTENERS ---------------------------------------------
    // NO NUMS BTN STATE AND STYLE ON CLICK
    // noNumsBtn.addEventListener("click", () => {
    //     isNoNumsClicked ? (isNoNumsClicked  = false,
    //         noNumsBtn.style.backgroundColor = "D5D4D8") // Is there a way to use a CSS variable here instead?
    //         : (isNoNumsClicked = true,
    //         noNumsBtn.style.backgroundColor = "#10B981")
    // })
    


    btnContainer.addEventListener("click", (e) => changeBntStyle(e.target))

   function changeBntStyle(btn) {
    console.log(btn.id)
        if(btn.id === "no-numbers-btn") {
            isNoNumsClicked ? (isNoNumsClicked  = false,
                btn.style.backgroundColor = "D5D4D8") 
                : (isNoNumsClicked = true,
                btn.style.backgroundColor = "#10B981")
        }
   }
    // NO SYMB BTN STATE AND STYLE ON CLICK
    noSymbBtn.addEventListener("click", ()  => {
        isNoSymbClicked ? (isNoSymbClicked  = false,
                        noSymbBtn.style.backgroundColor = "D5D4D8") // Is there a way to use a CSS variable here instead?
                        : (isNoSymbClicked = true,
                        noSymbBtn.style.backgroundColor = "#10B981")
    })
    
     //---- CHANGE THEME -------------------------------------------------
    toggleBtn.addEventListener("click", () => {
        hasDarkTheme ? (hasDarkTheme = false,
            pageContainer.classList.add("light-theme"),
            pageContainer.classList.remove("dark-theme") )
            : (hasDarkTheme = true,
            pageContainer.classList.remove("light-theme"),
            pageContainer.classList.add("dark-theme"))
        }
      
    )


    // COPY TO CLIPBOARD
    function copyToClipboard(element) {
        navigator.clipboard.writeText(element.textContent)
        element.textContent ? passwordCopiedMessage.textContent = `Copied`
            : '' 
            setTimeout(() => {
                passwordCopiedMessage.textContent = ''
            }, 1000);
    }
    
    // GENERATE PASSWORDS BTN
    button.addEventListener("click", renderPasswords)
    passwordContainer.addEventListener("click", (e) => copyToClipboard(e.target))
    
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
        }
    
    }
    
    
    
    

    
    