import React, {useContext, useEffect, useState} from 'react';
import {Text} from "react-native";
import {SafeArea} from "../../components/SafeArea";
import {TitleComponent} from "../../components/TitleComponent";
import CategoryList from "./components/CategroyList";
import {Page} from "../../components/styled/Page";
import ProductList from "./components/ProductList";
import {Category} from "../../../core/category/domain/Category";
import {Product} from "../../../core/product/domain/Product";
import {HomeView} from "./HomeView";
import AppContext from "../../AppContext";
import {StackNavigationProp} from "@react-navigation/stack/lib/typescript/src/types";
import {RootStackParamList} from "../../Main";
import {Uuid} from "../../../core/shared/domain/Uuid";
import {OnScreenRenderPresenter} from "./OnScreenRenderPresenter";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
};

const HomeScreen = (props: HomeScreenProps) => {
    const appContext = useContext(AppContext);

    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const homeView: HomeView = {
        showCategories: setCategories,
        showProducts: setProducts
    };

    const onProductSelect = (productId: Uuid) => {
        props.navigation.navigate('Product', {
            productId
        });
    };

    const onScreenRenderPresenter = new OnScreenRenderPresenter(homeView, appContext.provider.findAllCategories, appContext.provider.findAllProducts);

    useEffect(() => {
        onScreenRenderPresenter.handle();
    }, []);

    return (
        <Page>
            <SafeArea>
                <Text>aca va el buscador</Text>
                <TitleComponent>Recently Added</TitleComponent>
                <CategoryList categories={categories}/>
                <ProductList products={products} onProductSelect={onProductSelect}/>
            </SafeArea>
        </Page>
    );
};

export default HomeScreen;

