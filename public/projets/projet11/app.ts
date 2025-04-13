//Supposons que nous voulons créer une classe GenericStorage
//qui peut stocker des éléments de n'importe quel type :

class GenericStorage<T> {
  private data: Map<string, T> = new Map();

  set(key: string, value: T): void {
    this.data.set(key, value);
  }

  get(key: string): T | undefined {
    return this.data.get(key);
  }

  size(): number {
    return this.data.size;
  }
}
// Utilisation de la classe GenericStorage avec des nombres
let numberStorage = new GenericStorage<number>();
numberStorage.set("one", 1);
numberStorage.set("two", 2);
console.log(numberStorage.get("one")); // Affiche 1

// Utilisation de la classe GenericStorage avec des chaînes de caractères
let stringStorage = new GenericStorage<string>();
stringStorage.set("hello", "world");
stringStorage.set("goodbye", "cruel world");
console.log(stringStorage.get("hello")); // Affiche "world"
