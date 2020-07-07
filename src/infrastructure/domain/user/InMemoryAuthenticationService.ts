import {AuthenticationService, InvalidCredentialsError} from "../../../domain/user/AuthenticationService";
import {Password} from "../../../domain/user/Password";
import {Email} from "../../../domain/user/Email";
import {User} from "../../../domain/user/User";
import {Uuid} from "../../../domain/shared/Uuid";
import data from './users.json';

export class InMemoryAuthenticationService implements AuthenticationService {
    private users = new Map<string, UserRecord>();

    constructor() {
        data.forEach((row) => {
            this.users.set(
                row.email,
                new UserRecord(
                    Uuid.create(row.id),
                    Email.create(row.email),
                    Password.create(row.password)
                )
            );
        });
    }

    signInWithEmailAndPassword(email: Email, password: Password): Promise<User> {
        const record = this.users.get(email.value);

        if (record === undefined) {
            throw new InvalidCredentialsError();
        }

        if (!record.password.equals(password)) {
            throw new InvalidCredentialsError();
        }

        return Promise.resolve(new User(record.uuid, record.email));
    }

    signUpWithEmailAndPassword(email: Email, password: Password): Promise<void> {
        this.users.set(email.value, new UserRecord(Uuid.create('3'), email, password));
        return Promise.resolve();
    }
}

class UserRecord {
    uuid: Uuid;
    email: Email;
    password: Password;

    constructor(uuid: Uuid, email: Email, password: Password) {
        this.uuid = uuid;
        this.email = email;
        this.password = password;
    }
}


