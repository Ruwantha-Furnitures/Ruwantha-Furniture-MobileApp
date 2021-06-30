import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ErrorModal = ({ errorMessage }) => {
  return (
    <View style={styles.errorModal}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorModal: {
    backgroundColor: "#F00",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  errorMessage: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default ErrorModal;
