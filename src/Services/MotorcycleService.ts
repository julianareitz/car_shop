import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  // public carODM;
  
  // constructor() {
  //   this.carODM = CarODM;
  // }
  private registerMotocycleDomain(motocycle: IMotorcycle | null): Motorcycle | null {
    if (motocycle) {
      return new Motorcycle(motocycle);
    }
    return null;
  }

  public async register(motocycle: IMotorcycle): Promise<Motorcycle | null> {
    const motocycleODM = new MotorcycleODM();
    const newMotocycle = await motocycleODM.create(motocycle);
    return this.registerMotocycleDomain(newMotocycle);
  }

  // public async getAll(): Promise<(Car | null) []> {
  //   const carODM = new CarODM();
  //   const getAll = await carODM.find();
  //   const showAll = getAll.map((vehicle) => this.registerCarDomain(vehicle));
  //   return showAll;
  // }

  // public async getById(id: string): Promise<Car | string | null> {
  //   const carODM = new CarODM();
  //   const getOne = await carODM.findById(id);
  //   if (!getOne) return 'NOT_FOUND';
  //   return this.registerCarDomain(getOne);
  // }

  // public async update(id: string, car: Partial<ICar>): Promise<Car | string | null> {
  //   const carODM = new CarODM();
  //   const updateData = await carODM.update(id, car);
  //   if (!updateData) return 'NOT_FOUND';
  //   return this.registerCarDomain(updateData);
  // }
}