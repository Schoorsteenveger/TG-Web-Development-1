// a-1 Button met output hello world
const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
    if (button.value === "Bestel hier") {
        button.value = "Dank!";
        paragraph.textContent = "Bestelling geplaatst!";
    } else {
        button.value = "Bestel hier";
        paragraph.textContent = "Nog een keer?";
    }
}

// a-2 Button alert hello world

const hello = "Hello World!";
function showAlert() {
    alert(hello);
    console.log(hello);
}

// b input element. Variabele myInput aangemaakt.
const text = document.getElementById("myInput").value;

function InputText() {
    const text = document.getElementById("myInput").value;
    document.getElementById("resultaat").innerText = "Dit is je input:" + text;
}

// c function with parameters
const element = document.getElementById('myInput');
element.onchange = function () {
    console.log(element.value)
}

// d  Maak een functie met een parameter die deze in de console logt. Geef de ID variabele hier aan mee. Wat zie je in de console?
function pickNumber(number) {
    return number * 2;
}
const result = pickNumber(5);
document.getElementById("numberInput").innerText =
    "Dit is je nummer:" + result; // buiten de functie.

console.log(result); // nog placeholer input bewerken.

// function calculate(number) {
//     return number * 2;
// }
// console.log(calculate(number));