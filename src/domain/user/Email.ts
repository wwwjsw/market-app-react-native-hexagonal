import {ValueObject} from "../ValueObject";

export class Email extends ValueObject<string>{

    static create(value: string): Email {
        if (Email.isEmpty(value)) {
            throw new EmptyEmailError();
        }

        if (Email.isAnInvalidExpresion(value)) {
            throw new InvalidEmailError();
        }

        return new Email(value);
    }

    private static isEmpty(value: string) {
        return value.length === 0;
    }

    private static isAnInvalidExpresion(value: string) {
        return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    }

}

export class EmptyEmailError extends Error {}
export class InvalidEmailError extends Error {}
