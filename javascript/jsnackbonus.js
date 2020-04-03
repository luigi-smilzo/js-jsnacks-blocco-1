/**
 * Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3)
 * e fai la somma di tutti gli elementi che sono in posizione dispari.
 * Prova prima senza funzione e poi con funzione.
 */

var numArray = [1, 5, 9, 11, 54, 80, 6, 20];
var sum;

console.log(arrayIndexOdd(numArray, sum));

function arrayIndexOdd(array, toSum) {
    var toSum = 0;
    
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
    
        if ( parityCheck(i) === true ) {
            console.log(item);
            toSum += array[i];
        }
    }
    return toSum;
}

function parityCheck(a) {
    if ( a % 2 == 0 ) {    // !ATTENZIONE! questo vale se si intende con posizione dispari le posizioni: 0, 2, 4, 6. Altrimenti cambiare " == " con " !== "
        return true;
    }

    return false;
}