class Queue<T> {
    
    elements: T[] = [];
  
    enqueue(element: T): void {
        this.elements.push(element);
    }
  
    dequeue(): T | undefined {
        if (this.size() === 0) {
            return undefined;
        }
        return this.elements.shift(); 
        // shift() : Supprime et renvoie le premier élément du tableau.
        // pop() : Supprime et renvoie le dernier élément du tableau.   
    }
  
    size(): number {
        return this.elements.length;
    }
  }
  
// Testez votre code ici
let numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
console.log("Taille de la file de number:", numberQueue.size()); // Output: 3
console.log("Nombre supprimé:", numberQueue.dequeue()); // Output: 1
console.log("Taille de la file après dequeue:", numberQueue.size()); // Output: 
numberQueue.dequeue();
console.log("Cas où la file est vide:", numberQueue.dequeue()); // Output: undefined


let stringQueue = new Queue<string>();
stringQueue.enqueue("a");
stringQueue.enqueue("b");
console.log("Taille de la file de string:", stringQueue.size()); // Output: 3
console.log("String supprimé:", stringQueue.dequeue()); // Output: "a"
console.log("Taille de la file de string après dequeue:", stringQueue.size()); // Output: 2
stringQueue.dequeue();
console.log("Cas où la file est vide:", stringQueue.dequeue()); // Output: undefined
  