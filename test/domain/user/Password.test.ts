import {InvalidLengthPasswordError, Password} from "../../../src/domain/user/Password";

describe('A password should', () => {

    test('cannot be less that 6 characters', () => {
        const execute = () => {
            Password.create('');
        };

        expect(execute).toThrow(InvalidLengthPasswordError);
    });

    test('can create a valid password', () => {
        const password = Password.create('123456');

        expect(password).not.toBeNull();
        expect(password.value).toBe('123456');
    });

    test('equal two password', () => {
        const passwordA = Password.create('123456');
        const passwordB = Password.create('123456');

        expect(passwordA).toBeEquals(passwordB);
    });

    test('not equal two password', () => {
        const passwordA = Password.create('123456');
        const passwordB = Password.create('1234562');

        expect(passwordA).not.toBeEquals(passwordB);
    });
});
