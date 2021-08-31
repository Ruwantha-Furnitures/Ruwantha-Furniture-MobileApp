import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewOrdersScreen from "../../Screens/DeliveryDriver/ViewOrdersScreen";
import OrderDetailsScreen from "../../Screens/DeliveryDriver/OrderDetailsScreen";
import AvailabilityChangeScreen from "../../Screens/DeliveryDriver/AvailabilityChangeScreen";

const ViewOrderStack = createStackNavigator();

const ViewOrderStackNav = () => {
  return (
    <ViewOrderStack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#B89068",
        },
        headerTintColor: "#fff",
        headerTitle: "",
      }}
    >
      <ViewOrderStack.Screen name="ViewOrders" component={ViewOrdersScreen} />
      <ViewOrderStack.Screen
        name="OrderDetails"
        component={OrderDetailsScreen}
      />
      <ViewOrderStack.Screen
        name="ChangeAvailability"
        component={AvailabilityChangeScreen}
      />
    </ViewOrderStack.Navigator>
  );
};

export default ViewOrderStackNav;
