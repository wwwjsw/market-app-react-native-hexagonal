import styled from "styled-components/native";
import React, {FunctionComponent} from "react";
import {View} from "react-native";

type InputControlProps = {
    error?: string;
};

export const InputControl: FunctionComponent<InputControlProps> = (props) => {
    const hasError = props.error === undefined || props.error.length > 0;
    return (
        <View>
            <InputControlContainer hasError={hasError}>
                {props.children}
            </InputControlContainer>
            {hasError && <ErrorText>{props.error}</ErrorText>}
        </View>

    );
};

const InputControlContainer= styled.View<InputControlProps>`
    width: 100%;
    border-width: 1px;
    border-radius: 20px;
    border-color: ${props => props.hasError ? '#FF0000': '#FFFFFF'};
`;

const ErrorText = styled.Text`
    color: #FF0000;
    margin-top: 4px;
    margin-left: 20px;
`;
