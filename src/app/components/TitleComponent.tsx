import React, {FunctionComponent} from "react";
import styled from "styled-components/native";

type TitleProps = {
}

export const TitleComponent: FunctionComponent<TitleProps> = (props) => {
    return (
        <Title>
            {props.children}
        </Title>
    );
}

const Title = styled.Text`
    color: #3B3B3B; 
    font-weight: bold;
    font-size: 24px;
`;
