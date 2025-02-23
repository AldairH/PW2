let dato1 = parseInt(prompt("Ingresa el primer numero:"));
let dato2 = parseInt(prompt("Ingresa el segundo numero:"));

if (dato1>dato2){
    console.log("El numero " + dato1 + " es mayor que " + dato2 +".");
    alert("El numero " + dato1 + " es mayor que " + dato2 +".");
}else if(dato1 === dato2){
    console.log("Ambos numeros son iguales: " + dato1 + ".");
    alert("Ambos numeros son iguales: " + dato1 + ".");
}else{
    console.log("El numero " + dato2 + " es mayor que " + dato1 +".");
    alert("El numero " + dato1 + " es mayor que " + dato2 +".");
}