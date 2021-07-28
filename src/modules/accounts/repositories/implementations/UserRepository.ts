import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user;
  }
  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }
  async create({
    name,
    username,
    email,
    password,
    driver_licence,
    admin,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_licence,
    });

    await this.repository.save(user);
  }
}

export { UserRepository };
