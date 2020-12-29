let prenom = 'Maxence'
// alert(prenom.charAt(0));
// alert(prenom.slice(-1));
// alert(prenom.slice(1));

// let prenom = prompt("Prénom en minuscule svp :")
// alert(`${prenom.substr(0, 1)}${prenom.charAt(1).toUpperCase()}${prenom.substr(2)}`);

// let letMaj = prompt("Quelle lettre désirez vous mettre en majuscule?")
// alert(prenom.replace(letMaj, letMaj.toUpperCase()));

// let prenomClean = prompt("Prénom ?")
// alert(`${prenom.charAt(0).toUpperCase()}${prenom.substr(1, 6)}`)

// alert(prenom.charAt(1).toUppercase)

for(var i = 0; i < 1; i++) {
    prenom = removeRandomLetter(prenom);
}
alert(prenom);

function removeRandomLetter(prenom) {
    var pos = Math.floor(Math.random()*prenom.length);
    return prenom.substring(0, pos)+prenom.substring(pos+1);
}

// .toString(0).substring(0)

// ALEX

// let pos = Math.floor(Math.random()*prenom.length);
// nomRand = prenom.substr(0, pos)+prenom.substr(pos+1);
// alert(nomRand);