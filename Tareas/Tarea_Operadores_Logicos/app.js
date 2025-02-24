let and0 = false && false;
let and1 = false && true;
let and2 = true && false;
let and3 = true && true;

console.log("+--------------+");
console.log("|      AND     |");
console.log("+---+---+------+");
console.log("| A | B |Salida|");
console.log("+---+---+------+");
console.log("| 0 | 0 | "+ and0 + "|");
console.log("+---+---+------+");
console.log("| 0 | 1 | "+ and1 + "|");
console.log("+---+---+------+");
console.log("| 1 | 0 | "+ and2 + "|");
console.log("+---+---+------+");
console.log("| 1 | 1 | "+ and3 + " |");
console.log("+---+---+------+");

console.log("_________________________________");

let or0 = false || false;
let or1 = false || true;
let or2 = true || false;
let or3 = true || true;

console.log("+--------------+");
console.log("|      OR      |");
console.log("+---+---+------+");
console.log("| A | B |Salida|");
console.log("+---+---+------+");
console.log("| 0 | 0 | "+ or0 + "|");
console.log("+---+---+------+");
console.log("| 0 | 1 | "+ or1 + " |");
console.log("+---+---+------+");
console.log("| 1 | 0 | "+ or2 + " |");
console.log("+---+---+------+");
console.log("| 1 | 1 | "+ or3 + " |");
console.log("+---+---+------+");

console.log("_________________________________");

let not0 = !true;
let not1 = !false;

console.log("+----------+");
console.log("|    NOT   |");
console.log("+---+------+");
console.log("| A |Salida|");
console.log("+---+------+");
console.log("| 0 | "+ not0 + "|");
console.log("+---+------+");
console.log("| 0 | "+ not1 + " |");
console.log("+---+------+");