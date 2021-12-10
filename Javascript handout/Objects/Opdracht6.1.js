// a) Maak meerdere objects Pet met een naam en een soort.Maak een ander dier met elk van de 5 soorten constructor uit de voorbeelden en log deze in de console.Zie je een onverwachte property ?
// Object Constructor
let petOne = new Object();

petOne.soort = "Rund";
petOne.name = "Koe Mina";

console.log(petOne)

// Literal Object constructor
let PetTwo = {
    species: "Felines",
    name: "Cat",
}
console.log(PetTwo);

// Function Constructor

function Pet(name, soort){  
    this.name = name
    this.soort = soort
}
let PetFunction= new Pet("Pelle", "Katachtigen");
console.log(PetFunction);

// Singleton Constructor 

let CatJuka = new function () {
    this.name = "Juka",
    this.species = "Felines"
};
console.log(CatJuka);

// Class- based Constructor

class Dog {
    constructor(name, species) {
        this.name = "Afarin"
        this.species = "Saluki"
    }
    whatIsDit() {
        console.log("Huh?")
    }
}
let Dog1 = new Dog("Afarin", "Saluki");
console.log(Dog1);

// b) Gebruik Object.create() om een Object aan te maken.
// Doe dit voor elke Pet die je in de vorige opdracht hebt gemaakt, en log ze in de console.Valt er iets op aan de prototype ?
// // Van Object Constructor
const newPetOne = Object.create(petOne);
newPetOne.soort = "Rund";
newPetOne.name = "Bella";
console.log(newPetOne);

// Van Literal Object constructor
const NewPetTwo = Object.create(PetTwo);

console.log(NewPetTwo);

// c)    Maak een array met 10 Person Objects, die een naam en leeftijd hebben.
// Gebruik vervolgens Array methods om je personen te sorteren op leeftijd.

const groupNames = [
    { name: "Ina", age: 22 },
    { name: "Juhana", age: 21 },
    { name: "Jonathan", age: 17 },
    { name: "Sander", age: 48 },
    { name: "Janou", age: 49 },
    { name: "Ely", age: 49 },
    { name: "Kim", age: 15 },
    { name: "Joy", age: 5 },
    { name: "Ella", age: 3 },
    { name: "Tom", age: 7 }   
]
console.log(groupNames.length);
groupNames.sort((a, b) => a.age - b.age);
console.log(groupNames); // nog niet helemaal. De objecten worden gelogd, maar niet als string an sich.

