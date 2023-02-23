import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { 
  validMoto,
  validMotoWithId,
  validId,

} from '../Mocks/motocycleMock';

describe('At Motorcycle Service should', function () {
  const motorcycleService = new MotorcycleService();
  afterEach(function () { sinon.restore(); });

  it('01 - Register a new motorcycle', async function () {
    sinon.stub(Model, 'create').resolves(validMotoWithId);
    const response = await motorcycleService.register(validMoto);
    expect(response).to.be.deep.equal(validMotoWithId);
  });

  it('02 - Find motorcycle by id', async function () {
    sinon.stub(Model, 'findOne').resolves(validMotoWithId);
    const response = await motorcycleService.getById(validId.id);
    expect(response).to.be.deep.equal(validMotoWithId);
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