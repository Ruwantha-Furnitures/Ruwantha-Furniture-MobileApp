//AvailabilityStatus.js
//Path:frontend/Components/DeliveryDriver/AvailabilityStatus.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const AvailabilityStatus = () => {
  return (
    <View style={styles.availableStatus}>
      <Text style={styles.text}>Available</Text>
      <View style={{ marginTop: -2 }}>
        <AntDesign name="checkcircle" size={25} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  availableStatus: {
    backgroundColor: "green",
    borderRadius: 20,
    paddingHorizontal: 15,
    letterSpacing: 1,
    paddingVertical: 15,
    fontSize: 20,
    marginLeft: 25,
    maxWidth: 240,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    width: 70,
  },
});

export default AvailabilityStatus;
