// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let myarray =[];

let number= 0;

for (let i = 0; i < 5; i++) {

    let randomNumber = random(number);
    myarray.push(randomNumber); 
    // let random = parseInt(prompt('inserisci un numero'));
    // array.push(random); 
    
}
console.log(myarray);
let mysomma = sommaElementiDispari(myarray);
console.log( mysomma);


// inizio-funzioni

function random(number) {
    let random = parseInt(prompt('inserisci un numero'));
    
    return random
}

function sommaElementiDispari(array) {
    let somma = 0;

 for (let i = 1; i < array.length; i +=2) {

    console.log(array[i]);
    somma = somma + array[i];
    console.log(somma); 
  } 
  return somma;
}
