var Rectangle = /** @class */ (function () {
    function Rectangle(largeur, longueur) {
        this.largeur = largeur;
        this.longueur = longueur;
    }
    Rectangle.prototype.calculerSurface = function (largeur, longueur) {
        if (largeur <= 0 || longueur <= 0) {
            throw new Error("Les dimensions du rectangle doivent être supérieures à zéro");
        }
        return largeur * longueur;
    };
    Rectangle.prototype.essayerCalculSurface = function () {
        try {
            console.log(this.calculerSurface(this.largeur, this.longueur));
        }
        catch (e) {
            console.error(e.message);
        }
        finally {
            console.log("Fin de la tentative de calcul de la surface.");
        }
    };
    return Rectangle;
}());
//Le constructor dans une classe TypeScript (ou JavaScript) est une méthode spéciale utilisée pour initialiser les objets créés à partir de cette classe. 
//Il permet d'attribuer des valeurs initiales aux propriétés de l'objet au moment de sa création
//Si vous définissez simplement largeur: number et longueur: number sans utiliser de constructeur, 
// ces propriétés existeront, mais elles n'auront pas de valeur initiale
var rectangle1 = new Rectangle(10, 20);
rectangle1.essayerCalculSurface(); // output: 200
var rectangle2 = new Rectangle(-5, 20);
rectangle2.essayerCalculSurface(); // output: Les dimensions du rectangle doivent être supérieures à zéro
var rectangle3 = new Rectangle(10, 0);
rectangle3.essayerCalculSurface(); // output: Les dimensions du rectangle doivent être supérieures à zéro
