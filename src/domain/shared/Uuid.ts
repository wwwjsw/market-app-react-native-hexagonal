import {ValueObject} from "./ValueObject";

export class Uuid extends ValueObject<string> {
    static create(value: string): Uuid {
        if (value.length === 0) {
            throw new InvalidUuidError();
        }
        return new Uuid(value);
    }
}

export class InvalidUuidError extends Error {
}
