import {anything, capture, instance, mock, verify} from "ts-mockito";
import {SignUp} from "../../../../src/core/user/application/SignUp";
import {AuthenticationService} from "../../../../src/core/user/domain/AuthenticationService";
import {Password, PasswordHasAnInvalidLength} from "../../../../src/core/user/domain/Password";
import {Email, EmailIsEmpty, EmailIsInvalid} from "../../../../src/core/user/domain/Email";

describe('SignUp should', () => {

    const ANY_EMAIL = 'juan@demo.com';
    const ANY_PASSWORD = '123456';

    let action: SignUp;
    let authenticationService: AuthenticationService;
    let executor: () => void;

    test('should register a new user', async () => {
        given_an_sign_up_use_case();
        await when_the_use_case_is_executed_with(ANY_EMAIL, ANY_PASSWORD);
        then_the_authentication_service_was_called_with(ANY_EMAIL, ANY_PASSWORD);
    });

    describe('validate the password', () => {

        test('when is less that 6 characters', async () => {
            const password = '';

            given_an_sign_up_use_case();

            await when_the_use_case_is_executed_with_error(ANY_EMAIL, password);

            then_the_action_throw_this_error(PasswordHasAnInvalidLength);
            then_the_authentication_service_was_not_called();
        });

    });


    describe('validate the email', () => {

        test('when is empty', async () => {
            const empty_email = '';

            given_an_sign_up_use_case();

            await when_the_use_case_is_executed_with_error(empty_email, ANY_PASSWORD);

            then_the_action_throw_this_error(EmailIsEmpty);
            then_the_authentication_service_was_not_called();
        });

        test('when is an invalid value, missing the @', async () => {
            const empty_email = 'juandemo.com';

            given_an_sign_up_use_case();

            await when_the_use_case_is_executed_with_error(empty_email, ANY_PASSWORD);

            then_the_action_throw_this_error(EmailIsInvalid);
            then_the_authentication_service_was_not_called();
        });

        test('when is an invalid value, missing the .com', async () => {
            const empty_email = 'juan@democom';

            given_an_sign_up_use_case();

            await when_the_use_case_is_executed_with_error(empty_email, ANY_PASSWORD);

            then_the_action_throw_this_error(EmailIsInvalid);
            then_the_authentication_service_was_not_called();
        });

    });

    function given_an_sign_up_use_case() {
        authenticationService = mock<AuthenticationService>();
        action = new SignUp(instance(authenticationService));
    }

    async function when_the_use_case_is_executed_with(email: string, password: string) {
        await action.execute(email, password);
    }

    async function when_the_use_case_is_executed_with_error(email: string, password: string) {
        executor = async () => {
            await action.execute(email, password);
        };
    }

    function then_the_authentication_service_was_called_with(email: string, password: string) {
        verify(authenticationService.signUpWithEmailAndPassword(anything(), anything())).called();
        const [emailParameter, passwordParameter] = capture(authenticationService.signUpWithEmailAndPassword).last();

        expect(emailParameter.equals(Email.create(email))).toBeTruthy();
        expect(passwordParameter.equals(Password.create(password))).toBeTruthy();
    }

    async function then_the_action_throw_this_error(error: any) {
        await expect(executor()).rejects.toThrow(error);
        //expect(executor).toThrow(error); --> jest no lo soporta
    }

    function then_the_authentication_service_was_not_called() {
        verify(authenticationService.signUpWithEmailAndPassword(anything(), anything())).never()
    }
});
