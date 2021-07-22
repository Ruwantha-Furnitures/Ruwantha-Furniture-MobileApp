import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsScreen from "../Screens/Customer/ProductsScreen";
import ViewProductARScreen from "../Screens/Customer/ViewProductARScreen";
import LoginScreen from "../Screens/Customer/LoginScreen";
import SignUpScreen from "../Screens/Customer/SignUpScreen";
import MoreDetailsScreen from "../Screens/Customer/MoreDetailsScreen";
import CartScreen from "../Screens/Customer/CartScreen";
import CheckOutScreen from "../Screens/Customer/CheckOutScreen";

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
        headerTitle: "",
      }}
    >
      <ProductStack.Screen name="Products" component={ProductsScreen} />
      <ProductStack.Screen name="More Details" component={MoreDetailsScreen} />
      <ProductStack.Screen name="ProductsAR" component={ViewProductARScreen} />
      <ProductStack.Screen name="Login" component={LoginScreen} />
      <ProductStack.Screen name="Sign Up" component={SignUpScreen} />
      <ProductStack.Screen name="Cart" component={CartScreen} />
      <ProductStack.Screen name="CheckOut" component={CheckOutScreen} />
    </ProductStack.Navigator>
  );
};

export default ProductStackNav;
