let fruta = ["manzana", "pera", "palta", "mango"];
console.log(fruta);

console.log(fruta.length);
console.log(fruta[2]);
console.log(fruta[0]);
console.log("____________");

for(let i=0;i<fruta.length;i++){
    console.log((i+1) + ".- " + fruta[i]);
}

console.log("____________");

for(const frutas of fruta){ //Ejecuta un bloque de código de cada elemento
    console.log(fruta);
}

for(const frutas in fruta){//Itera sobre las propiedades de un objeto
    console.log(fruta)
}