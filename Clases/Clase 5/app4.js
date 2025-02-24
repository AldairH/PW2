function sumar(n1, n2){
    return {
        suma: parseInt(n1)+parseInt(n2),
        resta: parseInt(n1)-parseInt(n2),
        multi: parseInt(n1)*parseInt(n2),
        div: parseInt(n1)/parseInt(n2)
    }
}
let numero1 = prompt("Ingrese un numero: ");
let numero2 = prompt("Ingrese un numero: ");

let resultado = sumar(numero1,numero2);

console.log("El resultado final es: " +  resultado);