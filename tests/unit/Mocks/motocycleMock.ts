export const validMoto = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const validId = { id: '6348513f34c397abcad040b2' };
export const validMotoWithId = {
  ...validId,
  ...validMoto,
};

export const invalidId = { id: '3648513f34c397abcad040b2' };

export const motosArray = [
  { ...validMoto },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

export const notFound = 'Motocycle not found';

export const InvalidIdMSG = 'Invalid mongo id'; 
