// a-1 Button met output hello world
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Bestel hier') {
    button.value = 'Dank!';
    paragraph.textContent = 'Bestelling geplaatst!';
  } else {
    button.value = 'Bestel hier';
    paragraph.textContent = 'Nog een keer?';
  }
}

// a-2 Button alert hello world
const hello = "Hello World!"
function showAlert() {
  alert (hello);
  console.log(hello);
}

  // b input element. variabele myInput aangemaakt.
  const element = document.getElementById("myInput");
  element.onchange = function () {
    console.log(element);
  }

  // c function with parameters

  /*const element = document.getElementById('myInput');
  element.onchange = function () {
    console.log(element.value)
  } */

  // Maak een functie met een parameter die deze in de console logt. Geef de ID variabele hier aan mee. Wat zie je in de console?
  /*constcall = function (id) {
    const x = document.getElementById(id).value;
    alert(x);
    console.log(element.value);
  }*/

  // d  Geef je functie een return waarde, bijvoorbeeld de parameter * 2. 
  /*let number = 16;

  function calculate(number) { return (number * 2); }
  console.log(calculate(number * 2));*/


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
