import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsScreen from "../Screens/ProductsScreen";
import ViewProductARScreen from "../Screens/ViewProductARScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import MoreDetailsScreen from "../Screens/MoreDetailsScreen";
const ProductStack = createStackNavigator();
const ProductStackNav = () => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#B89068",
        },
        headerTintColor: "#fff",
      }}
    >
      <ProductStack.Screen name="Products" component={ProductsScreen} />
      <ProductStack.Screen name="More Details" component={MoreDetailsScreen} />
      <ProductStack.Screen name="ProductsAR" component={ViewProductARScreen} />
      <ProductStack.Screen name="Login" component={LoginScreen} />
      <ProductStack.Screen name="Sign Up" component={SignUpScreen} />
    </ProductStack.Navigator>
  );
};

export default ProductStackNav;
