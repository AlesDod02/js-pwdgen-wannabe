// Chiedere le informazioni di base all'utente
let name = prompt("Inserisci il tuo nome");
let surname = prompt("Inserisci il tuo cognome");
let FavoriteColor = prompt("Inserisci il tuo colore preferito");
let x = Math.floor((Math.random() * 100) + 1);
//let RandomNumber1 = prompt("Inserisci un numero casuale");
//let RandomNumber2 = prompt("Inserisci un secondo numero casuale");

// converto i numeri
//RandomNumber1 = parseInt(RandomNumber1);
//RandomNumber2 = parseInt(RandomNumber2);
// stabiliamo il numero per la password
//let divisionnumber = RandomNumber1 / RandomNumber2
//Stabiiamo la password
let password= name+surname+FavoriteColor+x

//compiliamo la password
let Yourpassword = `
-----------------------La tua Password---------------
> la tua password è:${password}
------------------------------------------------------`;
console.log(Yourpassword);
// lo sposto in html

document.getElementById("user_password").innerHTML = password;
