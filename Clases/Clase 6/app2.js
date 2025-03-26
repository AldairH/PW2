//Funcion declarativa
// function numeroAleatorio(min, max){
//     return Math.floor(Math.random()*(max-min)+min);
// }

const numaleatorio = (min, max) => Math.floor(Math.random()*(max-min)+min);

console.log(numaleatorio(1,11));

//Funcion expresada
//Anonima (A traves de una variable)
// const miNumero = function(min,max){
//     return Math.floor(Math.random()*(max-min)+min);
// }
// console.log(miNumero(1,11));

// function (a){
//     return a + 100;
// }

// (a)=>{
//     return a +100;
// }

// var numero = (a) => a + 100;

// var numero = a => a + 100;