import React from "react";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStack = () => {
    return(
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
    </Stack.Navigator>);
};

export default AuthStack;
