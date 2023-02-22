import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarsService {
  // public carODM;
  
  // constructor() {
  //   this.carODM = CarODM;
  // }
  private registerCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async register(car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.registerCarDomain(newCar);
  }

  public async getAll(): Promise<(Car | null) []> {
    const carODM = new CarODM();
    const getAll = await carODM.find();
    const showAll = getAll.map((vehicle) => this.registerCarDomain(vehicle));
    return showAll;
  }

  public async getById(id: string): Promise<Car | string | null> {
    const carODM = new CarODM();
    const getOne = await carODM.findById(id);
    if (!getOne) return 'NOT_FOUND';
    return this.registerCarDomain(getOne);
  }

  public async update(id: string, car: Partial<ICar>): Promise<Car | string | null> {
    const carODM = new CarODM();
    const updateData = await carODM.update(id, car);
    if (!updateData) return 'NOT_FOUND';
    return this.registerCarDomain(updateData);
  }
}