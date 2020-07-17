import React, {FunctionComponent} from "react";
import {NativeSyntheticEvent, StyleSheet, TextInputChangeEventData} from "react-native";
import styled from "styled-components/native";
import {AntDesign} from '@expo/vector-icons';
import {InputControl} from "./styled/InputControl";

type PasswordProps = {
    value?: string,
    placeholder?: string,
    error?: string;
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export const PasswordComponent: FunctionComponent<PasswordProps> = (props) => {
    return (
        <InputControl error={props.error}>
            <PasswordControl>
                <PasswordInput
                    secureTextEntry={true}
                    placeholder={props.placeholder}
                    placeholderTextColor={'#FFFFFF'}
                    value={props.value}
                    autoCapitalize = 'none'
                    onChange={props.onChange}
                />
                <AntDesign style={styles.icon} name="eye" size={24} color="white"/>
            </PasswordControl>
        </InputControl>
    );
};

const PasswordControl = styled.View`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding-left: 22px;
    padding-right: 22px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`;

const PasswordInput = styled.TextInput`
    width: 100%;
    height: 100%;
    color: #ffffff;
    flex-shrink: 1;
`;

const styles = StyleSheet.create({
    icon: {
        width: 24,
        borderColor: 'red',
        right: -10
    }
});
