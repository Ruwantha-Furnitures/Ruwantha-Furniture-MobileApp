import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigation from "./src/config/HomeNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigator from "./src/config/BottomNavigator";

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    // {/* <NavigationContainer>
    //   <Navigator>
    //     <Screen name="Home" component={HomeScreen} />
    //     <Screen name="Products" component={ProductsScreen} />
    //     <Screen name="Login" component={UserLoginScreen} />
    //     <Screen name="SignUp" component={UserSignUpScreen} />
    //   </Navigator>
    // </NavigationContainer> */}

    // <NavigationContainer>
    //   <BottomNavigator />
    // </NavigationContainer>

    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
