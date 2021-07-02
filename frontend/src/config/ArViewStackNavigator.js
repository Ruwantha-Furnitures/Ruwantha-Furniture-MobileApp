import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewProductARScreen from "../Screens/ViewProductARScreen";
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
      }}
    >
      <ArViewStack.Screen name="ArView" component={ViewProductARScreen} />
    </ArViewStack.Navigator>
  );
};

export default ArViewStackNavigator;
