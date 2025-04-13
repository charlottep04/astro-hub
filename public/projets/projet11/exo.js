var Queue = /** @class */ (function () {
    function Queue() {
        this.elements = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.elements.push(element);
    };
    Queue.prototype.dequeue = function () {
        if (this.size() === 0) {
            return undefined;
        }
        return this.elements.shift();
        // shift() : Supprime et renvoie le premier élément du tableau.
        // pop() : Supprime et renvoie le dernier élément du tableau.   
    };
    Queue.prototype.size = function () {
        return this.elements.length;
    };
    return Queue;
}());
// Testez votre code ici
var numberQueue = new Queue();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
console.log("Taille de la file de number:", numberQueue.size()); // Output: 3
console.log("Nombre supprimé:", numberQueue.dequeue()); // Output: 1
console.log("Taille de la file après dequeue:", numberQueue.size()); // Output: 
numberQueue.dequeue();
console.log("Cas où la file est vide:", numberQueue.dequeue()); // Output: undefined
var stringQueue = new Queue();
stringQueue.enqueue("a");
stringQueue.enqueue("b");
console.log("Taille de la file de string:", stringQueue.size()); // Output: 3
console.log("String supprimé:", stringQueue.dequeue()); // Output: "a"
console.log("Taille de la file de string après dequeue:", stringQueue.size()); // Output: 2
stringQueue.dequeue();
console.log("Cas où la file est vide:", stringQueue.dequeue()); // Output: undefined
