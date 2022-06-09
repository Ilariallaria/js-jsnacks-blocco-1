// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.



// array vuoto dichiarato fuori dal for altrimeni non modificabile
let empty = [];

// ciclo per chiedere all'utente di inserire 6 numeri
for(let i=0; i<6; i++){
    let userNumber = prompt('Inserisci un numero');

    // trasformiamo il numero inserito dall'utente in numero utilizzabile per i calcoli
    userNumber = parseInt(userNumber);
    
    //se è dispari pushamo il numero nell'array 
    if(userNumber % 2 !=0){
        empty.push(userNumber);
    }
}

// stampa dell'array
console.log(empty);