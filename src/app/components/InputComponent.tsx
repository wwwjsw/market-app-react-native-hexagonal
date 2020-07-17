import React, {FunctionComponent} from "react";
import {NativeSyntheticEvent, TextInputChangeEventData, View,} from "react-native";
import styled from "styled-components/native";
import {InputControl} from "./styled/InputControl";

type InputComponentProps = {
    value?: string,
    placeholder?: string,
    error?: string;
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export const InputComponent: FunctionComponent<InputComponentProps> = (props) => {
    return (
        <InputControl error={props.error}>
            <Input
                placeholder={props.placeholder}
                placeholderTextColor={'#FFFFFF'}
                value={props.value}
                autoCapitalize = 'none'
                onChange={props.onChange}
            />
        </InputControl>
    );
};

const Input = styled.TextInput`
    padding-left: 22px;
    padding-right: 22px;
    height: 40px;
    color: #FFFFFF;
`;



