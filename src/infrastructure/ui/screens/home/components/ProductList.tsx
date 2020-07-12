import React from 'react';
import {Text, ScrollView} from "react-native";
import styled from "styled-components/native";
import {Column, Row} from "../../../components/Grid";
import {Product} from "./Product";

const ProductList = () => {
    return (
        <CategoryContainer>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Row>
                    <Column>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                    </Column>
                    <Column>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                        <Product></Product>
                    </Column>
                </Row>

            </ScrollView>
        </CategoryContainer>

    );
};

export default ProductList;


const CategoryContainer = styled.View`
    flex:1;
    background-color: #ff0000;
`;


type CategoryProps = {
    isSelected?: boolean
}

const Category = styled.View<CategoryProps>`
    height: 29px;
    padding-left: 14px;
    padding-right: 14px;
    border-bottom-color: ${props => props.isSelected ? '#118DF0' : '#EFEFEF'};
    border-bottom-width: ${props => props.isSelected ? '2px' : '1px'};
    justify-content: center;
`;

const CategoryTitle = styled.Text<CategoryProps>`
    color: #3B3B3B; 
    font-size: 14px;
`;
