// Maak een Club object dat het volgende bijhoudt:
// Naam
// Type club
// Aantal: Leden
function Clubs (clubName, clubType, clubMembers, contactInfo) {
    this.name = clubName
    this.clubType = clubType
    this.members = clubMembers
    this.contactInfo = contactInfo
}
let Club1 = new Clubs("Club1", "Karate");

console.log(Club1);

// Maak een Contactinformatie object aan en voeg die toe aan elk Club object.
// De Contactinformatie houdt het volgende bij:
function contactInfo(adress, phoneNumber, contactPerson) {
    this.adress = adress
    this.phoneNumber = phoneNumber
    this.contactPerson = contactPerson
}
let contactInfo1 = 

// Adres
// Telefoonnummer
// Contactpersoon

// Maak een array met 5 verschillende Clubs aan.
// Itereer door het array heen en log voor elke Club de naam, het telefoonnummer en de contactpersoon.
