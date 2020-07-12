import React from 'react';
import styled from 'styled-components/native';

export const Product = () => {

    return (
        <ProductContainer>
            <ProductImage source={require('../../../assets/products/chair.png')}></ProductImage>
        </ProductContainer>
    );
};


const ProductContainer = styled.View`
    background-color: #ff0000;
`;


const ProductImage = styled.Image`
    align-self: center;
`;
