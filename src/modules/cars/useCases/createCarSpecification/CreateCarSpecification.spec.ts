import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory
    );
  });
  it("should be able to add a new specification to the car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specification_id = ["123585"];

      await createCarSpecificationUseCase.execute(car_id, specification_id);
    }).rejects.toBeInstanceOf(AppError);
  });
  it("should be able to add a new specification to the car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specification_id = ["123585"];

      await createCarSpecificationUseCase.execute(car_id, specification_id);
    });
  });
});
