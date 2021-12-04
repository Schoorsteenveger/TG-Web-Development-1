
// //a Random Number
// let randomNumber = Math.random();
// console.log(randomNumber);


// //b) Mathfloor function
// x = 20;
// let randomNumber1 = Math.floor(Math.random() * x);
// console.log(randomNumber1);

//c 
console.log(Math.min(2, 6, 9));
console.log(Math.max(2, 6, 9));
console.log(Math.min(2, 3, 1));

let a = 10, b = -20;
let y = Math.min(a, b);
console.log(Math.min(a, b));
// Verwachte output de lagste waarde b -20.

//d Naam met functie naam herkennen

function KiesNaam() {
    let KiesNaam = document.getElementById("name-input").value;
    const text = ("");
    // Als de naam Roibin is:
    if (naam === "Roibin" || naam === "Wesley" || naam === "Bianca" || naam === "Janou") {
        text + "Ja, die zit ook in het groepje";
    } else {
        text + "Saartje kennen we nog niet.";
    }
    document.getElementById("output-text").innerHTML + text;
}

// const KiesNaam = ["Roibin", "Wesley", "Bianca", "Janou", "Saartje"];
// console.log(KiesNaam);
// const dezeNaam = document.querySelector(".name-list");

// function KiesNaam() {
//     const poep = document.getElementById("deze-naam").value.innerText;
//     if ([0,4]) {
//         console.log("Deze persoon zit in het groepje");
//     } else {
//         return(" Saartje kennen we nog niet.")
//     }
// }

