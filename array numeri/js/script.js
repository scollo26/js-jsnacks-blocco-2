// jsnack 2
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let array =[];

let numero = parseInt(prompt('inserisci un numero'));

for (let i = 0; i < 20; i++) {
    array.push(numero);
    console.log(array);
    
}


let somma = 0;

for (let i = 1; i < array.length; i +=2) {

    console.log(array[i]);
    somma = somma + array[i];
    console.log(somma);
    
}

