import { RegisterUseCase } from "../application/auth/register.usecase";
import { MongoUserRepository } from "./auth/mongo-user.repository";
import { RegisterController } from "./auth/register.controller";


const mongoUserRepository = new MongoUserRepository();
export const registerUseCase = new RegisterUseCase(mongoUserRepository); 
export const registerController = new RegisterController(registerUseCase);