import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
const AppButton = ({ onPress, title, size, width }) => {
  const newStyle = {
    width,
  };
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonLg, newStyle]}>
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
    paddingHorizontal: 5,
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
    fontSize: 15,
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
