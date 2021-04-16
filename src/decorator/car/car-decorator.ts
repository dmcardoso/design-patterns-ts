import { Car } from './car-component';

export abstract class CarOptions extends Car {
  decoratedCar: Car;

  public abstract getDescription(): string;

  public abstract cost(): number;
}
