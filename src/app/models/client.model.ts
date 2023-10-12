import {UserModel} from "./user.model";
import {Device} from "./device.model";

export interface Client {
      id: number;
      user: UserModel;
      plan: string;
}
