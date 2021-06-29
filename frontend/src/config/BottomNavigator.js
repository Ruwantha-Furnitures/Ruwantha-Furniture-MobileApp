import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import ViewProductARScreen from "../Screens/ViewProductARScreen";
import UserProfileStackNav from "./UserProfileStackNav";
import AboutUsStackNav from "./AboutUsStackNav";
import HomeStackNav from "./HomeStackNav";
import ProductStackNav from "./ProductStackNav";
const Tab = createMaterialBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#E7E5E9"
      barStyle={{ backgroundColor: "#B89068" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNav}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductStackNav}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sofa" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProductsAR"
        component={ViewProductARScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color }) => (
            <Feather name="camera" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="AboutUs"
        component={AboutUsStackNav}
        options={{
          tabBarLabel: "About Us",
          tabBarIcon: ({ color }) => (
            <Entypo name="shop" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={UserProfileStackNav}
        options={{
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" color={color} size={29} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
