import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import ProductsScreen from "./src/Screens/ProductsScreen";
import UserLoginScreen from "./src/Screens/UserLoginScreen";
import UserSignUpScreen from "./src/Screens/UserSignUpScreen";
const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Products" component={ProductsScreen} />
        <Screen name="Login" component={UserLoginScreen} />
        <Screen name="SignUp" component={UserSignUpScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
