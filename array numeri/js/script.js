// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let array =[];

let number= 0;

for (let i = 0; i < 5; i++) {

    let randomNumber = random(number);
    array.push(random(number)); 
    // let random = parseInt(prompt('inserisci un numero'));
    // array.push(random); 
    
}
console.log(array);


let somma = parseInt(0);

for (let i = 1; i < array.length; i +=2) {

    console.log(array[i]);
    somma = somma + array[i];
    console.log(somma);
    
}




function random(number) {
    let random = parseInt(prompt('inserisci un numero'));
    
    return random
}

