// - Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// dichiariamo una variabile, settata a zero, nella quale andremo a sommare tutti i numeri
let sum = 0;

// ciclo che chiede 10 volte all'utente di inserire un numero
for( let i=0; i<10; i++){
    let userNumber = prompt('Inserisci un numero');

    // trasformiamo in numero utilizzabile per i calcoli
    userNumber = parseInt(userNumber);

    // i singoli numeri, si sommano nella viariaile sum
    sum += userNumber;

}

// stampa fuori dal ciclo per avere SOLO la somma finale
console.log(sum);
