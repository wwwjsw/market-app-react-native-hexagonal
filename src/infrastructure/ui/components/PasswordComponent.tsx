import React, {FunctionComponent} from "react";
import {StyleSheet, TextInput, TextStyle} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

type PasswordProps = {
    style?: TextStyle | TextStyle[],
    placeholder?: string
}

export const PasswordComponent: FunctionComponent<PasswordProps> = (props) => {
    const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style
    return (
        <PasswordContainer style={passedStyles}>
            <PasswordInput
                placeholder={props.placeholder}
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
        borderWidth: 1,
        right: -10
    }
})

