import styled from "styled-components/native";
import React, {FunctionComponent} from "react";
import {View} from "react-native";

type InputControlProps = {
    error?: string;
};

export const Page: FunctionComponent<InputControlProps> = (props) => {
    return (
        <PageContainer>
            {props.children}
        </PageContainer>
    );
};

const PageContainer= styled.View<InputControlProps>`
    background: #FFFFFF';
    width: 100%;
    height: 100%;
`;
