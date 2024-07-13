import { Request, Response } from "express"
import { RegisterUseCase } from "../../application/auth/register.usecase"

export class RegisterController {

    constructor(private readonly registerUseCase: RegisterUseCase) { }

    async signUp(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        console.log("registerController", request.body)
        await this.registerUseCase.signUp(request.body.email, request.body.password)
        return response.status(200).json(true)
    }
}