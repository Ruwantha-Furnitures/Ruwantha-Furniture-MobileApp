//viewing all the orders for today

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const ViewOrdersScreen = ({ navigation }) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.header}>Order-Details</Text>
      <View>
        <Text>Order 1</Text>
        <TouchableOpacity onPress={() => navigation.navigate("OrderDetails")}>
          <Text>More Details</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Order 2</Text>
        <TouchableOpacity onPress={() => navigation.navigate("OrderDetails")}>
          <Text>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  header: {
    fontWeight: "100",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
});
export default ViewOrdersScreen;
