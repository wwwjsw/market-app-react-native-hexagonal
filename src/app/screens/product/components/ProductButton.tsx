import styled from "styled-components/native";
import {Text} from "react-native";
import React from "react";

type ProductButtonProps = {
    label: string;
    dark?: boolean;
}

export const ProductButton = ({label, dark}: ProductButtonProps) => {
    return (
        <Container dark={dark}>
            <Text>{label}</Text>
        </Container>
    );
};

type CotainerProps = {
    dark?: boolean;
};

const Container = styled.View<CotainerProps>`
    padding: 11px;
    border-radius: 20px;
    color: ${props => props.dark? '#FFFFFF': '#000000'}
    backgroundColor: ${props => props.dark? '#118DF0': '#F6F6F6'}
`;

