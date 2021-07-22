import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfileScreen from "../Screens/UserProfileScreen";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/Customer/CartScreen";
import CheckOutScreen from "../Screens/Customer/CheckOutScreen";

const UserProfileStack = createStackNavigator();

const UserProfileStackNav = () => {
  return (
    <UserProfileStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#B89068",
        },
        headerTintColor: "#fff",
        initialRouteName: "User Profile",
        headerTitle: "",
      }}
    >
      <UserProfileStack.Screen
        name="User Profile"
        component={UserProfileScreen}
      />
      <UserProfileStack.Screen name="Cart" component={CartScreen} />
      <UserProfileStack.Screen name="CheckOut" component={CheckOutScreen} />
    </UserProfileStack.Navigator>
  );
};

export default UserProfileStackNav;
