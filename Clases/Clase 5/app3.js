// function saludar (){
//     alert("Hola Papu");
// }
// saludar();

function saludar(nombre){
    return "Mi nombre es: " + nombre;
}
let nomUser = prompt("Ingresa tu nombre: ");
alert(saludar(nomUser));
console.log(saludar(nomUser));