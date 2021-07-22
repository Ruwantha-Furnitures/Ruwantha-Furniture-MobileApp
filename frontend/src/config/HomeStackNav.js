import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/Customer/HomeScreen";
import ProductsScreen from "../Screens/Customer/ProductsScreen";
import ViewProductARScreen from "../Screens/Customer/ViewProductARScreen";

import LoginScreen from "../Screens/Customer/LoginScreen";
import SignUpScreen from "../Screens/Customer/SignUpScreen";
import ForgotPasswordScreen from "../Screens/Customer/ForgotPasswordScreen";
import CartScreen from "../Screens/Customer/CartScreen";
import CheckOutScreen from "../Screens/Customer/CheckOutScreen";
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
