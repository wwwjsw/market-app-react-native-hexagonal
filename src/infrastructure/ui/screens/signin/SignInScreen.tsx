import React from "react";
import {
    Image,
    StyleSheet,
    View
} from "react-native";
import styled from 'styled-components/native';
import {SafeArea} from "../../components/SafeArea";
import {InputComponent} from "../../components/InputComponent";
import {ButtonComponent} from "../../components/ButtonComponent";
import {PasswordComponent} from "../../components/PasswordComponent";

export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={require('../../assets/background.png')}/>
            <SafeArea>
                <Image source={require('../../assets/logo.png')} style={styles.logo}/>
                <TextLogo>MarketPlace App</TextLogo>
                <From>
                    <InputComponent style={styles.inputEmail} placeholder={'Email or Username'}/>
                    <PasswordComponent style={styles.inputEmail} placeholder={'Password'}/>
                    <ButtonComponent text={'Login to my Account'}/>
                    <TextNewUserContainer>
                        <TextNewUser>New User?</TextNewUser>
                        <TextSignUp>Signup now</TextSignUp>
                    </TextNewUserContainer>

                </From>
            </SafeArea>
        </View>
    );
};

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


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        position: 'absolute',
        flex: 1,
        resizeMode: 'cover'
    },
    logo: {
        marginTop: 76,
        alignSelf: 'center'
    },
    inputEmail: {
        marginBottom: 20
    }
});
