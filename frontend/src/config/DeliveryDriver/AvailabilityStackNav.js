import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AvailabilityChangeScreen from "../../Screens/DeliveryDriver/AvailabilityChangeScreen";

const AvailabilityStack = createStackNavigator();

const AvailabilityStackNav = () => {
  return (
    <AvailabilityStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#B89068",
        },
        headerTintColor: "#fff",
        headerTitle: "",
      }}
    >
      <AvailabilityStack.Screen
        name="AvailabilityCheck"
        component={AvailabilityChangeScreen}
      />
    </AvailabilityStack.Navigator>
  );
};

export default AvailabilityStackNav;
