import ModelS from './car-concrete-component-models';
import ModelX from './car-concrete-component-modelx';
import EnhancedAutoPilot from './car-concrete-decorator-enhanced';
import RearFacingSeats from './car-concrete-decorator-rearfacing';

const myTeslaS = new ModelS();
const myTeslaDecorated = new RearFacingSeats(myTeslaS);

const myTeslaX = new ModelX();
const myTeslaXDecorated = new EnhancedAutoPilot(myTeslaX);

console.log(myTeslaDecorated.cost());
console.log(myTeslaDecorated.getDescription());

console.log(myTeslaXDecorated.cost());
console.log(myTeslaXDecorated.getDescription());
