//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let mioDiv = document.getElementById('testo');
console.log(mioDiv);

let kilometri = parseInt(prompt('Quanti kilometri vuoi percorrere?'));
console.log(kilometri);

let age = parseInt(prompt('Quanti anni hai?'));
console.log(age);

if(isNaN(kilometri) || isNaN(age)){
    mioDiv.innerHTML = 'Devi inserire numeri!'
}