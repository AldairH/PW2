let numeroMaquina = Math.floor(Math.random()*(10-1)-1);

console.log(numeroMaquina);
let numUser = parseInt(prompt("Adivina el numero entre 1 y 10: "));
let vidas = 3;

while (numeroMaquina != numUser && vidas>1){
    vidas--;
    numUser = parseInt(prompt(`Numero incorrecto, intentalo nuevamente :c
                                Tus vidas restantes son: ` + vidas));
}

if (numeroMaquina === numUser){
    console.log("Ganaste :D, el numero correcto era: " + numUser);
    alert("Ganaste :D, el numero correcto era: " + numUser);
}else{
    console.log("Perdiste jsjsjsjs :c");
    alert("Perdiste jsjsjsjs :c");
}