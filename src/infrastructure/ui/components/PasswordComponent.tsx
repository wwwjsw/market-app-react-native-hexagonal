import React, {FunctionComponent} from "react";
import {NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, TextStyle} from "react-native";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';

type PasswordProps = {
    style?: TextStyle | TextStyle[],
    value?: string,
    placeholder?: string,
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export const PasswordComponent: FunctionComponent<PasswordProps> = (props) => {
    const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style
    return (
        <PasswordContainer style={passedStyles}>
            <PasswordInput
                secureTextEntry={true}
                placeholder={props.placeholder}
                placeholderTextColor={'#FFFFFF'}
                value={props.value}
                onChange={props.onChange}
            />
            <AntDesign style={styles.icon} name="eye" size={24} color="white" />
        </PasswordContainer>
    );
};

const PasswordContainer = styled.View`
    width: 100%;
    height: 40px;
    border-color: #FFFFFF;
    border-width: 1px;
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
        width:24,
        borderColor: 'red',
        right: -10
    }
})

