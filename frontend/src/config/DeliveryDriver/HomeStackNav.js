import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/DeliveryDriver/HomeScreen";
import AvailabilityChangeScreen from "../../Screens/DeliveryDriver/AvailabilityChangeScreen";
const HomeStack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#B89068",
        },
        headerTintColor: "#fff",
        headerTitle: "",
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="ChangeAvailability"
        component={AvailabilityChangeScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
