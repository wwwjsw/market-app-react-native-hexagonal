import {Uuid} from "../../../src/domain/Uuid";
import {Email} from "../../../src/domain/user/Email";
import {User} from "../../../src/domain/user/User";

describe('User', () => {

    test('can create a user', () => {
        const id = '1';
        const email = 'juan@demo.com';

        const user = new User(Uuid.create(id), Email.create(email));

        expect(user).not.toBeNull();
        expect(user.id.equals(Uuid.create(id))).toBeTruthy();
        expect(user.email.equals(Email.create(email))).toBeTruthy();
    });
});
