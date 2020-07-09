import React, {useContext, useState} from "react";
import {KeyboardAvoidingView, Text} from "react-native";
import styled from 'styled-components/native';
import {SafeArea} from "../../components/SafeArea";
import {InputComponent} from "../../components/InputComponent";
import {ButtonComponent} from "../../components/ButtonComponent";
import {PasswordComponent} from "../../components/PasswordComponent";
import AppContext from "../../AppContext";
import {SignInView} from "./SignInView";
import {OnSignInUser} from "./OnSignInUser";

export default function SignInScreen() {

    const appContext = useContext(AppContext);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');

    const view: SignInView = {
        showError: setError,
        showEmailError: setEmailError,
        showPasswordError: setPasswordError,
        goHome: () => { console.log('goHome'); }
    };

    const onSignInUser = new OnSignInUser(view, appContext.provider.signIn);

    const handleLogin = () => onSignInUser.handle(email, password);

    return (
        <Container>
            <BackgroundImage source={require('../../assets/background.png')}/>
            <SafeArea>
                <Logo source={require('../../assets/logo.png')}/>
                <TextLogo>Market App</TextLogo>
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
                    <From>
                        <Text>{emailError}</Text>
                        <Text>{passwordError}</Text>
                        <Text>{error}</Text>
                        <FormItemContainer>
                            <InputComponent
                                placeholder={'Email or Username'}
                                value={email}
                                onChange={(e) => setEmail(e.nativeEvent.text)}
                            />
                        </FormItemContainer>
                        <FormItemContainer>
                            <PasswordComponent
                                placeholder={'Password'}
                                value={password}
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
