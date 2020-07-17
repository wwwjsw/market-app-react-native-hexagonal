import React, {useContext, useState} from "react";
import {KeyboardAvoidingView, Text, View} from "react-native";
import styled from 'styled-components/native';
import {SafeArea} from "../../components/SafeArea";
import {InputComponent} from "../../components/InputComponent";
import {ButtonComponent} from "../../components/ButtonComponent";
import {PasswordComponent} from "../../components/PasswordComponent";
import AppContext from "../../AppContext";
import {SignInView} from "./SignInView";
import {OnSignInUserPresenter} from "./OnSignInUserPresenter";
import {StackNavigationProp} from "@react-navigation/stack/lib/typescript/src/types";
import {RootStackParamList} from "../../Main";

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
type SignInScreenProps = {
    navigation: ProfileScreenNavigationProp;
};

const CleanErrors = {
    error: '',
    passwordError: '',
    emailError: ''
};

export default function SignInScreen(props: SignInScreenProps) {

    const appContext = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(CleanErrors);

    const view: SignInView = {
        showError: message => setErrors({...CleanErrors, error: message}),
        showEmailError: message => setErrors({...CleanErrors, emailError: message}),
        showPasswordError: message => setErrors({...CleanErrors, passwordError: message}),
        goHome:  () => { props.navigation.navigate('Home')}
    };

    const onSignInUser = new OnSignInUserPresenter(view, appContext.provider.signIn);

    const handleLogin = () => onSignInUser.handle(email, password);

    return (
        <Container>
            <BackgroundImage source={require('../../assets/background.png')}/>
            <SafeArea>
                <Logo source={require('../../assets/logo.png')}/>
                <TextLogo>Market App</TextLogo>
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                    <From>
                        {errors.error === undefined || errors.error.length > 0 && <ErrorText>{errors.error}</ErrorText>}
                        <FormItemContainer>
                            <InputComponent
                                placeholder={'Email or Username'}
                                value={email}
                                error={errors.emailError}
                                onChange={(e) => setEmail(e.nativeEvent.text)}
                            />
                        </FormItemContainer>
                        <FormItemContainer>
                            <PasswordComponent
                                placeholder={'Password'}
                                value={password}
                                error={errors.passwordError}
                                onChange={(e) => setPassword(e.nativeEvent.text)}
                            />
                        </FormItemContainer>
                        <ButtonComponent
                            text={'Login to my Account'}
                            onPress={() => { handleLogin(); }}
                        />
                        <TextNewUserContainer>
                            <TextNewUser>New User?</TextNewUser>
                            <TextSignUp>Signup now</TextSignUp>
                        </TextNewUserContainer>
                    </From>
                </KeyboardAvoidingView>
            </SafeArea>
        </Container>
    );
};


const Container = styled.View`
    flex: 1;
`;

const BackgroundImage = styled.Image`
    position: absolute;
    flex: 1;
    resize-mode: cover;
    width: 100%;
    height: 100%;
`;

const Logo = styled.Image`
    margin-top: 76px;
    align-self: center;
`;

const TextLogo = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    margin-top: 20px;
    align-self: center;
`;

const From = styled.View`
    flex: 1;
    margin-left: 40px;
    margin-right: 40px;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
`;

const TextNewUserContainer = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;

const TextNewUser = styled.Text`
    color: #FFFFFF;
    opacity: 0.7;
`;

const TextSignUp = styled.Text`
    color: #FFFFFF;
    margin-left: 5px;
`;

const FormItemContainer = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;


const ErrorText = styled.Text`
    color: #FF0000;
    margin-bottom: 10px;
`;
