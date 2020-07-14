import React from 'react';
import styled from 'styled-components/native';
import {Product} from "../../../../../domain/product/Product";

type ProductItemProps = {
    product: Product;
}

export const ProductItem = (props: ProductItemProps) => {
    console.log('productItem', props.product);
    console.log('img', props.product.images[0]);
    return (
        <ProductContainer>
            <ProductImage source={{uri: props.product.images[0]}} ></ProductImage>
            <ProductName>{props.product.title.value}</ProductName>
        </ProductContainer>
    );
};


const ProductContainer = styled.View`
    width: 50%;
    padding: 5px;
`;

const ProductImage = styled.Image`
    align-self: center;
    width:100%;
    height: 200px;
    border-radius: 15px;
`;

const ProductName = styled.Text`
    font-size: 20px;
`;
