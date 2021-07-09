import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutUsScreen from "../Screens/AboutUsScreen";
import LoginScreen from "../Screens/LoginScreen";

const AboutUsStack = createStackNavigator();
const AboutUsStackNav = () => {
  return (
    <AboutUsStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#B89068",
        },
        headerTintColor: "#fff",
        headerTitle: "",
      }}
    >
      <AboutUsStack.Screen name="About Us" component={AboutUsScreen} />
      <AboutUsStack.Screen name="Login" component={LoginScreen} />
    </AboutUsStack.Navigator>
  );
};

export default AboutUsStackNav;
