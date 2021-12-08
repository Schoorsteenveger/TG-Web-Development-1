
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

// a Voeg Zeilen en Zwemmen toe aan het einde van het array
dutchSports.push("Zeilen", "Zwemmen");
console.log(dutchSports);
// b Voeg Volleybal toe aan het begin van het array
dutchSports.push("Volleybal");
console.log(dutchSports);
// c Maak een nieuw array ballSports, met de balsporten uit dutchSports
let ballSports = ["Voetbal", "Volleybal"];
console.log(ballSports);

// d Verwijder die items uit dutchSports.

dutchSports.slice("Voetbal", "Volleybal");
console.log(ballSports);

// dutchSports.includes(1, 4);
// console.log(dutchSports.includes(1, 4));

dutchSports.length;
console.log(dutchSports.length);

dutchSports.pop();
console.log(dutchSports.pop());

//e Sorteer het dutchSports array.
dutchSports.sort();
console.log(dutchSports.sort());

// f Log elk item in de console.
dutchSports.forEach(function (item, index) {
    console.log(item, index)
})

ballSports.forEach(function (item, index) {
    console.log(item, index)
})
// g Maak een nieuw array sportsLength, met daarin de lengte van elk item in het dutchSports array.
const sportsLenght = [];
sportsLenght.length = 4;
sportsLenght.push(dutchSports);
console.log(sportsLenght.push(dutchSports));
console.log(sportsLenght);
// sportsLenght.from(dutchSports);