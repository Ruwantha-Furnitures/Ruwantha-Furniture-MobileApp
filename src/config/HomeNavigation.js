import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../Screens/HomeScreen";
import { Image } from "react-native";

const HomeStack = createStackNavigator();
const HomeNavigation = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        title: (
          <Image
            style={{ width: 150, height: 30 }}
            source={require("../../assets/logo.png")}
          />
        ),
        headerTitleAlign: "right",
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="menu"
              size={25}
              backgroundColor="#FB9F3C"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
