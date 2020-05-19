import {ValueObject} from "../ValueObject";

export class Password extends ValueObject<string>{

    static create(value: string): Password {
        if (Password.hasAnInvalidLength(value)) {
            throw new InvalidLengthPasswordError();
        }

        return new Password(value);
    }

    private static hasAnInvalidLength(value: string) {
        return value.length < 6;
    }
}

export class InvalidLengthPasswordError extends Error {}
