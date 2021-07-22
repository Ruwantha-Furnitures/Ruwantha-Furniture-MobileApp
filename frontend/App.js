import React, { useMemo, useState, useReducer } from "react";
import { StyleSheet, Text, View, StatusBar, LogBox } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNavigator from "./src/config/BottomNavigator";
import DeliveryDriverBottomNavigator from "./src/config/DeliveryDriverBottomNavigator";
import LoggedInNavigator from "./src/config/LoggedInNavigator";
import { AuthContext } from "./src/Components/Context/AuthContext";
import {
  loginReducer,
  LoginContext,
} from "./src/Components/Reducers/loginReducer";

const initialState = { userLevel: 1, userToken: null };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "login":
//       return {
//         userToken: action.payload.userToken,
//         userLevel: action.payload.userLevel,
//       };
//     case "logout":
//       return {
//         userToken: null,
//         userLevel: 1,
//       };
//   }
// };
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
    <AuthContext.Provider value={value}>
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
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
