export const validCar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const validCarWithId = {
  id: '6348513f34c397abcad040b2',
  ...validCar,
};

export const validId = '6348513f34c397abcad040b2';

export const invalidId = '3648513f34c397abcad040b2';

export const update = {
  model: 'Marea',
  year: 2002,
  color: 'Red',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const updatedCar = {
  id: '634852326b35b59438fbea2f',
  ...update,

};

export const carsArray = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];

export const notFound = 'Car not found';

export const InvalidIdMSG = 'Invalid mongo id'; 