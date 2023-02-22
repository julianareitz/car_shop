import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async find(): Promise<T[]> {
    const vehicles = await this.model.find();
    return vehicles;
  }

  public async findById(_id: string): Promise<T | null> {
    const vehicleFounded = await this.model.findOne({ _id });
    return vehicleFounded;
  }

  public async remove(_id: string): Promise<T | null> {
    const removedVehicle = await this.model.findOneAndRemove({ _id });
    return removedVehicle;
  }
}