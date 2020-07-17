import {AuthenticationService} from "../domain/AuthenticationService";
import {Email} from "../domain/Email";
import {Password} from "../domain/Password";

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
