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

function add (x,y) {
    return x + y;
}