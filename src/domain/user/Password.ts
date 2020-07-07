import {ValueObject} from "../shared/ValueObject";

export class Password extends ValueObject<string>{

    static create(value: string): Password {
        if (Password.hasAnInvalidLength(value)) {
            throw new PasswordHasAnInvalidLength();
        }

        return new Password(value);
    }

    private static hasAnInvalidLength(value: string) {
        return value.length < 6;
    }
}

export class PasswordHasAnInvalidLength extends Error {}
