interface IUser {
    id: string;
    name: string;
    age: number;
    scores: number[];
    getMaxScore(tab : number[]): number;
    getAverageScore(tab : number[]): number;
}

class User implements IUser {
    id: string;
    name: string;
    age: number;
    scores: number[]
    constructor(id: string, name: string, age: number, scores: number[]) {
        this.id =id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
    getMaxScore(tab : number[]): number {
        let max = tab[0];
        for (let i = 1; i < tab.length; i++) {
            if (tab[i] > max) {
                max = tab[i];
            }
        }
        return max;
    }
    getAverageScore(tab : number[]): number {
        let sum = 0;
        for (let i = 0; i < tab.length; i++) {
            sum += tab[i];
        }
        return sum / tab.length;
    }
    
//Cette méthode prend un objet désérialisé et retourne une nouvelle instance de User avec les propriétés copiées.
    static fromJSON(data: any): User {
        return new User(data.id, data.name, data.age, data.scores);
}
}

let User1 = new User("1", "Alice", 20, [31.4, 29.9, 35.7]);
let User2 = new User("2", "Bob", 21, [25.0, 27.1]);
let User3 = new User("3", "Charlie", 22, [30.0, 30.1, 30.2]);
let users: IUser[] = [User1, User2, User3];

function serializeUsers(tab_de_user: IUser[]): string {
    return JSON.stringify(tab_de_user);
}

console.log(serializeUsers(users));

function deserializeUsers(chaine_json: string): IUser[] {
    const parsedData = JSON.parse(chaine_json); // parsedData est un tableau d'objets JavaScript désérialisés
    return parsedData.map((user: any) => User.fromJSON(user)); // On crée une nouvelle instance de User pour chaque objet désérialisé
}

console.log(deserializeUsers(serializeUsers(users)));

//Il n'est pas possible d'appeler directement les méthodes getMaxScore et getAverageScore sur les objets désérialisés
// car la méthode JSON.parse ne restaure que les propriétés (données/variables) des objets
// mais pas leurs méthodes. 
// Les objets désérialisés ne sont donc pas des instances de la classe User, mais de simples objets JavaScript.

// SOLUTION : Ajouter une méthode pour recréer les instance

const serializedData = serializeUsers(users); // chaîne JSON
const deserializedUsers = deserializeUsers(serializedData); // tableau d'objets User

const secondUser = deserializedUsers[1]; // Récupérer le deuxième utilisateur
console.log(`Nom : ${secondUser.name}`);
console.log(`Score le plus élevé : ${secondUser.getMaxScore(secondUser.scores)}`);
console.log(`Score moyen : ${secondUser.getAverageScore(secondUser.scores)}`);