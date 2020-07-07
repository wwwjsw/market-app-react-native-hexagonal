import { v4 as uuidv4 } from 'uuid';
import {UuidService} from "../../../../domain/shared/UuidService";
import {Uuid} from "../../../../domain/shared/Uuid";

export class LocalUuidService implements UuidService {
    nextId(): Uuid {
        return Uuid.create(uuidv4());
    }
}

