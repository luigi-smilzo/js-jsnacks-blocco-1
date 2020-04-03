/**
 * Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
 */

var num = parseInt(prompt('Inserisci un numero'));

while ( isNaN(num) ) {
    var num = parseInt(prompt('Per favore, inserisci un numero'));
}

if ( checkParity(num) === true ) {
    console.log('Pari:', num);
}   else {
    console.log('Dispari, ti mostro il successivo:',++num);
}

function checkParity(a) {
    if ( a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}