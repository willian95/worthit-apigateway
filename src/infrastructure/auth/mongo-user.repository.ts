import { RegisterRepository } from "../../domain/auth/register.repository";
import { UserInterface } from "../../domain/auth/user.entity";

export class MongoUserRepository implements RegisterRepository{
    async storeUser(request: UserInterface): Promise<any> {
        console.log("repository", "user stored");
        return true;
    }

    
}