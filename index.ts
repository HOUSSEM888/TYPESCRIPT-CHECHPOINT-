interface Véhicule {
    make: string;
    model: string;
    year: number;
    start(): void;
}

class Voiture1 implements Véhicule {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

const auto = new Voiture("Toyota", "Corolla", 2020);
maVoiture.start(); // Affiche "Car engine started"

