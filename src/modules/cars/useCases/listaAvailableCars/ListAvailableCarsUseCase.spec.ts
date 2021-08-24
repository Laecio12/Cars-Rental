import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });
  it("should be able to list all available cars", async () => {
    const car = carsRepositoryInMemory.create({
      name: "Car name",
      description: "Car description",
      category_id: "category_id",
      brand: "Car_brand_test",
      daily_rate: 50,
      fine_amount: 100,
      license_plate: "ABCD-1020",
    });
    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by brand", async () => {
    const car = carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car description",
      category_id: "category_id",
      brand: "Car_brand_test",
      daily_rate: 50,
      fine_amount: 100,
      license_plate: "ABCD-10202",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by name", async () => {
    const car = carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car description",
      category_id: "category_id",
      brand: "Car_brand_test",
      daily_rate: 50,
      fine_amount: 100,
      license_plate: "ABCD-10203",
    });
    const cars = await listAvailableCarsUseCase.execute({ name: "Car3" });

    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by category", async () => {
    const car = carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car description",
      category_id: "category_id",
      brand: "Car_brand_test",
      daily_rate: 50,
      fine_amount: 100,
      license_plate: "ABCD-10204",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Category_id",
    });

    expect(cars).toEqual([car]);
  });
});
