import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewOrdersScreen from "../../Screens/DeliveryDriver/ViewOrdersScreen";
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
    </ViewOrderStack.Navigator>
  );
};

export default ViewOrderStackNav;
