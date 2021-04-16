import { Car } from './car-component';

export default class ModelS extends Car {
  public description = 'Model S';

  public cost(): number {
    return 73000;
  }
}
