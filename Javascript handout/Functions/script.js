"use strict";
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

/*const element = document.getElementById('myInput');
element.onchange = function () {
  console.log(element.value)
} */

// d  Maak een functie met een parameter die deze in de console logt. Geef de ID variabele hier aan mee. Wat zie je in de console?
function pickNumber(number) {
  return number * 2;
}
const result = pickNumber(5);
document.getElementById("resultNumber").innerText =
  "Dit is je nummer:" + result; // buiten de functie.
console.log(result);

/* Andere probeersels
// function pickNumber() {
//   const result = document.getElementById("numberInput").value;
//   // document.getElementById("result").innerText = "Dit is je nummer:" + pickNumber;
//   return result * 2;
//   console.log(result);
// }
// console.log(pickNumber());

/* Andere probeersels
// const number = 16;

// function calculate(number) {
//   return number * 2;
// }
// console.log(calculate(number));

// //a  4.2  DOM methods
// getElementsByClassName

// document.getElementsByClassName

// function count() {
//     let count = document.getElementById("divElements");
//     getElementsByClassName("container-text");
//     document.getElementById("showText").innerHTML = "Totaal:" + count.children.length;

// }

// // document.getElementsByTagName

const pElements = document.getElementsByTagName("p");
console.log(pElements);
// console.log(pElements[0]);

function colorChange(paragraphs, number, color) {
  paragraphs[number].style.color = color;
}

function changeallColors(paragraphs, color) {
  for (let index = 0; index < paragraphs.length - 1; index++) {
    paragraphs[index].style.color = color;
  }
}

// document.querySelector
// document.querySelectorAll
// element.innerHTML
// element.innerText
