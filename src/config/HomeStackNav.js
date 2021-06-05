import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductsScreen from "../Screens/ProductsScreen";
import ViewProductARScreen from "../Screens/ViewProductARScreen";
import MyPurchasesScreen from "../Screens/MyPurchasesScreen";
import AboutUsScreen from "../Screens/AboutUsScreen";
import LoginScreen from "../Screens/LoginScreen";
const HomeStack = createStackNavigator();
const HomeStackNav = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Products" component={ProductsScreen} />
      <HomeStack.Screen name="ProductsAR" component={ViewProductARScreen} />
      <HomeStack.Screen name="MyPurchases" component={MyPurchasesScreen} />
      <HomeStack.Screen name="AboutsUs" component={AboutUsScreen} />
      <HomeStack.Screen name="Login" component={LoginScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
