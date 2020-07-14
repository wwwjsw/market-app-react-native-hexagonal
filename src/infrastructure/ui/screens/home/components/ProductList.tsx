import React from 'react';
import {Dimensions, ScrollView, View} from "react-native";
import styled from "styled-components/native";
import {ProductItem} from './ProductItem';
import {Product} from "../../../../../domain/product/Product";
import {Column, Row} from "../../../components/Grid";

type ProductListProps = {
    products: Product[];
};

const ProductList = (props: ProductListProps) => {
    return (
        <CategoryContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Row style={{flexWrap:'wrap'}}>
                        {props.products.map((product) => {
                            return (
                                <ProductItem key={product.id.value} product={product}></ProductItem>
                            );
                        })}
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


const MasonryItem = styled.View<View>`
    background-color: #00ff00;
`;
