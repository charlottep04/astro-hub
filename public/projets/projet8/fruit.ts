// Pour visualiser les résultats dans la console : aller dans DEBUG CONSOLE
// Pour visualiser les résultats dans le terminal :
// 1. Transpiler le fichier en js : tsc fruit.ts
// 2. Exécuter le fichier js : node fruit.js   

let tabFruit: string[] = ["pomme", "kiwi", "banane", "cerise", "orange", "poire", "fraise", "prune", "ananas", "pêche"]
console.log("en minuscule:", tabFruit);

let tabMajuscule = tabFruit.map((fruit : string) => fruit.toUpperCase());
console.log("en majuscule", tabMajuscule);	

let tabSansP = tabFruit.filter((fruit : string) => fruit[0] != "p");
console.log("sans les fruits commençant par p", tabSansP);

let tabSansTab = tabFruit.reduce((a : string, b : string)  => a + " ," + b);
console.log("sans tableau: ", tabSansTab);

let PremierFruit = tabFruit.find((fruit : string) => fruit.length > 5);
console.log("premier fruit de plus de 5 lettres: ", PremierFruit);