import { container } from "tsyringe";

import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UserRepository";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { CategoriesRepository } from "@modules/cars/infra/repositories/CategoryRepository";
import { SpecificationRepository } from "@modules/cars/infra/repositories/SpecificationRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoryRepository",

  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",

  SpecificationRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
