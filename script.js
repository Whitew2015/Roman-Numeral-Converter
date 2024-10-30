const numberInput = document.getElementById("number");
const checkBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const convertToRomanNumeral = () => {

    let input = parseInt(numberInput.value, 10);

    //checks if input is empty or NaN
    if (isNaN(input)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }

    //checks if input value is less than or equal to 0
    if (input <= 0) {
        result.innerHTML = "Please enter a number greater than or equal to 1";
        return;
    }

    //checks if input value is greater than or equal to 4000
    if (input >= 4000) {
        result.innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }

    //Object Lookup Method
    const romanObjects = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    let romanSymbols = "";
    for (let key in romanObjects) {
        while (input >= romanObjects[key]) {
            romanSymbols += key;
            input -= romanObjects[key];
        }
    }

    //Array Method
    /*const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (let i = 0; i < numerals.length; i++) {
        while (input >= numerals[i]) {
            romanSymbols += symbols[i];
            input -= numerals[i];
        }
    }*/

    result.innerText = romanSymbols;
}


checkBtn.addEventListener("click", convertToRomanNumeral);
numberInput.addEventListener("keydown", e => {
    if(e.key === "Enter") {
        convertToRomanNumeral();
    }
});