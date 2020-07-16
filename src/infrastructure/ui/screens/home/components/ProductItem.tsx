import React from 'react';
import styled from 'styled-components/native';
import {Product} from "../../../../../domain/product/Product";

type ProductItemProps = {
    product: Product;
}

export const ProductItem = (props: ProductItemProps) => {
    return (
        <ProductContainer>
            <ProductImage source={{uri: props.product.images[0]}} ></ProductImage>
            <ProductName>{props.product.title.value}</ProductName>
            <ProductPrice>
                <ProductPriceSign>$</ProductPriceSign>
                <ProductPriceValue>{props.product.value.value}</ProductPriceValue>
            </ProductPrice>
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
    font-size: 12px;
    color: #A9A9B0;
`;

const ProductPrice= styled.View`
    flex-direction: row;
`;

const ProductPriceSign= styled.Text`
    font-size: 12px;
    color: #A9A9B0;
    margin-right: 3px;
`;

const ProductPriceValue= styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #3B3B3B;
`;
