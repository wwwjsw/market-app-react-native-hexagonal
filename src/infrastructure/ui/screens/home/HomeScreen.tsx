import React, {useContext, useEffect, useState} from 'react';
import {View, Text, ScrollView} from "react-native";
import {SafeArea} from "../../components/SafeArea";
import {TitleComponent} from "../../components/TitleComponent";
import CategoryList from "./components/CategroyList";
import {Page} from "../../components/styled/Page";
import ProductList from "./components/ProductList";
import {OnHomeScreenRender} from "./OnHomeScreenRender";
import {Category} from "../../../../domain/category/Category";
import {Product} from "../../../../domain/product/Product";
import {HomeView} from "./HomeView";
import AppContext from "../../AppContext";


const HomeScreen = () => {

    const appContext = useContext(AppContext);

    const [categories, setCategories] = useState<Category[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    const homeView: HomeView = {
        showCategories: setCategories,
        showProducts: setProducts
    };

    const onHomeScreenRender = new OnHomeScreenRender(homeView, appContext.provider.findAllCategories, appContext.provider.findAllProducts);

    useEffect(() => {

        async function fetchData() {
            await onHomeScreenRender.handle();
        }
        fetchData();



    }, []);

    return (
        <Page>
            <SafeArea>
                <Text>aca va el buscador</Text>
                <TitleComponent>Recently Added</TitleComponent>
                <CategoryList categories={categories}/>
                <ProductList/>
            </SafeArea>
        </Page>
    );
};

export default HomeScreen;

