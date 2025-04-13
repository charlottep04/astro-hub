var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    Vehicle.prototype.drive = function () {
        console.log("Driving at ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.honk = function () {
        console.log("Beep, beep!");
    };
    return Car;
}(Vehicle));
var Bycicle = /** @class */ (function (_super) {
    __extends(Bycicle, _super);
    function Bycicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bycicle.prototype.honk = function () {
        console.log("Ring, ring!");
    };
    return Bycicle;
}(Vehicle));
var car1 = new Car(100);
var car2 = new Car(120);
var bycicle1 = new Bycicle(20);
var bycicle2 = new Bycicle(25);
var bycicle3 = new Bycicle(30);
// Création d'un tableau de véhicules
//On utilise plutôt l'interface que la classe abstraite pour déclarer le type des éléments du tableau
var vehicles = [car1, car2, bycicle1, bycicle2, bycicle3];
for (var _i = 0, vehicles_1 = vehicles; _i < vehicles_1.length; _i++) {
    var vehicle = vehicles_1[_i];
    vehicle.drive();
    vehicle.honk();
}
