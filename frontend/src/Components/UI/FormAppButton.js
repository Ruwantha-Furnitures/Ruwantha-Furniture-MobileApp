import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
const FormAppButton = ({ onPress, title, width, type }) => {
  const dimensions = {
    width,
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        type === "Submit"
          ? [styles.buttonSubmit, dimensions]
          : [styles.buttonCancel, dimensions]
      }
    >
      <Text style={styles.textLg}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSubmit: {
    elevation: 8,
    backgroundColor: "#0F0",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 25,
  },
  buttonCancel: {
    elevation: 8,
    backgroundColor: "#F00",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  textLg: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 20,
  },
});
export default FormAppButton;
