import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AvailabilityChangeScreen from "../Screens/DeliveryDriver/AvailabilityChangeScreen";
import ViewOrdersScreen from "../Screens/DeliveryDriver/ViewOrdersScreen";
import AvailabilityStackNav from "./DeliveryDriver/AvailabilityStackNav";
import ViewOrderStackNav from "./DeliveryDriver/ViewOrderStackNav";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const DeliveryDriverBottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ViewOrders"
      activeColor="#E7E5E9"
      barStyle={{ backgroundColor: "#B89068" }}
    >
      <Tab.Screen
        name="ViewOrders"
        component={ViewOrderStackNav}
        options={{
          tabBarLabel: "ViewOrders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Availability"
        component={AvailabilityStackNav}
        options={{
          tabBarLabel: "changeAvailability",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DeliveryDriverBottomNavigator;
