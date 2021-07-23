//More details on the order

import React from "react";
import { View, Text, StyleSheet } from "react-native";
const OrderDetailsScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>View the Order Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
});
export default OrderDetailsScreen;
