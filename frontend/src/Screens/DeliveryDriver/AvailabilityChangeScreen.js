//checking the availability change of driver

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AvailabilityChangeScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <Text>Availability</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
  },
});
export default AvailabilityChangeScreen;
