import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProductsScreen from "../Screens/ProductsScreen";
import ViewProductARScreen from "../Screens/ViewProductARScreen";
import MyPurchasesScreen from "../Screens/MyPurchasesScreen";
import AboutUsScreen from "../Screens/AboutUsScreen";

const { Navigator, Screen } = createMaterialBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Products" component={ProductsScreen} />
      <Screen name="ViewProductsAR" component={ViewProductARScreen} />
      <Screen name="AboutUs" component={AboutUsScreen} />
      <Screen name="MyPurchases" component={MyPurchasesScreen} />
    </Navigator>
  );
};

export default BottomNavigator;
