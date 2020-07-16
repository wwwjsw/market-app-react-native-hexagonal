import React, {useContext, useEffect} from 'react';
import {Page} from "../../components/styled/Page";
import {SafeArea} from "../../components/SafeArea";
import styled from "styled-components/native";
import {StackNavigationProp} from "@react-navigation/stack/lib/typescript/src/types";
import {RootStackParamList} from "../../Main";
import {RouteProp} from '@react-navigation/native';
import AppContext from "../../AppContext";

type ProductScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Product'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

type ProductScreenProps = {
    navigation: ProductScreenNavigationProp;
    route: ProfileScreenRouteProp;
};

const ProductScreen = (props: ProductScreenProps) => {
    const appContext = useContext(AppContext);



    console.log(props.route.params.productId);




    return (
        <Page>
            <ProductImage />
            <SafeArea>
                <ProductLocation>Chennai, India,  2h ago</ProductLocation>
                <ProductTitleContainer>
                    <ProductTitleLabel>DJI Spark</ProductTitleLabel>
                    <ProductValueContainer>
                        <ProductValueSign>$</ProductValueSign>
                        <ProductValueValue>5000</ProductValueValue>
                    </ProductValueContainer>
                </ProductTitleContainer>
                <ProductDescription>
                    Selling my 2017 DJI Spark. Barely used, pretty new in condition and its the “Fly More Combo". No Negotiations please.
                    {'\n'} {'\n'}
                    Seize the Moment. Meet Spark, a mini drone that features all of DJI's signature technologies, allowing you to seize the moment whenever you feel inspired.
                </ProductDescription>
            </SafeArea>
        </Page>
    );
};

export default ProductScreen;



const ProductImage = styled.View`
    background-color: red;
    height: 50%;
`;

const ProductLocation= styled.Text`
    color: #A9A9B0;
    font-size: 12px;
`;

const ProductTitleContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const ProductTitleLabel = styled.Text`
    color: #3B3B3B;
    font-size: 24px;
    font-weight: bold;
`;

const ProductValueContainer = styled.View`
    flex-direction: row;
`;

const ProductValueSign = styled.Text`
    color: #3B3B3B;
    font-size: 10px;
    font-weight: bold;
`;

const ProductValueValue = styled.Text`
    color: #3B3B3B;
    font-size: 24px;
    font-weight: bold;
`;

const ProductDescription = styled.Text`
    color: #A9A9B0;
    font-size: 12px;
`;
