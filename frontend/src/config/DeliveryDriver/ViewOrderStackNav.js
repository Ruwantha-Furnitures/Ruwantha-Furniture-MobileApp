import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewOrdersScreen from "../../Screens/DeliveryDriver/ViewOrdersScreen";
import OrderDetailsScreen from "../../Screens/DeliveryDriver/OrderDetailsScreen";

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
    </ViewOrderStack.Navigator>
  );
};

export default ViewOrderStackNav;
