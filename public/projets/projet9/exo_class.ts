interface IVehicle {
    drive(): void;
    honk(): void;
}

abstract class Vehicle implements IVehicle {
    speed: number; // définition de la propriété speed de type number
    constructor(speed: number) {
        this.speed = speed
    }
    
    abstract honk(): void; // Méthode abstraite honk
    drive(): void {   // Implémentation de la méthode drive
        console.log(`Driving at ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    honk(): void {
        console.log("Beep, beep!");
    }
}

class Bycicle extends Vehicle{
    honk() : void{
        console.log("Ring, ring!");
    }
}

const car1: Car = new Car(100);
const car2: Car = new Car(120);
const bycicle1: Bycicle = new Bycicle(20);
const bycicle2: Bycicle = new Bycicle(25);
const bycicle3: Bycicle = new Bycicle(30);

// Création d'un tableau de véhicules
//On utilise plutôt l'interface que la classe abstraite pour déclarer le type des éléments du tableau
let vehicles: IVehicle[] = [car1, car2, bycicle1, bycicle2, bycicle3]; 

for (let vehicle of vehicles) {
    vehicle.drive();
    vehicle.honk();
}