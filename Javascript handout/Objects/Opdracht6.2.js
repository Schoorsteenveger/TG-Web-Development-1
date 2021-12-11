// Maak een Club object dat het volgende bijhoudt:
// Naam
// Type club
// Aantal: Leden

// function Clubs (clubName, clubType, clubMembers, contactInfo) {
//     this.name = clubName
//     this.clubType = clubType
//     this.members = clubMembers
//     this.contactInfo = contactInfo
// }
// let Club1 = new Clubs("Club1", "Karate");

// console.log(Club1);

// Maak een Contactinformatie object aan en voeg die toe aan elk Club object.
// De Contactinformatie houdt het volgende bij:
// Adres
// Telefoonnummer
// Contactpersoon

// function contactInfo(adress, phoneNumber, contactPerson) {
//     this.adress = adress
//     this.phoneNumber = phoneNumber
//     this.contactPerson = contactPerson
// }
// console.log(contactInfo);

// trial nested object
const Club = {
    name: 'ClubName',
    clubType: "Karate",
    members: 40,

    contactInfo: {
        adres: "Some Street",
        phoneNumber: "+31641015726",
        contactperson: "Jane Doe"
    }
}

console.log(Club.contactInfo.adres, Club.name);

// Clone 5x with assigning the new object.

const ClubOne = Object.assign({}, Club);
console.log(ClubOne.adres = "Another Street"); // Shallow copy dus child object krijgen een reference :(
console.log(ClubOne.contactInfo); // 
ClubOne.contactperson = "Tom Janssen";
ClubOne.name = "ClubOne";
ClubOne.phoneNumber = "02077777777";
ClubOne.adres = "Just Another Street";

const ClubTwo = { ...Club };
console.log(ClubTwo);
ClubTwo.name = "Clubname2";
ClubTwo.contactperson = "Mien Dobbelsteen";
ClubTwo.phoneNumber = "0206666666";
ClubTwo.adres = "Street Two";

const ClubThree = { ...Club }
ClubThree.name = "Clubname3";;
console.log(ClubThree.adres = "Street 3");
console.log(ClubThree.phoneNumber = "020444444444");
console.log(ClubThree);
console.log(Club);
const ClubFour = { ...Club };
ClubFour.name = "Clubname4";
const ClubFive = { ...Club };
ClubFive.name = "Clubname5";
 
// Maak een array met 5 verschillende Clubs aan.
const Clubs = [ClubOne, ClubTwo, ClubThree, ClubFour, ClubFive];
console.log(Clubs);

// Itereer door het array heen en log voor elke Club de naam, het telefoonnummer en de contactpersoon.
for (let i = 0; i < Clubs.length; i++){
    console.log(Clubs[i].name);
    console.log(Clubs[i].adres);
    console.log(Clubs[i].phoneNumber);
}
