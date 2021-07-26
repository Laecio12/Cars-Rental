import { Specification } from "../model/Specification";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  findByName(name: string): Specification {
    throw new Error("Method not implemented.");
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { SpecificationRepository };
