import express from 'express';
import CarRouter from './Routes/Car.router';

const app = express();

app.use(express.json());

app.use('/cars', CarRouter);

export default app;
