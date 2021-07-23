import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AvailabilityChangeScreen from "../Screens/DeliveryDriver/AvailabilityChangeScreen";
import ViewOrdersScreen from "../Screens/DeliveryDriver/ViewOrdersScreen";
import AvailabilityStackNav from "./DeliveryDriver/AvailabilityStackNav";
import ViewOrderStackNav from "./DeliveryDriver/ViewOrderStackNav";
import HomeStackNav from "./DeliveryDriver/HomeStackNav";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const DeliveryDriverBottomNavigator = () => {
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
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="tablet-dashboard"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ViewOrders"
        component={ViewOrderStackNav}
        options={{
          tabBarLabel: "View Orders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="truck-delivery"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Availability"
        component={AvailabilityStackNav}
        options={{
          tabBarLabel: "changeAvailability",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event-available" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DeliveryDriverBottomNavigator;
