import {AuthenticationService} from "../../domain/user/AuthenticationService";
import {Email} from "../../domain/user/Email";
import {Password} from "../../domain/user/Password";

export class SignUp {
    constructor(private authenticationService: AuthenticationService) {
    }

    async execute(email: string, password: string): Promise<void> {
        await this.authenticationService.signUpWithEmailAndPassword(
            Email.create(email),
            Password.create(password)
        );
    }
}
