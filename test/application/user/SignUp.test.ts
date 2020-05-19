import {anything, capture, instance, mock, verify} from "ts-mockito";
import {SignUp} from "../../../src/application/user/SignUp";
import {AuthenticationService} from "../../../src/domain/user/AuthenticationService";
import {Password} from "../../../src/domain/user/Password";
import {Email} from "../../../src/domain/user/Email";

describe('SignUp', () => {

    let action: SignUp;
    let authenticationService: AuthenticationService;

    test('should register a new user', async () => {
        const email = 'juan@demo.com';
        const password = '123456';

        given_an_action();
        await when_the_action_is_executed_with_these_data(email, password);
        then_the_authentication_service_is_called_with_these_data(email, password);
    });

    function given_an_action() {
        authenticationService = mock<AuthenticationService>();
        action = new SignUp(instance(authenticationService));
    }

    async function when_the_action_is_executed_with_these_data(email: string, password: string) {
        await action.execute(email, password);
    }

    function then_the_authentication_service_is_called_with_these_data(email: string, password: string) {
        verify(authenticationService.signUpWithEmailAndPassword(anything(), anything())).called();
        const [emailParameter, passwordParameter] = capture(authenticationService.signUpWithEmailAndPassword).last();

        expect(emailParameter.equals(Email.create(email))).toBeTruthy();
        expect(passwordParameter.equals(Password.create(password))).toBeTruthy();
    }
});
