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
        for(let i = 0; i < = items.length; i++) {
         total += items[i].massKg;
        }
        return total;
    }
    currentMassKg(items: sumMass: number {
        const totalMassOfCargoItems: number = this.sumMass(this.cargoItems);
        const totalAstroMass: number = this this.sumMass(this.astronauts);
        return totalMassOfCargoItems + totalAstroMass;
    }
    canAdd(item: Payload): boolean {
        let totalMassOfCargoItems: number = this.currentMassKg() + item.massKg;
        return totalMassWithItem <= this.totalCapacityKg;
    }
    addCargo(item: Cargo): boolean {
        if(this.canAdd(item)) {
            this.cargoItems.push(item);
            return true;
        } else {
            return false;
        }        
    }
    
}

