import {UserModel} from "./user.model";

export interface Technician {
    id: number;
    name: string;
    user: UserModel
}
