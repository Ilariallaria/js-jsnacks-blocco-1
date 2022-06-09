// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = prompt('Inserisci un numero di 4 cifre');
// console.log (userNumber) per vedere se stampa il num inserito dall'utente

let sum = 0;

for( let i=0; i<userNumber.length; i++){
    let singleNumber = parseInt(userNumber[i]);
    // console.log(singleNumber)per capire se me li trasforma in numeri

    // sum dichiarata fuori, parte da zero, e io gli aggiungo singleNumber di volta in volta
    sum += singleNumber;

}

// faccio la stampa fuori per avere SOLO la somma finale
console.log(sum);








