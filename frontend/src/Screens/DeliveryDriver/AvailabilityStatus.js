//AvailabilityStatus.js

import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DriverContext } from "../../Reducers/driverReducer";

const AvailabilityStatus = ({ navigation }) => {
  
  const driverContext = useContext(DriverContext);
  useEffect(() => {
    console.log(driverContext.driverAvailability.availability);
  });

  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ChangeAvailability")}>
      <View
        style={
          driverContext.driverAvailability.availability === 1
            ? styles.availableStatus
            : styles.unavailableStatus
        }
      >
        <Text style={styles.text}>
          {driverContext.driverAvailability.availability === 1
            ? "Available"
            : "Not Available"}
        </Text>
        <View style={{ marginTop: -2 }}>
          <AntDesign name="checkcircle" size={25} color="white" />
        </View>
      </View>
    </TouchableOpacity>
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
  unavailableStatus: {
    backgroundColor: "red",
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

