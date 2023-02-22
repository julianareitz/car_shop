import { Request, Router, Response, NextFunction } from 'express';
import CarsController from '../Controllers/Car.controller';
import ValidateId from '../Middlewares/ValidateId.middleware';

const CarRouter = Router();

CarRouter.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => new CarsController(req, res, next)
    .register(),
);

CarRouter.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => new CarsController(req, res, next)
    .getAll(),
);

CarRouter.get(
  '/:id',
  ValidateId,
  (req: Request, res: Response, next: NextFunction) => new CarsController(req, res, next)
    .getById(),
);

export default CarRouter;