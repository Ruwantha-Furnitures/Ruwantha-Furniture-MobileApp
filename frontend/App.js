import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigator from "./src/config/BottomNavigator";

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
