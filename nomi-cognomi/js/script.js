
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

const nomi = ['giovanni', 'davide', 'luca'];
const cognomi = ['messina', 'leone', 'scollo'];
let invitati = [];

// genera-numero-compreso
function random(number) {
    number = parseInt(Math.floor(Math.random() * (3 - 0) + 0));
    // console.log(number);
    return number;
    
}
// dichiarazione due variabili maxe min
const min = 0;
const max = 3;

for (let i = 0; i < 20; i++){
    // invocazione funzione
    let randomNumber = random(min, max);
    console.log(randomNumber);
    invitati.push(nomi[randomNumber] + ' ' + cognomi[randomNumber]);
}
console.log(invitati);