import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  driver_licence: string;
  admin?: string;
}

interface IUserRepository {
  findByUsername(username: string): Promise<User>;
  list(): Promise<User[]>;
  create({
    name,
    username,
    email,
    password,
    driver_licence,
    admin,
  }: ICreateUserDTO): Promise<void>;
}

export { ICreateUserDTO, IUserRepository };
