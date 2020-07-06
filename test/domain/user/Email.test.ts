import {Email, EmailIsEmpty, EmailIsInvalid} from "../../../src/domain/user/Email";

describe('Email value object', () => {

    test('Email cannot be empty', () => {
        const execute = () => {
            Email.create('');
        }

        expect(execute).toThrow(EmailIsEmpty);
    });

    test('Email cannot be a invalid, missing the @', () => {
        const execute = () => {
            Email.create('juandemo.com');
        }

        expect(execute).toThrow(EmailIsInvalid);
    });

    test('Email cannot be a invalid, missing the @', () => {
        const execute = () => {
            Email.create('juan@democom');
        }

        expect(execute).toThrow(EmailIsInvalid);
    });


    test('can create a valid Email', () => {
        const email = Email.create('juan@demo.com');

        expect(email).not.toBeNull();
        expect(email.value).toBe('juan@demo.com');
    });

    test('test to string', () => {
        const email = Email.create('juan@demo.com');

        expect(email.toString()).toBe('Value:juan@demo.com')
    });

    test('two emails are equals', () => {
        const emailA = Email.create('juan@demo.com');
        const emailB = Email.create('juan@demo.com');

        expect(emailA).toBeEquals(emailB);
    });

    test('two emails are not equals', () => {
        const emailA = Email.create('juan@demo.com');
        const emailB = Email.create('juanq@demo.com');

        expect(emailA).not.toBeEquals(emailB);
    });
});
