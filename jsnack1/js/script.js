const snack1 = [1, 2, 3, 4, 5, 6];

for( let i= 0; i<snack1.length; i++){
    const thisNumber = snack1 [i];
    // console.log(thisNumber);

    if(thisNumber % 2 === 0){
        document.getElementById('red').innerHTML += thisNumber + ' ';
    }
    else{
        document.getElementById('green').innerHTML += thisNumber + ' ';
    }

}