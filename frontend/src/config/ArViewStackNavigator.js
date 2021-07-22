import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewProductARScreen from "../Screens/Customer/ViewProductARScreen";
const ArViewStack = createStackNavigator();
const ArViewStackNavigator = () => {
  return (
    <ArViewStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#291B1B",
        },
        headerTintColor: "#fff",
        headerShown: false,
      }}
    >
      <ArViewStack.Screen name="ArView" component={ViewProductARScreen} />
    </ArViewStack.Navigator>
  );
};

export default ArViewStackNavigator;
