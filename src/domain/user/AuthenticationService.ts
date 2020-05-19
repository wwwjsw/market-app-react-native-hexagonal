import {Email} from "./Email";
import {Password} from "./Password";
import {User} from "./User";

export interface AuthenticationService {
    signUpWithEmailAndPassword(email: Email, password: Password): Promise<void>;
    signInWithEmailAndPassword(email: Email, password: Password): Promise<User>;
}

export class InvalidCredentialsError extends Error {}
