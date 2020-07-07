import {anything, capture, instance, mock, verify, when} from "ts-mockito";
import {SignIn} from "../../../src/application/user/SignIn";
import {AuthenticationService} from "../../../src/domain/user/AuthenticationService";
import {User} from "../../../src/domain/user/User";
import {Uuid} from "../../../src/domain/shared/Uuid";
import {Email} from "../../../src/domain/user/Email";
import {Password} from "../../../src/domain/user/Password";

describe('SignIn should', () => {

    let action: SignIn;
    let authenticationService: AuthenticationService;
    let user: User;

    test('perform a authentication', async () => {
        const id = '1';
        const email = 'juan@demo.com';
        const password = '123456';

        given_an_action();
        and_user_with_these_data(id, email);

        await when_the_action_is_executed_with_these_data(email, password);
        then_the_authentication_service_is_called_with_these_data(email, password);
        then_the_user_has_these_data(id, email);
    });

    function given_an_action() {
        authenticationService = mock<AuthenticationService>();
        action = new SignIn(instance(authenticationService));
    }

    function and_user_with_these_data(id: string, email: string) {
        when(authenticationService.signInWithEmailAndPassword(anything(), anything())).thenResolve(new User(Uuid.create(id), Email.create(email)));
    }

    async function when_the_action_is_executed_with_these_data(email: string, password: string) {
        user = await action.execute(email, password);
    }

    function then_the_authentication_service_is_called_with_these_data(email: string, password: string) {
        verify(authenticationService.signInWithEmailAndPassword(anything(), anything())).called();
        const [emailParameter, passwordParameter] = capture(authenticationService.signInWithEmailAndPassword).last();

        expect(emailParameter.equals(Email.create(email)));
        expect(passwordParameter.equals(Password.create(password)));
    }

    function then_the_user_has_these_data(id: string, email: string) {
        expect(user).not.toBeNull();
        expect(user.id.equals(Uuid.create(id))).toBeTruthy();
        expect(user.email.equals(Email.create(email))).toBeTruthy();
    }

});

