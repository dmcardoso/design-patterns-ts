import { Car } from './car-component';

export default class ModelX extends Car {
  public description = 'Model X';

  public cost(): number {
    return 77000;
  }
}
