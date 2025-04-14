//lambdas ou fonctions anonymes ou "fat arrow" avec instructions
//(<paramètres> ...) => { instructions }
//Avec expression
var add = function (a, b) { return a + b; };
console.log(add(5, 3));
var sub = function (a, b) { return a - b; };
console.log(sub(5, 3));
var mult = function (a, b) { return a * b; };
console.log(mult(5, 3));
var div = function (a, b) { return a / b; };
console.log(div(5, 3));
var caluclatrice = function (a, b, operation) {
    console.log("Le r\u00E9sultat est: ".concat(operation(a, b)));
};
console.log(caluclatrice(5, 3, add));
