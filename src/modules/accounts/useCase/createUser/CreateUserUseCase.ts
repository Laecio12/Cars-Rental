import { injectable, inject } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  name: string;
  username: string;
  email: string;
  password: string;
  driver_licence: string;
}
@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_licence,
  }: IRequest): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByUsername(
      username
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    this.userRepository.create({
      name,
      username,
      email,
      password,
      driver_licence,
    });
  }
}

export { CreateUserUseCase };
