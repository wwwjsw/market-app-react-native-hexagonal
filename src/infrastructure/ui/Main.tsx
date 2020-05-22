import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from "./screens/signin/SignInScreen";
import SignUpScreen from "./screens/signup/SignUpScreen";

const Stack = createStackNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SigIn">
                <Stack.Screen name="SigIn" component={SignInScreen} options={{ headerShown : false}} />
                <Stack.Screen name="SigUP" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
