import {User} from "../../domain/user/User";
import {Email} from "../../domain/user/Email";
import {AuthenticationService} from "../../domain/user/AuthenticationService";
import {Password} from "../../domain/user/Password";

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
