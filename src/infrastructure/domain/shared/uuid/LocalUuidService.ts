import { v4 as uuidv4 } from 'uuid';
import {UuidService} from "../../../../domain/shared/uuid/UuidService";
import {Uuid} from "../../../../domain/shared/uuid/Uuid";

export class LocalUuidService implements UuidService {
    nextId(): Uuid {
        return Uuid.create(uuidv4());
    }
}

