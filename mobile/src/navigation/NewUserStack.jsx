import React from "react";
import OnBoarding from "../screens/OnBoarding";
import AuthStackNavigation from "./AuthStack";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

const NewUserStack = () => {
    <Stack.Navigator initialRouteName="Onboard">
        <Stack.Screen name="Onboard" component={OnBoarding} />
        <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>;
};

export default NewUserStack;
