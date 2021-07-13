import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductsScreen from "../Screens/ProductsScreen";
import ViewProductARScreen from "../Screens/ViewProductARScreen";

import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import CartScreen from "../Screens/CartScreen";
import CheckOutScreen from "../Screens/CheckOutScreen";
import ProductStackNav from "./ProductStackNav";

import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const HomeStack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#B89068",
        },
        headerTintColor: "#fff",
        headerTitle: "",
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Products" component={ProductsScreen} />
      <HomeStack.Screen name="ProductsAR" component={ViewProductARScreen} />
      <HomeStack.Screen name="Login" component={LoginScreen} />
      <HomeStack.Screen name="Sign Up" component={SignUpScreen} />
      <HomeStack.Screen
        name="Forgot Password"
        component={ForgotPasswordScreen}
      />
      <HomeStack.Screen name="Cart" component={CartScreen} />
      <HomeStack.Screen name="CheckOut" component={CheckOutScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
