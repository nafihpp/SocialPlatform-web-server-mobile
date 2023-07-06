import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/AntDesign";
import Homepage from "../screens/Homepage";
import OnBoard from "../screens/OnBoarding";
import Cart from "../screens/Cart";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    const [quantity, setQuantity] = useState(2);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#010303",
                tabBarStyle: {},
            }}
        >
            <Tab.Screen
                name="Home"
                component={Homepage}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <Icon
                            name="home"
                            size={focused ? size : 21}
                            color={focused ? "#900" : "#000"}
                            style={{
                                borderTopWidth: 5,
                                borderTopColor: "black",
                            }}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => {
                        return (
                            <Text
                                style={{
                                    marginBottom: 5,
                                    color: focused ? "red" : "black",
                                }}
                            >
                                Home
                            </Text>
                        );
                    },
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Categories"
                component={OnBoard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => (
                        <Icon
                            name="appstore-o"
                            size={focused ? size : 21}
                            color={focused ? "#900" : "#000"}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => {
                        return (
                            <Text
                                style={{
                                    marginBottom: 5,
                                    color: focused ? "red" : "black",
                                }}
                            >
                                Categories
                            </Text>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Account"
                component={Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => (
                        <>
                            <Icon
                                name="shoppingcart"
                                size={focused ? size : 21}
                                color={focused ? "#900" : "#000"}
                            />
                            {quantity > 0 && (
                                <View
                                    style={[
                                        styles.badge,
                                        {
                                            backgroundColor: focused
                                                ? "green"
                                                : "black",
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.badgeText,
                                            {
                                                color: focused
                                                    ? "white"
                                                    : "white",
                                            },
                                        ]}
                                    >
                                        {quantity}
                                    </Text>
                                </View>
                            )}
                        </>
                    ),
                    tabBarLabel: ({ focused, color }) => {
                        return (
                            <Text
                                style={{
                                    marginBottom: 5,
                                    color: focused ? "red" : "black",
                                }}
                            >
                                Cart
                            </Text>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="account"
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => (
                        <Icon
                            name="user"
                            size={focused ? size : 21}
                            color={focused ? "#900" : "#000"}
                        />
                    ),
                    tabBarLabel: ({ focused, color }) => {
                        return (
                            <Text
                                style={{
                                    marginBottom: 5,
                                    color: focused ? "red" : "black",
                                }}
                            >
                                Account
                            </Text>
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    badge: {
        position: "absolute",
        top: 13,
        right: 24,
        backgroundColor: "#000",
        paddingVertical: 3,
        paddingHorizontal: 6,
        borderRadius: 15,
    },
    badgeText: {
        color: "#fff",
        fontSize: 12,
    },
    TextStyle: {},
});
