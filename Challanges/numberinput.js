const numberInput = document.querySelector(".input");
const convertButton = document.querySelector(".btn");
const textOutput = document.querySelector(".output-text");


function convertNumber() {
    convertButton.addEventListener("click", () => {
        console.log(typeof numberInput.value)
        if (typeof numberInput.value === "number") {
            procesNumber();

        } else if (numberInput.value === "") {
            throw Error(" There's no input")

        } else {
            throw Error("Is not a number");
        }
    })

}
convertNumber();

function procesNumber() {

    let convertedNumber
    switch (numberInput.value) {
        case 0:
            convertedNumber = "nul";
        case 1:
            convertedNumber = "een";
        case 2:
            convertedNumber = "twee";
        case 3:
            convertedNumber = "drie";
        case 4:
            convertedNumber = "vier";
        case 5:
            convertedNumber = "vijf";
        case 6:
            convertedNumber = "zes";
        case 7:
            convertedNumber = "zeven";
        case 8:
            convertedNumber = "acht";
        case 9:
            convertedNumber = "negen";

    }
    console.log(convertedNumber);
}

