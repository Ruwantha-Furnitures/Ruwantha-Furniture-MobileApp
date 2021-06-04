import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
const AppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.textContainer}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: "#FB9F3C",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 2,
    width: 120,
  },
  textContainer: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 20,
  },
});
export default AppButton;
