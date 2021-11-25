// a Button met output hello world
function hello () {
    document.getElementById('result').innerHTML = 'Hello World!';
}

document.getElementById('b1').addEventListener('click', hello);

// b input element. variabele myInput aangemaakt.
let element = document.getElementById("myInput");
element.onchange = function() {
  console.log(element.value);
}

// c function with parameters

// let element = document.getElementById ('myInput');
// element.onchange = function() {
//     console.log(element.value)
// }

// Maak een functie met een parameter die deze in de console logt. Geef de ID variabele hier aan mee. Wat zie je in de console?
let call = function(id){
  let x = document.getElementById(id).value;
  alert(x);
  console.log(element.value);
}

// d  Geef je functie een return waarde, bijvoorbeeld de parameter * 2. 
let number = 16;

function calculate (number) {return (number * 2);}
  console.log(calculate(number * 2));

