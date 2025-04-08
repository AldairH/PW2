let inventario = [];

let producto = {
    nombre: "Pantalon",
    cantidad: 5,
    precio: 250
};
inventario.push(producto);
let playera = {
    nombre: "Playera",
    cantidad: 5,
    precio: 250
};
inventario.push(playera);
let gorra = {
    nombre: "Gorra",
    cantidad: 5,
    precio: 250
};
inventario.push(gorra);
let busqueda = prompt("Introduce una palabra: ");
const palabraEn = inventario.find(busqueda => busqueda);
console.log(palabraEn);