var User = /** @class */ (function () {
    function User(id, name, age, scores) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
    User.prototype.getMaxScore = function (tab) {
        var max = tab[0];
        for (var i = 1; i < tab.length; i++) {
            if (tab[i] > max) {
                max = tab[i];
            }
        }
        return max;
    };
    User.prototype.getAverageScore = function (tab) {
        var sum = 0;
        for (var i = 0; i < tab.length; i++) {
            sum += tab[i];
        }
        return sum / tab.length;
    };
    //Cette méthode prend un objet désérialisé et retourne une nouvelle instance de User avec les propriétés copiées.
    User.fromJSON = function (data) {
        return new User(data.id, data.name, data.age, data.scores);
    };
    return User;
}());
var User1 = new User("1", "Alice", 20, [31.4, 29.9, 35.7]);
var User2 = new User("2", "Bob", 21, [25.0, 27.1]);
var User3 = new User("3", "Charlie", 22, [30.0, 30.1, 30.2]);
var users = [User1, User2, User3];
function serializeUsers(tab_de_user) {
    return JSON.stringify(tab_de_user);
}
console.log(serializeUsers(users));
function deserializeUsers(chaine_json) {
    var parsedData = JSON.parse(chaine_json); // parsedData est un tableau d'objets JavaScript désérialisés
    return parsedData.map(function (user) { return User.fromJSON(user); }); // On crée une nouvelle instance de User pour chaque objet désérialisé
}
console.log(deserializeUsers(serializeUsers(users)));
//Il n'est pas possible d'appeler directement les méthodes getMaxScore et getAverageScore sur les objets désérialisés
// car la méthode JSON.parse ne restaure que les propriétés (données/variables) des objets
// mais pas leurs méthodes. 
// Les objets désérialisés ne sont donc pas des instances de la classe User, mais de simples objets JavaScript.
// SOLUTION : Ajouter une méthode pour recréer les instance
var serializedData = serializeUsers(users); // chaîne JSON
var deserializedUsers = deserializeUsers(serializedData); // tableau d'objets User
var secondUser = deserializedUsers[1]; // Récupérer le deuxième utilisateur
console.log("Nom : ".concat(secondUser.name));
console.log("Score le plus \u00E9lev\u00E9 : ".concat(secondUser.getMaxScore(secondUser.scores)));
console.log("Score moyen : ".concat(secondUser.getAverageScore(secondUser.scores)));
