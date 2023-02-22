import { Request, Router, Response, NextFunction } from 'express';
import CarsController from '../Controllers/CarsController';
import ValidateId from '../Middlewares/ValidateId';

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

CarRouter.put(
  '/:id',
  ValidateId,
  (req, res, next) => new CarsController(req, res, next).update(),
);

export default CarRouter;