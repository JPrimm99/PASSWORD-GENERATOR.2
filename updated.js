var passwordEl = document.querySelector("#password");
var btngenerateEl = document.querySelector("#generate");


btngenerateEl.addEventListener("click", function () {
   
    
    var charLength = prompt(" Pick a number between 8 and 128.");

    
    if ((charLength >= 8) && (charLength <= 128)) {

        
        let symbols = "!'#$%&()*+-./;:<>=?@[]{}~^";
        let numbers = "0123456789";
        let lowerCase = "abcdefghijklmnopqrstuvwxyz";
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let newPassword = "";

        let genSymbols = confirm("Click OK confirm Special Characters (!, $, %, etc.) CLICK CANCEL TO EXIT.");
        let genNumbers = confirm("Click OK confirm numbers. CLICK CANCEL TO EXIT.");
        let genLowerCase = confirm("Click OK confirm lowercase letters. CLICK CANCEL TO EXIT.");
        let genUpperCase = confirm("Click OK confirm uppercase letter. CLICK CANCEL TO EXIT.");

        var allCharacters = symbols + numbers + lowerCase + upperCase;
        var a = symbols + numbers + lowerCase;
        var b = symbols + numbers + upperCase;
        var c = symbols + lowerCase + upperCase;
        var d = numbers + lowerCase + upperCase;
        var e = symbols + numbers;
        var f = symbols + lowerCase;
        var g = symbols + upperCase;
        var h = numbers + lowerCase;
        var j = numbers + upperCase;
        var k = lowerCase + upperCase;

        if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * allCharacters.length);
                newPassword += allCharacters.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * a.length);
                newPassword += a.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * b.length);
                newPassword += b.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * c.length);
                newPassword += c.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * d.length);
                newPassword += d.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * e.length);
                newPassword += e.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * f.length);
                newPassword += f.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * g.length);
                newPassword += g.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * h.length);
                newPassword += h.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * j.length);
                newPassword += j.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * k.length);
                newPassword += k.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === true) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * symbols.length);
                newPassword += symbols.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === true) && (genLowerCase === false) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * numbers.length);
                newPassword += numbers.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === true) && (genUpperCase === false)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * lowerCase.length);
                newPassword += lowerCase.charAt(character, character + 1);
            }
        }
        else if ((genSymbols === false) && (genNumbers === false) && (genLowerCase === false) && (genUpperCase === true)) {
            for (i = 0; i < charLength; i++) {
                let character = Math.floor(Math.random() * a.length);
                newPassword += a.charAt(character, character + 1);
            }
        }

        passwordEl.textContent = newPassword;
    }

})

