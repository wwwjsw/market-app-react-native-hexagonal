import {AuthenticationService, InvalidCredentialsError} from "../domain/AuthenticationService";
import {Password} from "../domain/Password";
import {Email} from "../domain/Email";
import {User} from "../domain/User";
import {Uuid} from "../../shared/domain/Uuid";
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


