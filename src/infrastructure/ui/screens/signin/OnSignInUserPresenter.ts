import {SignIn} from "../../../../application/user/SignIn";
import {SignInView} from "./SignInView";
import {InvalidCredentialsError} from "../../../../domain/user/AuthenticationService";
import {EmailIsEmpty, EmailIsInvalid} from "../../../../domain/user/Email";
import {PasswordHasAnInvalidLength} from "../../../../domain/user/Password";

export class OnSignInUserPresenter {
    private _signIn: SignIn;
    private _view: SignInView;

    constructor(view: SignInView, signIn: SignIn) {
        this._view = view;
        this._signIn = signIn;
    }

    async handle(email: string, password: string) {
        try {
            await this.tryToSigIn(email, password);
        } catch (e) {
            this.handleError(e);
        }
    }

    private async tryToSigIn(email: string, password: string) {
        await this._signIn.execute(email, password);
        this._view.goHome();
    }

    private handleError(error: Error) {
        if (error instanceof EmailIsEmpty) {
            this._view.showEmailError('the email is required');
        } else if (error instanceof EmailIsInvalid) {
            this._view.showEmailError('the email has a invalid format');
        } else if (error instanceof PasswordHasAnInvalidLength) {
            this._view.showPasswordError('the password is required');
        } else if (error instanceof InvalidCredentialsError) {
            this._view.showError('the credentials are invalid');
        } else {
            throw error;
        }
    }
}

