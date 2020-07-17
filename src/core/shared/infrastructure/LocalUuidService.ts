import { v4 as uuidv4 } from 'uuid';
import {UuidService} from "../domain/UuidService";
import {Uuid} from "../domain/Uuid";

export class LocalUuidService implements UuidService {
    nextId(): Uuid {
        return Uuid.create(uuidv4());
    }
}

