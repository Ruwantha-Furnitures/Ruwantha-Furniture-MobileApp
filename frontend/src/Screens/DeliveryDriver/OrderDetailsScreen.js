//More details on the order
//OrderDetailsScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import OrderMoreDetails from "../../Components/Screen/DeliveryDriver/OrderMoreDetails";
import PurchasedProductTable from "../../Components/Screen/DeliveryDriver/PurchasedProductTable";
const OrderDetailsScreen = ({ route }) => {
  const { order } = route.params;
  console.log(order);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <OrderMoreDetails order={order} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
});
export default OrderDetailsScreen;