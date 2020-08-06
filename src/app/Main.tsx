import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from "./screens/signup/SignUpScreen";
import AppContext from "./AppContext";
import {provider} from "./Provider";
import SignInScreen from "./screens/signin/SignInScreen";
import HomeScreen from './screens/home/HomeScreen';
import ProductScreen from "./screens/product/ProductScreen";
import {Uuid} from "../core/shared/domain/Uuid";

export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
    Product: {
        productId: Uuid
    };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Main() {
    return (
        <AppContext.Provider value={{provider}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="SignUp" component={SignUpScreen}/>
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Product" component={ProductScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
}
