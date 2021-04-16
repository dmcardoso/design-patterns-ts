import { Car } from './car-component';
import { CarOptions } from './car-decorator';

export default class EnhancedAutoPilot extends CarOptions {
  decoratedCar: Car;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ', Enhanced AutoPilot';
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}
