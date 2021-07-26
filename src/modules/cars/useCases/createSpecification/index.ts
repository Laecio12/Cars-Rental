import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateCategoryController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository();

const specificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

const createSpecificationController = new CreateCategoryController(
  specificationUseCase
);

export { createSpecificationController };
