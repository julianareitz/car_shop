import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
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

  public async getAll(): Promise<(Motorcycle | null)[]> {
    const motorcycleODM = new MotorcycleODM();
    const getAll = await motorcycleODM.find();
    const showAll = getAll.map((motorcycle) => this.registerMotocycleDomain(motorcycle));
    return showAll;
  }

  public async getById(id: string): Promise<Motorcycle | string | null> {
    const motorcycleODM = new MotorcycleODM();
    const getOne = await motorcycleODM.findById(id);
    if (!getOne) return 'NOT_FOUND';
    return this.registerMotocycleDomain(getOne);
  }
}