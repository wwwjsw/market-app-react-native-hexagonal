import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from "./screens/signup/SignUpScreen";
import AppContext from "./AppContext";
import {provider} from "../Provider";
import SignInScreen from "./screens/signin/SignInScreen";
import HomeScreen from './screens/home/HomeScreen';

const Stack = createStackNavigator();

export default function Main() {
    return (
        <AppContext.Provider value={{provider}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SigIn">
                    <Stack.Screen name="SigIn" component={SignInScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="SigUp" component={SignUpScreen}/>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
}
