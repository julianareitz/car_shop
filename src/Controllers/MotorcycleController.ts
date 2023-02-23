import { Request, Response, NextFunction } from 'express';
import IMotocycle from '../Interfaces/IMotorcycle';

import MotocycleService from '../Services/MotorcycleService';

export default class MotocycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotocycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotocycleService();
  }

  public async register() {
    const motorcycle: IMotocycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,  
    };

    try {
      const newMoto = await this.service.register(motorcycle);
      return this.res.status(201).json(newMoto);
    } catch (err) {
      this.next(err);
    }
  }

  public async getAll() {
    const getAll = await this.service.getAll();
    return this.res.status(200).json(getAll);
  }

  public async getById() {
    const { id } = this.req.params;
    
    const getOne = await this.service.getById(id);

    if (getOne === 'NOT_FOUND') {
      return this.res.status(404).json({ message: 'Motorcycle not found' });  
    }
    return this.res.status(200).json(getOne);
  }
}