import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carRepository: ICarsRepository
  ) {}
  async execute({
    name,
    description,
    category_id,
    brand,
    daily_rate,
    fine_amount,
    license_plate,
  }: IRequest): Promise<Car> {
    const carAlreadyExists = await this.carRepository.findByLicencePlate(
      license_plate
    );

    if (carAlreadyExists) {
      throw new AppError("Car already exists!");
    }
    const car = await this.carRepository.create({
      name,
      description,
      category_id,
      brand,
      daily_rate,
      fine_amount,
      license_plate,
    });
    return car;
  }
}

export { CreateCarUseCase };
