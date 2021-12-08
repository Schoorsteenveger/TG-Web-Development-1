// a) Gebruik Array.from() om er een nieuw array van te maken.

// let broodBeleg1 = "Jam, kaas, humus"

// const voorRaad = broodBeleg1.from(broodBeleg1);
// console.log(broodBeleg1);

let text = ["Jam", "Kaas", "Humus",]
const broodBeleg = Array.from(text);
console.log(broodBeleg);
// Onderzoek de volgende array methods en maak voor elke een voorbeeld:

// b)filter()
const result = broodBeleg.filter(broodBeleg => broodBeleg.length > 4);
console.log(result);

// c)find()
const voorRaad = ["Jam", "Kaas", "Humus", "Honing"]
const eersteElement = voorRaad.find(element => element > "Jam")// eerste na jam.
console.log(eersteElement);
// d)some()

const even = (element) => element % 2 === 0;
console.log(broodBeleg.some(even));
// e)every()
const listNumbers = [2,3,40,30,10,11];

const isBelowThreshold = (currentValue) => currentValue < 41;
console.log(listNumbers.every(isBelowThreshold)); // vergelijkt of de waarde per item binnen de values in de array ligt.

// f)includes()
console.log(broodBeleg.includes("Humus")); 
