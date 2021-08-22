import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  async list(): Promise<User[]> {
    const allUsers = this.users;
    return allUsers;
  }

  async create({
    name,
    email,
    password,
    driver_licence,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
      driver_licence,
    });

    this.users.push(user);
  }
}

export { UserRepositoryInMemory };
