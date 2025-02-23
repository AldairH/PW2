let numero1 = prompt("Ingresa un numero: ")
let numero2 = prompt("Ingresa otro numero: ")

console.log(typeof numero1);

let resta = parseInt(numero1) - parseInt(numero2);
let suma = parseInt(numero1) + parseInt(numero2);
let multiplicacion = parseInt(numero1) * parseInt(numero2);
let division = parseInt(numero1) / parseInt(numero2);
let modulo = parseInt(numero1) % parseInt(numero2);

console.log("La resta es: " + resta);
console.log("La suma es: " + suma);
console.log("La multiplicacion es: " + multiplicacion);
console.log("La division es: " + division);
console.log("El modulo es: " + modulo);