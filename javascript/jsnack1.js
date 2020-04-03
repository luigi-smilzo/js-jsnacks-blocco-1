/**
 * L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa la parola più lunga.
 * Utilizza una funzione per determinare e ritornare la parola più lunga.
 */

var word1 = prompt('Inserisci la prima parola').toLowerCase().trim();

while (word1 == '') {
    var word1 = prompt('Inserisci almeno un carattere').toLowerCase().trim();
}

var word2 = prompt('Inserisci la seconda parola').toLowerCase().trim();

while (word2 == '') {
    var word2 = prompt('Inserisci almeno un carattere').toLowerCase().trim();
}

console.log(checkLength(word1, word2));

function checkLength(a, b) {
    var w1 = a.length;
    var w2 = b.length;
    
    if ( w1 > w2) {
        return a;
    }
    return b;
}