import { getRepository, Repository } from "typeorm";

import { ICreateCarDto } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    name,
    description,
    brand,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
  }: ICreateCarDto): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
    });
    await this.repository.save(car);
    return car;
  }

  findByLicencePlate(license_plate: string): Promise<Car> {
    const car = this.repository.findOne({ license_plate });
    return car;
  }
}

export { CarsRepository };
