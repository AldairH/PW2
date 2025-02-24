// var estado = false;

// if(estado){
//     var estado = false; //Var es global.
// }
// console.log(estado)

let estado = true;
if (estado){
    let  estado = false; //Let es local.
    console.log(estado);
}
console.log(estado);