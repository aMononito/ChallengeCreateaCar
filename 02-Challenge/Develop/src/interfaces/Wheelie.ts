import Motorbike from "../classes/Motorbike.js";

// define the interface
interface canWheelie {
    // declare the properties
    motorbike: Motorbike;
    // wheelie method takes a motorbike as an argument
    wheelie(vehicle: Motorbike): void;
    // declare the methods
    wheelie(): void;
}

// export the interface
export default canWheelie;