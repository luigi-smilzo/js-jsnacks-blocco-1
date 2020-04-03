/**
 * Generatore di “nomi cognomi” casuali:
 * prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’)
 * e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’),
 * Gatsby vuole generare una falsa lista di 5 invitati.
 */

// references
var firstNames = ['Michele', 'Fabio', 'Roberto'];
var lastNames = ['Forghieri', 'Papagni', 'Marazzini'];
var guests = [];

// check if a new guest is alredy present
while ( guests.length < 5 ) {
    var randomGuest = ( firstNames[ getRandomNumber(0, firstNames.length) ] + ' ' + lastNames[ getRandomNumber(0, lastNames.length) ] );

    // if not present, push him inside
    if ( !guests.includes(randomGuest) ) {
            guests.push(randomGuest);
    }
}

console.log(guests);

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * ( max - min ) + min);
}