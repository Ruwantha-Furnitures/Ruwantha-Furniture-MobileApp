import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UserProfileScreen from "../Screens/UserProfileScreen";

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
      }}
    >
      <UserProfileStack.Screen
        name="User Profile"
        component={UserProfileScreen}
      />
    </UserProfileStack.Navigator>
  );
};

export default UserProfileStackNav;
