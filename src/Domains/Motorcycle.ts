import IMotocycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motocycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motocycle: IMotocycle) {
    super(motocycle);
    this.category = motocycle.category;
    this.engineCapacity = motocycle.engineCapacity;
  }
}