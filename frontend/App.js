import React, { useMemo, useState, useReducer } from "react";
import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigator from "./src/config/BottomNavigator";
import DeliveryDriverBottomNavigator from "./src/config/DeliveryDriverBottomNavigator";
import LoggedInNavigator from "./src/config/LoggedInNavigator";
import {
  loginReducer,
  LoginContext,
} from "./src/Components/Reducers/loginReducer";

const initialState = { userLevel: 1, userToken: null };
const loginContext = LoginContext;

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [userDetails, dispatch] = useReducer(loginReducer, initialState);
  const value = {
    userToken,
    setUserToken,
  };

  LogBox.ignoreAllLogs();

  return (
    <loginContext.Provider value={{ userDetails, loginDispatch: dispatch }}>
      <NavigationContainer>
        {userDetails.userLevel === 1 ? (
          userDetails.userToken === null ? (
            <BottomNavigator />
          ) : (
            <LoggedInNavigator />
          )
        ) : (
          <DeliveryDriverBottomNavigator />
        )}
      </NavigationContainer>
    </loginContext.Provider>
  );
}

const styles = StyleSheet.create({});
