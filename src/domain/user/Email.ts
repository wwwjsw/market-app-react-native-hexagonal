import {ValueObject} from "../shared/base/ValueObject";

export class Email extends ValueObject<string>{

    static create(value: string): Email {
        if (Email.isEmpty(value)) {
            throw new EmailIsEmpty();
        }

        if (Email.isAnInvalidExpresion(value)) {
            throw new EmailIsInvalid();
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

export class EmailIsEmpty extends Error {}
export class EmailIsInvalid extends Error {}
