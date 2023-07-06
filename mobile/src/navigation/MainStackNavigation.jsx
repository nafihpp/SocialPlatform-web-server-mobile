import React, { useEffect, useLayoutEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TabNavigation from "./TabNavigation";
import NewUserStack from "./NewUserStack";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

export default function MainStackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {firstTimeUser &&             
                <Stack.Screen name="Newuser" component={NewUserStack} options={{ headerShown: false }} /> }
                {!authenticated &&             
                <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }}  /> }
                {authenticated &&
                   <Stack.Screen name="Homescreen" component={TabNavigation}  options={{ headerShown: false }} /> }
            </Stack.Navigator>
        </NavigationContainer>
    );r
}
