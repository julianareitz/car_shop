import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarsService';
import { validCar,
  validCarWithId,
  // carsArray,
  validId,
} from '../Mocks/CarMock';

describe('At Car Service should', function () {
  const carService = new CarService();
  afterEach(function () { sinon.restore(); });

  it('01 - Register a new car', async function () {
    sinon.stub(Model, 'create').resolves(validCarWithId);
    const response = await carService.register(validCar);
    expect(response).to.be.deep.equal(validCarWithId);
  });

  it('02 - Find car by id', async function () {
    sinon.stub(Model, 'findOne').resolves(validCarWithId);
    const response = await carService.getById(validId);
    expect(response).to.be.deep.equal(validCarWithId);
  });

  // it('02 - Find all cars', async function () {
  //   sinon.stub(Model, 'find').resolves(carsArray);
  //   const response = await carService.getAll();
  //   expect(response).to.be.deep.equal(carsArray);
  // });

  // it('04 - Find no car with wrong id', async function () {
  //   sinon.stub(Model, 'findById').resolves(InvalidIdMSG);
  //   const response = await carService.getById(invalidId);
  //   expect((response).messsage).to.be.deep.equal(InvalidIdMSG);
  // });
});