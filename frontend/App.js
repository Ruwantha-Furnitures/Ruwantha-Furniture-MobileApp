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
import {
  cartReducer,
  CartContext,
} from "./src/Components/Reducers/cartReducer";

const initialState = { userLevel: 1, userToken: null };
const initialCartState = {
  cartProductID: [],
  quantity: 0,
  totalAmount: 0,
  totalDiscountAmount: 0,
};
const loginContext = LoginContext;
const cartContext = CartContext;

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [userDetails, dispatch] = useReducer(loginReducer, initialState);
  const [cartDetails, dispatchCart] = useReducer(cartReducer, initialCartState);
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
            <cartContext.Provider value={{ cartDetails, dispatchCart }}>
              <BottomNavigator />
            </cartContext.Provider>
          ) : (
            <cartContext.Provider value={{ cartDetails, dispatchCart }}>
              <LoggedInNavigator />
            </cartContext.Provider>
          )
        ) : (
          <DeliveryDriverBottomNavigator />
        )}
      </NavigationContainer>
    </loginContext.Provider>
  );
}

const styles = StyleSheet.create({});
