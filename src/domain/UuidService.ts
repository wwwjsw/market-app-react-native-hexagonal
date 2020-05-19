import {Uuid} from "./Uuid";

export interface UuidService {
    nextId(): Uuid;
}
