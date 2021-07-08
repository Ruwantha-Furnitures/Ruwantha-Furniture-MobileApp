import React, { useMemo, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigator from "./src/config/BottomNavigator";
import LoggedInNavigator from "./src/config/LoggedInNavigator";
import { AuthContext } from "./src/Components/Context/AuthContext";
const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const value ={
    userToken,
    setUserToken
  }

  const authContext = useMemo(() => {
    signIn: () => {
      setUserToken("Abc");
    };
    signOut: () => {
      setUserToken(null);
    };
  });

  return (
    <AuthContext.Provider value={value}>
      <NavigationContainer>
        {userToken === null ? <BottomNavigator /> : <LoggedInNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
