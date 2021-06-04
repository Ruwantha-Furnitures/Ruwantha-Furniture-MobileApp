import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
const AppButton = ({ onPress, title, size }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={size === "lg" ? styles.buttonLg : styles.buttonMd}
    >
      <Text style={size === "lg" ? styles.textLg : styles.textMd}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLg: {
    elevation: 8,
    backgroundColor: "#FB9F3C",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 2,
    width: 120,
  },
  buttonMd: {
    backgroundColor: "#FB9F3C",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 2,
    elevation: 6,
    width: 80,
  },
  textLg: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 20,
  },
  textMd: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 8,
    marginLeft: 10,
  },
});
export default AppButton;
