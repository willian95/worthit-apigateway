import { RegisterRepository } from "../../domain/auth/register.repository"

export class RegisterUseCase {

    constructor(private readonly registerRepository: RegisterRepository){}

    async signUp(email: string, password: string): Promise<boolean> {
        const user = await this.registerRepository.storeUser({email, password})
        return user
    }
}