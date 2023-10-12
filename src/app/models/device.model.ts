import {Client} from "./client.model";

export interface Device {
    id: number;
    brand: string;
    model: string;
    model_image: string;
    client: Client;
    problem: string;
    type: string;
}
