import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../Screens/DeliveryDriver/HomeScreen";

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
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;
