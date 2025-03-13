import Motorbike from "../classes/Motorbike.js";

// define the interface
interface canWheelie {
    // declare the properties
    canWheelie: boolean;
    // wheelie method takes a motorbike as an argument
    // declare the methods
    wheelie(): void;
}

// export the interface
export default canWheelie;