import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
const FormAppButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonLg}>
      <Text style={styles.textLg}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLg: {
    elevation: 8,
    backgroundColor: "#FB9F3C",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: 120,
  },
  textLg: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginLeft: 20,
  },
});
export default FormAppButton;
