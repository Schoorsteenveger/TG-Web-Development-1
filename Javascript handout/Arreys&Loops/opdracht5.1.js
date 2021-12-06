/* a */
// let thisArrey = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// console.log(Array);

/* b */

// const fruit = ["Appel", "Aardbei", "Peer", "Banaan", "Ananas"];
// console.log(fruit);
// console.log(fruit.indexOf('Apple', 0, "Aardbei", 1));
// console.log(fruit.indexOf(0, 1));


/* c Gebruik Math.random() en Math.floor() om een random indexwaarde van je array met getallen te selecteren. 
Gebruik dat getal vervolgens als index om een fruitsoort te selecteren en log dit.*/

const fruitBasket = ["Appel", "Aardbei", "Peer", "Banaan", "Ananas"];
// console.log(fruitBasket);
console.log(fruitBasket.indexOf('Apple', 0, "Aardbei", 1));
console.log(fruitBasket.indexOf(0, 1));


let btnRandom = document.querySelector('.btnRandom');
let result = document.querySelector('p');
console.log(result);

btnRandom.addEventListener('click', () => {
    const randomFruit = Math.floor(Math.random() * 11);
    result.innerText = fruitBasket[randomFruit];
    console.log(fruitBasket);
});

/* d Log een waarde uit fruitBasket*/
console.log(fruitBasket[4]);

/* e Consolelog de fruitsoorten met lenght property */
console.log(fruitBasket.length);// Output is 5.

/* f Error Undefined Fix*/
// let randomFruit = fruitBasket.length % randomFruit;

/* g Verander “Appel” naar “Peer”. Gebruik index om te veranderen*/

fruitBasket.splice(0, 1,"Peer"); // Haal 0 weg met -1 en schrijf de value instead.
console.log(fruitBasket);// ['Peer', 'Aardbei', 'Peer', 'Banaan', 'Ananas']

/* h Verwissel “Peer”[0] naar “Aardbei”[1].*/
fruitBasket.shift();
fruitBasket.unshift();
console.log(fruitBasket.shift("Peer"));
console.log(fruitBasket.unshift("Aardbei"));

// Trial. fruitBasket.splice(0, 1, fruitBasket.splice(1, 1, fruitBasket[1])[0]);
// console.log(fruitBasket);

/*Console log de length property van je fruitsoorten array.*/
/*Fix de vorige error met modulo en de lengte.*/
/*Je kan de index van een item ook gebruiken om de waarde te veranderen.*/
/*Verander “Appel” naar “Peer”
Verwissel “Peer” en “Aardbei” van positie.Kan je dit ook al met / zonder Array method ?*/
// Reserve
// let thisArrey = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// console.log(thisArrey);

// let btnRandom = document.querySelector('.btnRandom');
// let result = document.querySelector('p');
// console.log(result);

// btnRandom.addEventListener('click', () => {
//     const RandomNumber = Math.floor(Math.random() * 11);
//     result.innerText = thisArrey[RandomNumber];
//     console.log(thisArrey);
// });
