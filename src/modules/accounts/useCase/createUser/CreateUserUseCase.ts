import { hash } from "bcryptjs";
import { injectable, inject } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
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

    const passwordHash = await hash(password, 8);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    this.userRepository.create({
      name,

      email,

      password: passwordHash,

      driver_licence,
    });
  }
}

export { CreateUserUseCase };
