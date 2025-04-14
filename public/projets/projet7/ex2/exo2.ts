//lambdas ou fonctions anonymes ou "fat arrow" avec instructions
//(<paramètres> ...) => { instructions }

//Avec expression
const add = (a: number, b: number): number => a + b;
console.log(add(5, 3));

const sub = (a: number, b: number): number => a - b;
console.log(sub(5, 3));

const mult = (a: number, b: number): number => a * b;
console.log(mult(5, 3)); 

const div = (a: number, b: number): number => a / b;
console.log(div(5, 3));

const caluclatrice = (a: number, b: number, operation: (a: number, b: number) => number) => {
  console.log(`Le résultat est: ${operation(a, b)}`);
}

console.log(caluclatrice(5, 3, add));
