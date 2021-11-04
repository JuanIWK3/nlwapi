import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });
    if (userAlreadyExists) {
      return response.status(201).json({
        //! 400
        error: "o registro do maluco já existe!",
      });
    }

    const user = usersRepository.create({
      name,
      email,
    });
    await usersRepository.save(user);
    return response.status(201).json(user);
  }
}

export { UserController };