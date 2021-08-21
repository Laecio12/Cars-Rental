import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async create({
    id,
    name,
    email,
    avatar,
    password,
    driver_licence,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      email,
      avatar,
      password,
      driver_licence,
    });

    await this.repository.save(user);
  }
}

export { UserRepository };
