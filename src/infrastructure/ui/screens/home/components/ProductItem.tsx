import React from 'react';
import styled from 'styled-components/native';
import {Product} from "../../../../../domain/product/Product";
import {TouchableHighlight} from "react-native";
import {Uuid} from "../../../../../domain/shared/Uuid";

type ProductItemProps = {
    product: Product;
    onProductSelect: (productId: Uuid) => void;
}

export const ProductItem = (props: ProductItemProps) => {
    return (
        <TouchableHighlight style={{width: '50%'}} onPress={() => { props.onProductSelect(props.product.id)}} underlayColor="white">
            <ProductContainer>
                <ProductImage source={{uri: props.product.images[0]}} ></ProductImage>
                <ProductName>{props.product.title.value}</ProductName>
                <ProductPrice>
                    <ProductPriceSign>$</ProductPriceSign>
                    <ProductPriceValue>{props.product.value.value}</ProductPriceValue>
                </ProductPrice>
            </ProductContainer>
        </TouchableHighlight>
    );
};

const ProductContainer = styled.View`
    width: 100%;
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
