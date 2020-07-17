import {User} from "../domain/User";
import {Email} from "../domain/Email";
import {AuthenticationService} from "../domain/AuthenticationService";
import {Password} from "../domain/Password";

export class SignIn {
    constructor(private authenticationService: AuthenticationService) {
    }

    async execute(email: string, password: string): Promise<User> {
        return await this.authenticationService.signInWithEmailAndPassword(
            Email.create(email),
            Password.create(password)
        );
    }
}
