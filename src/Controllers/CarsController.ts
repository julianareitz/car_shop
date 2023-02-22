import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';

import CarsService from '../Services/CarsService';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async register() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,  
    };

    try {
      const newCar = await this.service.register(car);
      return this.res.status(201).json(newCar);
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
      return this.res.status(422).json({ message: 'Invalid mongo id' });  
    }
    return this.res.status(200).json(getOne);
  }
}