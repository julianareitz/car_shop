import express from 'express';
import CarRouter from './Routes/cars';
import MotorcyclesRouter from './Routes/motorcycles';

const app = express();

app.use(express.json());

app.use('/cars', CarRouter);
app.use('/motorcycles', MotorcyclesRouter);

export default app;
