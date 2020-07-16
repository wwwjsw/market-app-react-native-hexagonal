import React from 'react';
import {ScrollView, View} from "react-native";
import styled from "styled-components/native";
import {ProductItem} from './ProductItem';
import {Product} from "../../../../../domain/product/Product";
import {Row} from "../../../components/Grid";

type ProductListProps = {
    products: Product[];
};

const ProductList = (props: ProductListProps) => {
    return (
        <ProductContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Row style={{flexWrap:'wrap'}}>
                        {props.products.map((product) => {
                            return (
                                <ProductItem key={product.id.value} product={product}></ProductItem>
                            );
                        })}
                </Row>
            </ScrollView>
        </ProductContainer>

    );
};

export default ProductList;

const ProductContainer = styled.View`
    flex:1;
`;


