import { Request, Router, Response, NextFunction } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import ValidateId from '../Middlewares/ValidateId';

const MotorcycleRouter = Router();

MotorcycleRouter.post(
  '/',
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .register(),
);

MotorcycleRouter.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .getAll(),
);

MotorcycleRouter.get(
  '/:id',
  ValidateId,
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .getById(),
);

export default MotorcycleRouter;