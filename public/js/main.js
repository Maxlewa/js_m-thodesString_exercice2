let prenom = 'Maxence'
// alert(prenom.charAt(0));

//2 

// alert(prenom.slice(-1));
// alert(prenom.charAt(prenom.length -1))

// 3

// alert(prenom.slice(1));
// alert(prenom.substring(1))

// 4

// let prenom = prompt("Prénom en minuscule svp :")
// alert(`${prenom.substr(0, 1)}${prenom.charAt(1).toUpperCase()}${prenom.substr(2)}`);

// prenom = prenom.toLocaleLowerCase();
// alert(prenom.charAt(0) + prenom.charAt(1).toLocaleUpperCase() + prenom.slice(2));

// 5

// let letMaj = prompt("Quelle lettre désirez vous mettre en majuscule?").toLocaleLowerCase();
// alert(prenom.replace(letMaj, letMaj.toUpperCase()));

// 6

// let prenomClean = prompt("Prénom ?")
// alert(`${prenom.charAt(0).toUpperCase()}${prenom.substring(1)}`)

// alert(prenom.charAt(1).toUppercase)

// 7

// for(var i = 0; i < 1; i++) {
//     prenom = removeRandomLetter(prenom);
// }
// alert(prenom);

// function removeRandomLetter(prenom) {
//     var pos = Math.floor(Math.random()*prenom.length);
//     return prenom.substring(0, pos)+prenom.substring(pos+1);
// }

// .toString(0).substring(0)

// ALEX

// let pos = Math.floor(Math.random()*prenom.length);
// nomRand = prenom.substr(0, pos)+prenom.substr(pos+1);
// alert(nomRand);

// AYHAN

let nbAl = Math.round(Math.random()* prenom.length)
console.log(nbAl);
alert(prenom.replace(prenom.charAt(nbAl), ""))