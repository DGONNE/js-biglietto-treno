/*  
    -TESTO ESERCIZIO-
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca
*/

/*
     -COMMENTI-

Chiedo età e kilometri da percorrere
Prezzo biglietto = 0.21 x km
20% under 18
40% over 65
prezzo finale con massimo due decimali
*/
const userAge = Number(prompt("Inserisci la tua età"))
const journeyLength = Number(prompt("Inserisci il numero di kilometri"))
const priceKm = 0.21
let price = journeyLength * priceKm

if(userAge < 18) {
  const discount = price * 0.2;
  price = price - discount;
}  console.log(price)
else if(userAge > 65) {
  const discount = price * 0.4;
  price = price - discount;
}  console.log(price)
else {
    alert("il costo del biglietto è:" price)
}