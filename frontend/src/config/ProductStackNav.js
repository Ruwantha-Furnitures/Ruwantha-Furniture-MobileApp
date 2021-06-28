import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsScreen from "../Screens/ProductsScreen";
import ViewProductARScreen from "../Screens/ViewProductARScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import SingleProductScreen from "../Screens/SingleProductScreen";
import MoreDetailsScreen from "../Screens/MoreDetailsScreen";
const ProductStack = createStackNavigator();
const ProductStackNav = () => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#291B1B",
        },
        headerTintColor: "#fff",
      }}
    >
      <ProductStack.Screen name="Products" component={ProductsScreen} />
      <ProductStack.Screen name="More Details" component={MoreDetailsScreen} />
      <ProductStack.Screen name="ProductsAR" component={ViewProductARScreen} />
      <ProductStack.Screen name="Login" component={LoginScreen} />
      <ProductStack.Screen name="Sign Up" component={SignUpScreen} />
      <ProductStack.Screen
        name="Single Product"
        component={SingleProductScreen}
      />
    </ProductStack.Navigator>
  );
};

export default ProductStackNav;
