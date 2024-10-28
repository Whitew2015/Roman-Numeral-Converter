const numberInput = document.getElementById("number");
const checkBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const checkInput = () => {
    //checks if input text is empty
    if (numberInput.value === "") {
        result.innerHTML = "Please enter a valid number";
        return;
    }

    //checks if input value is less than or equal to 0
    if (numberInput.value <= 0) {
        result.innerHTML = "Please enter a number greater than or equal to 1";
        return;
    }

    //checks if input value is greater than or equal to 4000
    if (numberInput.value >= 4000) {
        result.innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }
}




checkBtn.addEventListener("click", checkInput);
numberInput.addEventListener("keydown", e => {
    if(e.key === "Enter") {
        checkInput();
    }
});