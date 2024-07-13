import { UserInterface } from "./user.entity";

export interface RegisterRepository {
    storeUser(request: UserInterface): Promise<any>;
}