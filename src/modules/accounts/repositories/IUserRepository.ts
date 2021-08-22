import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;

  list(): Promise<User[]>;

  create({
    name,
    email,
    password,
    driver_licence,
  }: ICreateUserDTO): Promise<void>;
}

export { IUserRepository };
