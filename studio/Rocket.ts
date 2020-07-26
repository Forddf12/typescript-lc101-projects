import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo [] = [];
    astronauts: Astronaut [] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    
    sumMass(items: Payload[]): number {
        let total = 0;
        for(let i = 0; i < items.length; i++) {
         total += items[i].massKg;
        }
        return total;
    }
    currentMassKg(): number {
        let astronautKg: number = this.sumMass(this.astronauts);
        let cargoKg: number = this.sumMass(this.cargoItems);
        return cargoKg + astronautKg;
    }

    canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } 
        return false;
    }        
    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } 
        return false;
    } 
    
    
}

