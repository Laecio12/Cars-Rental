import { injectable, inject } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  name: string;
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
    email,
    password,
    driver_licence,
  }: IRequest): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    this.userRepository.create({
      name,
      email,
      password,
      driver_licence,
    });
  }
}

export { CreateUserUseCase };
