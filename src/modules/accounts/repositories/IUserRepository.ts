import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
  findByEmail(name: string): Promise<User>;

  list(): Promise<User[]>;

  create({
    name,

    email,

    password,

    driver_licence,
  }: ICreateUserDTO): Promise<void>;
}

export { IUserRepository };
