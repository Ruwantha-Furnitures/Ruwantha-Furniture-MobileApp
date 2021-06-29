import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ProductsScreen from "../Screens/ProductsScreen";
import ViewProductARScreen from "../Screens/ViewProductARScreen";
import MyPurchasesScreen from "../Screens/MyPurchasesScreen";
import AboutUsScreen from "../Screens/AboutUsScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
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
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Products" component={ProductsScreen} />
      <HomeStack.Screen name="ProductsAR" component={ViewProductARScreen} />
      <HomeStack.Screen name="MyPurchases" component={MyPurchasesScreen} />
      <HomeStack.Screen name="AboutsUs" component={AboutUsScreen} />
      <HomeStack.Screen name="Login" component={LoginScreen} />
      <HomeStack.Screen name="Sign Up" component={SignUpScreen} />
      <HomeStack.Screen
        name="Forgot Password"
        component={ForgotPasswordScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
